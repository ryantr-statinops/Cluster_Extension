# Google Auth & API Integration

Cơ chế xác thực là chìa khóa để Cluster có quyền truy cập vào dữ liệu Google Sheets của người dùng một cách an toàn.

## 1. Authentication Strategy

Hệ thống sử dụng **Firebase Auth** kết hợp với **Google OAuth 2.0**:
- **Identity**: Firebase Auth quản lý định danh người dùng.
- **Data Access**: Google OAuth Scopes quản lý quyền truy cập vào Spreadsheet.

## 2. Required Scopes

Để MVP hoạt động, hệ thống yêu cầu các quyền tối thiểu:
- `https://www.googleapis.com/auth/spreadsheets.readonly`: Để đọc dữ liệu bảng tính.
- `https://www.googleapis.com/auth/userinfo.profile`: Để lấy thông tin định danh cơ bản.

## 3. Token Lifecycle

1.  **Grant**: Người dùng cấp quyền qua popup OAuth.
2.  **Storage**: 
    - `idToken`: Dùng để xác thực với Firebase.
    - `accessToken`: Dùng để gọi Google Sheets API.
3.  **Refresh**: Sử dụng `refreshToken` để lấy token mới khi `accessToken` hết hạn mà không cần làm phiền người dùng.

---

## 4. Security Implementation

- **State Parameter**: Sử dụng tham số `state` trong OAuth flow để chống lại các cuộc tấn công CSRF.
- **Restricted Access**: Toàn bộ quá trình gọi API Google được thực hiện từ Client-side bằng token của người dùng, đảm bảo hệ thống Cluster không lưu trữ dữ liệu Sheets của người dùng trên server riêng.

---

# Related
- [[firebase-architecture]]
- [[extension-architecture]]
- [[index]]
