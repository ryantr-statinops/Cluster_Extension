# Extension Architecture

Chrome Extension đóng vai trò là "Data Bridge" kết nối giữa hệ sinh thái Google và Web App Cluster.

## 1. Extension Components

- **Popup UI**: Giao diện người dùng khi nhấn vào icon extension, dùng để đăng nhập và chọn sheet.
- **Background Script**: Quản lý Authentication và giao tiếp lâu dài với Google API.
- **Content Script**: (Tùy chọn) Dùng để trích xuất metadata trực tiếp từ DOM của Google Sheets nếu cần.
- **Bridge Module**: Xử lý việc gửi dữ liệu sang Web App qua `postMessage`.

---

## 2. Ingestion Flow

Quy trình lấy dữ liệu diễn ra như sau:

1.  **Detection**: Extension nhận diện Spreadsheet ID từ URL hiện tại.
2.  **Authentication**: Kiểm tra Access Token. Nếu hết hạn, yêu cầu người dùng login lại (OAuth2).
3.  **Metadata Fetch**: Gọi Google Sheets API để lấy danh sách Sheet names, số dòng, số cột.
4.  **User Confirmation**: Người dùng chọn các Sheet cụ thể cần import trong Popup.
5.  **Data Extraction**: Tải dữ liệu (CSV/JSON format) từ Google API.
6.  **Bridge to Web App**: 
    - Nếu Web App đang mở: Gửi dữ liệu qua `window.postMessage`.
    - Nếu Web App chưa mở: Mở tab mới kèm dữ liệu trong URL hoặc lưu vào bộ nhớ tạm.

---

## 3. Communication Security

Để đảm bảo an toàn, việc giao tiếp giữa Extension và Web App tuân thủ:

- **Origin Validation**: Chỉ gửi dữ liệu đến các domain được cho phép (ví dụ: `cluster.app`).
- **Token Handling**: Access Token không được lưu trong `localStorage` mà chỉ giữ trong bộ nhớ Runtime của Extension hoặc `chrome.storage.secure`.
- **Encrypted Bridge**: Dữ liệu nhạy cảm có thể được mã hóa trước khi gửi qua bridge.

---

## 4. Real-time Bridge

Extension có thể lắng nghe sự thay đổi của Google Sheets và gửi tín hiệu "Reload" cho Web App để kích hoạt [[execution-model]]. Điều này giúp Canvas luôn cập nhật dữ liệu mới nhất mà không cần người dùng thao tác thủ công.

---

# Related
- [[google-auth]]
- [[data-flow]]
- [[firebase-architecture]]
- [[index]]
