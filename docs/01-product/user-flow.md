# User Flow (MVP)

## 1. Import Data from Google Sheets
- **Entry**: User mở Google Sheets và bật Chrome Extension.
- **Action**: Nhấn "Import Current Sheet".
- **Result**: Dữ liệu xuất hiện trong mục **Storage** trên Homepage của Web App.

## 2. Setup Workspace
- **Action**: Tạo Workspace mới.
- **Action**: Mở Sidebar → Data Sources → Import từ Storage.
- **Result**: Dữ liệu sẵn sàng để kéo thả lên Canvas.

## 3. Building Pipeline
- **Action**: Kéo 2 sheets vào Canvas (tạo 2 Data Source Nodes).
- **Action**: Nối cả 2 vào 1 **Data Hub Node**.
- **Action**: Cấu hình Merge (ví dụ: Join theo cột 'ID').
- **Action**: Nối Data Hub vào **Pivot Table Node**.
- **Result**: Một bảng tổng hợp dữ liệu từ 2 nguồn được hiển thị.

## 4. Analysis & Export
- **Action**: Viết SQL hoặc dùng Visual UI để điều chỉnh Pivot Table.
- **Action**: Xem kết quả real-time.
- **Action**: Nhấn Export CSV để tải kết quả về máy.

---

# Related
- [[overall]]
- [[mvp-scope]]
- [[index]]
