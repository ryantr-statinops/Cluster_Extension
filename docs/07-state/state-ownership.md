# State Ownership

Định nghĩa rõ "Dữ liệu nào do ai quản lý" để tránh duplicate state và bug đồng bộ.

## 1. Zustand (Memory Runtime Owner)
- **Active Workspace Metadata**: ID, tên, trạng thái Dirty (chưa lưu).
- **Canvas Interaction**: Vị trí chuột, node đang chọn, zoom level.
- **Temporary Node State**: Dữ liệu đang nhập dở trong form config của Node.
- **UI State**: Sidebar mở/đóng, Modal đang hiển thị.

## 2. IndexedDB / Dexie (Local Persistence Owner)
- **Raw Datasets**: Các dòng dữ liệu thô import từ Google Sheets.
- **Processed Results**: Kết quả sau khi Merge hoặc Pivot (Cache lại để tránh tính toán lại liên tục).
- **Offline Workspace Cache**: Bản sao local của workspace để mở nhanh khi không có mạng.

## 3. Firebase (Cloud Persistence Owner)
- **User Profile**: Thông tin tài khoản, avatar, settings.
- **Workspace Structure**: Danh sách Nodes, Edges và tọa độ của chúng (Metadata).
- **Data Source References**: Liên kết (Spreadsheet ID) nhưng KHÔNG lưu nội dung dữ liệu.

## 4. React Flow (View Owner)
- **Visual Rendering**: Cách hiển thị đường nối (Edge paths), render các component Node.
- **Viewport State**: Trạng thái hiển thị trên màn hình (chỉ dùng để render, data gốc vẫn ở Zustand).

---

# Related
- [[zustand-architecture]]
- [[dexie-schema]]
- [[firebase-architecture]]
- [[index]]
