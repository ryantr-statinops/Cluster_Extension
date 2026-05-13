# IndexedDB Strategy (via Dexie.js)

Hệ thống sử dụng IndexedDB làm lớp lưu trữ bền vững (Persistence Layer) chính tại máy cục bộ của người dùng.

## 1. Storage Responsibility

- **Raw Datasets**: Lưu trữ dữ liệu thô (JSON/CSV) import từ Google Sheets.
- **Processing Cache**: Lưu trữ kết quả của các Node trung gian (Transform, Hub) để tăng tốc độ load canvas.
- **Workspace State Backup**: Lưu trữ bản sao của cấu trúc Canvas để hỗ trợ làm việc offline.

---

## 2. Table Schema Overview

Dựa trên `dexie-schema.md`, các bảng được tối ưu như sau:

- **`datasets`**: `++id, name, sourceId, importedAt` (Lưu trữ hàng chục MB dữ liệu).
- **`pivot_cache`**: `nodeId, inputHash, result` (Lưu kết quả tính toán AlaSQL).
- **`workspace_backups`**: `workspaceId, snapshot` (Sử dụng cho cơ chế undo/redo và recovery).

---

## 3. Data Sync & Update Strategy

Khi dữ liệu từ Google Sheets thay đổi:
1.  **Detection**: Extension thông báo có sự thay đổi metadata (ETag hoặc LastModified).
2.  **Ingestion**: Tải dữ liệu mới về.
3.  **Conflict Strategy**:
    - **Overwrite**: Mặc định xóa dữ liệu cũ và ghi đè dữ liệu mới vào IndexedDB.
    - **Append**: (Tùy chọn) Thêm dòng mới vào cuối bảng hiện tại.
4.  **Invalidation**: Tự động đánh dấu tất cả các Node đang dùng dataset này là `dirty` để kích hoạt [[execution-model]].

---

## 4. Performance & Limits

- **Storage Limit**: Trình duyệt hiện đại cho phép dùng đến 80% dung lượng đĩa trống. Cluster sẽ cảnh báo nếu dữ liệu vượt quá 500MB.
- **Bulk Operations**: Sử dụng `bulkPut` và `bulkDelete` của Dexie để tối ưu tốc độ ghi dữ liệu lớn.
- **Serialization**: Dữ liệu được lưu dưới dạng Array của Objects để AlaSQL có thể truy vấn ngay mà không cần convert lại.

---

## 5. Security & Cleanup

- **Encryption**: Trong MVP, dữ liệu chưa được mã hóa. Phiên bản sau sẽ hỗ trợ mã hóa AES-256 cho các dataset nhạy cảm.
- **Auto-Cleanup**: Tự động xóa cache của các Node không còn tồn tại hoặc các workspace đã bị xóa.
- **Manual Purge**: Người dùng có thể nhấn "Clear Local Data" để xóa toàn bộ IndexedDB nếu cần bảo mật tuyệt đối.

---

# Related
- [[dexie-schema]]
- [[data-flow]]
- [[architecture]]
- [[index]]
