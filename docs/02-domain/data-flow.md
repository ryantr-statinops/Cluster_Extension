# Data Flow Architecture

Hệ thống Cluster hoạt động dựa trên luồng dữ liệu 1 chiều (Unidirectional Data Flow) từ nguồn (Google Sheets) đến đích (Pivot Result).

## 1. Import Flow
1. **Google Sheets**: Người dùng kích hoạt Extension.
2. **Chrome Extension**: Trích xuất metadata và dữ liệu thô.
3. **Web App (postMessage)**: Nhận dữ liệu và chuyển đổi sang format nội bộ.
4. **IndexedDB (Dexie)**: Lưu trữ dữ liệu thô vào Storage để dùng lâu dài.

## 2. Workspace Pipeline Flow
1. **Data Source Node**: Đọc dữ liệu từ IndexedDB và đẩy vào pipeline.
2. **Transform Node**: Thực hiện các biến đổi (Filter/Rename) tại Frontend.
3. **Data Hub Node**: Thu thập dữ liệu từ nhiều nguồn, chuẩn bị cho quá trình Merge.
4. **Processing Engine (AlaSQL)**: Thực thi câu lệnh SQL để Merge và Pivot dữ liệu.
5. **Runtime Result**: Kết quả cuối cùng được hiển thị trên Canvas UI.

## 3. State Sync Flow
- **Heavy Data**: Luôn nằm trong IndexedDB, không bao giờ đưa vào Zustand.
- **Metadata (Graph structure)**: Firebase ↔ Zustand ↔ Canvas UI.
- **Temporary Results**: Được lưu trong bộ nhớ Runtime (Memory) để hiển thị tức thời.

---

# Related
- [[entities]]
- [[pipeline-runtime]]
- [[dexie-schema]]
- [[state-ownership]]
- [[index]]
