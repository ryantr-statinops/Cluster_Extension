# Canvas UI & Interaction

Giao diện Canvas là trái tim của Cluster, được thiết kế theo phong cách **Infinite Grid** (tương tự Figma) để mang lại trải nghiệm mượt mà và chuyên nghiệp.

## 1. Infinite Grid System

- **Hệ tọa độ**: Sử dụng hệ tọa độ lưới thay vì pixel tự do. Mọi Node khi được kéo thả sẽ tự động **Snap-to-grid**.
- **Zoom & Pan**:
  - **Pan**: Giữ phím `Space` + Chuột trái để di chuyển vùng nhìn.
  - **Zoom**: `Ctrl` + Cuộn chuột. Mật độ lưới sẽ tự động thay đổi theo mức độ zoom để tối ưu hiển thị.
- **Background**: Màu trung tính (Charcoal/Dark Grey) với các điểm lưới tinh tế.

---

## 2. Node Behaviors

- **Non-overlapping**: Hệ thống sử dụng thuật toán kiểm tra va chạm (Collision Detection). Các Node không được phép nằm đè lên nhau.
- **Push-to-move**: Khi kéo Node A vào vị trí của Node B, Node B sẽ tự động bị đẩy sang ô lưới trống gần nhất.
- **Z-Index Static**: Tất cả các Node nằm trên cùng một mặt phẳng ($Z > 0$). Lớp nền nằm ở $Z = 0$.

---

## 3. Interaction Logic

### A. Selection & Multi-select
- Click vào Node để chọn (Select).
- Giữ `Shift` + Click hoặc quét chuột để chọn nhiều Node cùng lúc.
- Khi được chọn, Node sẽ hiển thị viền màu Blue (Figma style) và các điểm neo (handles) để tương tác.

### B. Connection (Edges)
- Người dùng kéo từ output port của Node này sang input port của Node kia để tạo kết nối.
- Đường nối (Edge) sử dụng dạng **Bezier curve** hoặc **Step line** tùy cấu hình.
- Màu sắc của Edge thay đổi tùy theo trạng thái: Đang chạy (Animated), Lỗi (Red), Bình thường (Gray).

---

## 4. Components Layout

- **Left Sidebar**: Chứa danh sách Data Sources (dạng cây) và thư viện Nodes (kéo thả vào Canvas).
- **Right Sidebar (Properties)**: Xuất hiện khi chọn một Node, cho phép cấu hình chi tiết (ví dụ: viết SQL, chọn cột).
- **Top Toolbar**: Các công cụ global như Save, Sync, Export, Zoom level.
- **Bottom Status Bar**: Hiển thị trạng thái runtime, thông báo lỗi và tiến độ thực thi pipeline.

---

## 5. Visual Aesthetics (Premium SaaS)

- **Typography**: Sử dụng font Sans-serif hiện đại (Inter/Roboto).
- **Micro-animations**: Hiệu ứng chuyển động mượt mà khi Node bị đẩy hoặc khi dữ liệu đang chảy qua pipeline.
- **Glassmorphism**: Sử dụng hiệu ứng mờ (backdrop-blur) cho các sidebar và modal để tạo cảm giác không gian sâu.

---

# Related
- [[frontend-core]]
- [[react-flow-architecture]]
- [[wireframe-ui]]
- [[index]]
