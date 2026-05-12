Chào bạn, đây là bản hiệu chỉnh tài liệu UI Specification dựa trên yêu cầu mới của bạn: Chuyển từ phong cách Linux/Terminal sang phong cách Infinite Grid Canvas hiện đại (như Figma), tối giản hóa layer và loại bỏ hoàn toàn trạng thái chồng lấp (floating).

UI Specification: Single-Layer Infinite Grid Canvas
1. Kiến trúc cốt lõi: Infinite Grid Workspace
Paradigm: Không gian làm việc 2D vô hạn (Infinite Canvas) dựa trên hệ tọa độ lưới (Grid-based Coordinate System).
Single Workspace: Chỉ duy nhất một không gian làm việc đồng nhất, không chia nhiều tab hay môi trường ảo.
Navigation: Tương tác tương tự Figma:
Pan: Giữ phím Space + Chuột trái (hoặc chuột giữa) để di chuyển toàn bộ vùng nhìn.
Zoom: Ctrl + Cuộn chuột để phóng to/thu nhỏ. Tỉ lệ hiển thị lưới (Grid density) sẽ tự động thích ứng theo mức độ zoom.
Coordinate System: Vị trí của các Node được xác định bằng đơn vị ô lưới ($Unit_{row}, Unit_{col}$) thay vì pixel tự do.
2. Quy tắc của Node & Cửa sổ (Node Behaviors)
 Quy tắc của Node & Cửa sổ (Node Behaviors)Non-overlapping (Bắt buộc): Áp dụng thuật toán Grid-based Collision Prevention.Push-to-Move Logic: Khi Node A được thả vào vị trí của Node B, Node B sẽ tự động tính toán và di chuyển đến ô lưới trống gần nhất (Nearest Empty Slot) dựa trên hướng bị tác động.Z-Index: Toàn bộ Node nằm trên cùng một mặt phẳng ($Z > 0$), lớp nền Infinite Grid nằm ở $Z = 0$.
3. Phong cách thiết kế (Visual Aesthetic)
Figma-inspired UI: * Background: Màu xám nhạt (Light Grey) hoặc xám đậm (Charcoal) trung tính. Các đường lưới (Grid lines) hiển thị rõ nét khi zoom gần và mờ dần khi zoom xa.
Nodes: Viền sắc nét (stroke mảnh), góc bo nhẹ (4-8px), đổ bóng đổ (drop shadow) tối giản để tạo chiều sâu nhưng không tạo cảm giác lớp (layer).
Typography: Sử dụng font Sans-serif hiện đại (Inter, Roboto, hoặc San Francisco).
No Linux/CLI Style: Loại bỏ hoàn toàn phong cách Terminal, ASCII art hay độ trong suốt quá mức. Ưu tiên sự sạch sẽ, tập trung vào nội dung bên trong Node.
4. Cơ chế tương tác (Interaction Logic)
Single Layer Focus: Vì chỉ có một layer duy nhất, việc tương tác trở nên trực diện.
Click vào Node là chọn (Select).
Drag vào cạnh để Resize theo lưới.	
Selection State: Khi một Node được chọn, viền sẽ đổi màu (ví dụ: xanh Blue đặc trưng của Figma) và hiển thị các điểm neo (handles) để tương tác.
Elimination of Floating State: Ngay khi buông chuột sau khi kéo, Node phải nằm gọn trong các ô lưới. Không có trạng thái lơ lửng giữa các ô hoặc đè lên nhau.
5. Tóm tắt kỹ thuật cho AI( để build sản phẩm ) (Technical Summary)
Core Logic: Xây dựng hệ thống quản lý vị trí dựa trên 2D Array hoặc Linked List của các ô lưới để kiểm soát va chạm (Collision Detection).
Coordinate Mapping: Một hàm chuyển đổi giữa $Pointer(x, y)$ của chuột sang $Grid(row, col)$.
Constraint: * Overlap = False
Z-Index = Static (Tất cả Node nằm trên cùng một mặt phẳng).
Alignment = Snap-to-grid.
Transition: Sử dụng Layout Transitions (như Framer Motion hoặc CSS Transitions) để khi các Node bị đẩy (push) bởi Node khác, chúng sẽ di chuyển mượt mà đến vị trí mới thay vì nhảy cóc (teleport).
6. Tóm tắt kỹ thuật & Bảo mật (Bổ sung mới)

Security: Access Token từ Extension được truyền qua Web App bằng PostMessage API với cơ chế xác thực origin nghiêm ngặt để đảm bảo an toàn.

Data Pipeline: Dữ liệu chảy từ Data Source Node → Processing Node (SQL) → View Node thông qua các luồng xử lý bất đồng bộ, đảm bảo UI không bị đứng (lag).

Persistence: Trạng thái của các Node trên Canvas được đồng bộ với Firebase, trong khi dữ liệu nội dung được lưu tại Local Storage của trình duyệt (IndexedDB).

Ghi chú: Thiết kế này biến Canvas thành một "bàn cờ" thông minh, nơi các quân cờ (Node) có thể có kích thước khác nhau nhưng luôn tôn trọng không gian của nhau và quy luật của lưới.
Bạn thấy bản mô tả này đã sát với ý tưởng về một "Figma Grid" thu gọn và không chồng lấp của bạn chưa?

