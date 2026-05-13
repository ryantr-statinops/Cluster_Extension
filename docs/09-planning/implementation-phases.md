# Implementation Phases

## Phase 1: Data & State Foundation
**Mục tiêu**: Thiết lập bộ máy lưu trữ và quản lý trạng thái cốt lõi.
- [ ] Định nghĩa Schema IndexedDB (Dexie).
- [ ] Xây dựng các Repositories để CRUD dữ liệu local.
- [ ] Thiết lập các Zustand stores (Workspace, Canvas, Storage).
- [ ] Tích hợp Firebase Auth cơ bản.

## Phase 2: Runtime Engine Development
**Mục tiêu**: Xây dựng bộ não xử lý dữ liệu.
- [ ] Tích hợp AlaSQL và viết các hàm helper thực thi query.
- [ ] Xây dựng Graph Builder để phân tích dependency giữa các Node.
- [ ] Cài đặt logic "Node Runner" (chạy từng node theo thứ tự).
- [ ] Implement cơ chế cache kết quả trung gian.

## Phase 3: Infinite Canvas & Node UI
**Mục tiêu**: Hiện thực hóa giao diện tương tác.
- [ ] Cài đặt React Flow với Controlled Mode.
- [ ] Xây dựng Custom Nodes: Source, Transform, Hub, Pivot.
- [ ] Implement logic Snap-to-grid và Collision Detection cơ bản.
- [ ] Xây dựng Sidebar quản lý Data Sources.

## Phase 4: Integration & Bridge
**Mục tiêu**: Kết nối với nguồn dữ liệu thực tế.
- [ ] Hoàn thiện Chrome Extension (Metadata extraction).
- [ ] Xây dựng Bridge logic (postMessage) để nhận dữ liệu từ Extension.
- [ ] Tích hợp Google Sheets API để sync dữ liệu.

---

# Related
- [[roadmap]]
- [[architecture]]
- [[index]]
