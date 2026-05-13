# Node System Overview

## 1. Data Source Node
**Purpose**: Hiển thị một dataset đơn lẻ trên Canvas.
- **Input**: None.
- **Output**: Raw Dataset.
- **Features**:
  - Preview dữ liệu dạng bảng.
  - Nút Refresh để đồng bộ lại từ Google Sheets (qua Extension).
  - Tự động resize theo lượng dữ liệu preview.

---

## 2. Data Transform Node
**Purpose**: Chuẩn hóa và làm sạch dữ liệu trước khi merge.
- **Input**: 1 Dataset.
- **Output**: Transformed Dataset.
- **Features**:
  - Rename columns (Map lại tên cột cho đồng nhất).
  - Filter rows (Lọc các dòng không cần thiết).
  - Data Type conversion (Chuyển đổi kiểu dữ liệu).

---

## 3. Data Hub Node
**Purpose**: Hợp nhất nhiều nguồn dữ liệu thành một stream duy nhất.
- **Input**: Multiple Datasets.
- **Output**: Merged Dataset.
- **Features**:
  - Quản lý nhiều cổng vào (multi-input).
  - Cấu hình Merge Strategy (Join, Union, Append).
  - Hiển thị bảng kết quả sau khi hợp nhất.

---

## 4. Pivot Table Node
**Purpose**: Tạo bảng tổng hợp (Pivot) từ dữ liệu đã được xử lý.
- **Input**: 1 Merged Dataset.
- **Output**: Pivot Result Table.
- **Features**:
  - **SQL Mode**: Cho phép viết trực tiếp câu lệnh AlaSQL.
  - **Visual Mode**: Kéo thả để chọn Row, Column, Aggregation (Sum, Count, etc).
  - Xuất kết quả ra file CSV.

---

# Related
- [[entities]]
- [[pipeline-runtime]]
- [[index]]
