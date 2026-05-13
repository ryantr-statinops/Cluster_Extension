# Firebase Architecture

Firebase đóng vai trò là lớp Cloud Metadata và Authentication, giúp người dùng đồng bộ môi trường làm việc giữa các thiết bị.

## 1. Cloud vs Local Boundary

Đây là nguyên tắc quan trọng nhất của hệ thống Cluster:

| Loại dữ liệu | Nơi lưu trữ | Công nghệ |
| :--- | :--- | :--- |
| **User Account** | Cloud | Firebase Auth |
| **Workspace Metadata** (Tên, Folder, Settings) | Cloud | Firestore |
| **Canvas Structure** (Nodes, Edges, Positions) | Cloud | Firestore |
| **Heavy Datasets** (Rows/Columns) | **Local ONLY** | IndexedDB |
| **SQL Cache** | **Local ONLY** | IndexedDB |

---

## 2. Firestore Schema

Hệ thống sử dụng cấu trúc tài liệu (Document-based) để lưu trữ:

- **Collection `users`**: Lưu settings và profile người dùng.
- **Collection `workspaces`**: 
  ```json
  {
    "id": "ws_123",
    "name": "Sales Q1",
    "nodes": [...],
    "edges": [...],
    "dataSourceRefs": ["sheet_abc", "sheet_xyz"]
  }
  ```

---

## 3. Synchronization Flow

1.  **Initial Load**: Khi mở Workspace, Web App tải cấu trúc Nodes/Edges từ Firestore.
2.  **Data Hydration**: Web App kiểm tra trong IndexedDB xem các `dataSourceRefs` đã có dữ liệu chưa.
    - Nếu có: Bắt đầu thực thi pipeline.
    - Nếu thiếu: Yêu cầu người dùng đồng bộ từ Google Sheets (qua Extension).
3.  **Real-time Save**: Mọi thay đổi về vị trí Node hoặc cấu hình được debounce và lưu tự động lên Firestore.

---

## 4. Security Rules

- **User Ownership**: Mỗi người dùng chỉ có quyền đọc/ghi vào các Workspace do chính họ tạo ra.
- **Validation**: Firestore Security Rules kiểm tra cấu trúc dữ liệu trước khi cho phép ghi (đảm bảo không bị injection vào graph structure).

---

## 5. Authentication

- **Provider**: Google OAuth (Bắt buộc để đồng bộ quyền truy cập Google Sheets).
- **Session Management**: Sử dụng Firebase Auth SDK để quản lý trạng thái đăng nhập và token refresh.

---

# Related
- [[state-ownership]]
- [[architecture]]
- [[google-auth]]
- [[index]]
