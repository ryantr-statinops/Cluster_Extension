# AlaSQL Architecture

**AlaSQL** đóng vai trò là "SQL Engine" chính tại Frontend, cho phép thực hiện các phép tính phức tạp (Merge, Pivot, Group By) mà không cần Backend.

## 1. Engine Role

- **In-Memory Processing**: Xử lý dữ liệu trực tiếp trong RAM.
- **SQL Compatibility**: Hỗ trợ chuẩn SQL-99, phù hợp cho người dùng đã quen với SQL.
- **Join/Merge**: Xử lý logic JOIN phức tạp giữa nhiều Data Source Nodes.

---

## 2. Integration Strategy

Mỗi khi một Node (Hub/Pivot) cần thực thi, hệ thống sẽ gọi AlaSQL thông qua một wrapper:

```typescript
// Pseudocode cho Runtime Engine
async function executeSqlNode(node: RuntimeNode, inputs: Dataset[]): Promise<Dataset> {
  // 1. Khởi tạo môi trường AlaSQL tạm thời
  const alasql = require('alasql');
  
  // 2. Load các Input Datasets vào bảng ảo
  inputs.forEach(data => {
    alasql.exec(`CREATE TABLE [${data.id}]`);
    alasql.tables[data.id].data = data.rows;
  });

  // 3. Thực thi query
  const query = generateSqlQuery(node.config);
  const result = alasql.exec(query);

  // 4. Return format Dataset
  return formatResult(result);
}
```

---

## 3. Query Generation (Pivot Node)

Hệ thống cung cấp 2 chế độ sinh Query:

### A. Visual Mode (No-code)
Dựa trên cấu hình `Row`, `Column`, `Measure` từ UI, hệ thống tự động build query:
```sql
SELECT [Category], SUM([Sales]) 
FROM [InputTable] 
GROUP BY [Category]
```

### B. SQL Mode (Pro-code)
Người dùng viết trực tiếp query. Hệ thống chỉ hỗ trợ `SELECT` (Read-only) để đảm bảo an toàn dữ liệu.

---

## 4. Performance Optimization

- **Data Chunking**: Với các bảng cực lớn (> 50,000 dòng), dữ liệu sẽ được xử lý theo từng khối nếu cần.
- **Worker Thread**: Chạy AlaSQL trong một **Web Worker** để UI luôn mượt mà (60fps) ngay cả khi đang tính toán.
- **Caching**: Kết quả Query được lưu vào IndexedDB kèm theo `hash` của input. Nếu input không đổi, trả về kết quả cache ngay lập tức.

---

## 5. Security

- **Strict SQL**: Chỉ cho phép lệnh `SELECT`. Các lệnh `DROP`, `DELETE`, `UPDATE` bị chặn ở tầng validation.
- **Sanitization**: Tên cột và tên bảng được escape để tránh SQL Injection tại frontend.

---

# Related
- [[execution-model]]
- [[pipeline-runtime]]
- [[dexie-schema]]
- [[index]]
