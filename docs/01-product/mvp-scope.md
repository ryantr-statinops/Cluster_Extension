# MVP Scope

## Core Features
- **Data Import**: Hỗ trợ Google Sheets (dạng bảng tương tự CSV).
- **Local Storage**: Lưu trữ dataset vào IndexedDB để xử lý offline.
- **Visual Canvas**: Hệ thống Node-based để xây dựng workflow.
- **Node System**:
  - Source Node (Hiển thị dữ liệu).
  - Transform Node (Chuẩn hóa dữ liệu).
  - Data Hub Node (Merge nhiều nguồn).
  - Pivot Table Node (Tổng hợp dữ liệu bằng SQL).
- **Export**: Xuất kết quả ra file CSV.

## Out of Scope (Giai đoạn sau)
- **AI Automation**: Tự động gợi ý pipeline hoặc viết SQL bằng ngôn ngữ tự nhiên.
- **Real-time Sync**: Tự động đồng bộ 2 chiều (thay đổi trên Canvas đẩy ngược về Sheets).
- **Collaboration**: Nhiều người dùng cùng chỉnh sửa một workspace.
- **Complex Structures**: Hỗ trợ dữ liệu lồng nhau (Nested JSON) hoặc các công thức Sheets phức tạp.

## Technical Constraints
- Chạy hoàn toàn trên trình duyệt (Client-side heavy).
- Firebase chỉ lưu Metadata, không lưu dữ liệu thực tế.
- Giới hạn xử lý dataset tối ưu ở mức ~50MB - 100MB tùy RAM thiết bị.

---

# Related
- [[overall]]
- [[user-flow]]
- [[index]]
