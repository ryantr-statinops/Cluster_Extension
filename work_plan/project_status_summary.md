# Cluster Project Status Summary

## 1. Project Overview
**Cluster** is a local-first visual data workspace designed for Google Sheets users. It enables users to:
- Import data from Google Sheets via a Chrome Extension.
- Persist and organize datasets in a local storage library.
- Build visual data pipelines using nodes and edges on an infinite canvas.
- Perform complex data operations (Merge, Pivot) using SQL (AlaSQL) without affecting original source files.
- Synchronize workspace metadata to the cloud (Firebase) while keeping heavy data local (IndexedDB).

## 2. Current Progress (as of 13-05-2026)
### Infrastructure & Setup
- [x] **Project Initialization**: Vite + React + TypeScript setup.
- [x] **Folder Structure**: Feature-based modular architecture implemented in `src/`.
- [x] **Extension Migration**: Chrome Extension source decoupled into `extension/` directory.
- [x] **Core Dependencies**: Installed `zustand`, `reactflow`, `dexie`, `alasql`, `firebase`, `react-query`.
- [x] **Styling**: Tailwind CSS configured with a premium dark theme.

### Documentation Restructure
- [x] **Hierarchical System**: Moved legacy docs into `00-overview` to `10-future` folders.
- [x] **Knowledge Linking**: Integrated Obsidian-style `[[wiki-links]]` for cross-referencing.
- [x] **Navigation**: Created Global MOC (`index.md`) and System Overview.
- [x] **Placeholder Assets**: Created documentation headers for all architectural components.

## 3. Upcoming Tasks (MVP Roadmap)
### Phase 1: Database & State Layer
- [ ] Implement **Dexie.js** schema and repositories for local dataset persistence.
- [ ] Initialize **Zustand** stores (Workspace, Canvas, Storage, Runtime).
- [ ] Setup **Firebase Auth** and basic Firestore sync for workspace metadata.

### Phase 2: Runtime Engine
- [ ] Integrate **AlaSQL** for frontend SQL execution.
- [ ] Build the **Pipeline Runtime** (DAG execution, node propagation).
- [ ] Implement core executors (DataSource, Hub, Pivot).

### Phase 3: Canvas UI
- [ ] Setup **React Flow** with controlled mode (Zustand as Source of Truth).
- [ ] Create custom Node components (DataSourceNode, DataHubNode, PivotNode).
- [ ] Implement Sidebar (Data Sources, Node Library) and Grid-snapping logic.

### Phase 4: Chrome Extension
- [ ] Implement Google Sheets metadata extraction.
- [ ] Setup `postMessage` bridge between Extension and Web App.
- [ ] Finalize OAuth flow.

## 4. Open Architecture Questions
The following areas require technical decisions before implementation can proceed:

### Runtime & Execution ([[execution-model]])
- What is the exact execution lifecycle (Init -> Validate -> Execute -> Propagate)?
- How to handle circular dependency detection?
- What are the specific rules for automatic re-execution when a source node changes?

### Data Strategy ([[indexeddb-strategy]], [[alasql-architecture]])
- How to handle dataset versioning/overwriting when re-importing from Sheets?
- How to generate dynamic SQL queries from the Visual Pivot UI?
- What is the memory limit for AlaSQL processing before requiring chunking?

### Extension Bridge ([[extension-architecture]])
- How to securely pass the Google Access Token from Extension to Web App?
- Should the Extension handle the raw data fetch, or just pass the Spreadsheet ID?

### Persistence ([[firebase-architecture]])
- What is the exact boundary between Firestore (metadata) and IndexedDB (data)?
- How to handle conflict resolution if a workspace is opened in two tabs?

### UI/UX ([[canvas-ui]])
- How to implement the "Push-to-move" grid collision logic?
- Sidebar vs. Floating panels: where do property settings live?

### Error Handling & Validation
- Làm thế nào để hiển thị lỗi SQL hoặc lỗi runtime trực quan trên Node?
- Quy trình validate dữ liệu đầu vào từ Google Sheets (null values, wrong types)?
- Cơ chế Recovery khi IndexedDB bị lỗi hoặc tràn bộ nhớ?

### Performance & Scaling
- Chiến lược xử lý khi dataset vượt quá 100,000 dòng (Virtualization cho Table)?
- Tối ưu React Flow rendering khi Canvas có số lượng Node lớn?
- Web Worker strategy cho việc xử lý SQL (AlaSQL) để không block UI thread?

### Security & Privacy
- Firebase Security Rules cho phép user chỉ xem được workspace của mình?
- Dữ liệu trong IndexedDB có cần mã hóa không (Pristine data vs Processed data)?
- Quản lý Scopes của Google API (Read-only vs Full Access)?

### Product & UX Experience
- Quy trình Onboarding cho user mới (Example Workspace)?
- Cơ chế thông báo khi dữ liệu nguồn (Google Sheets) bị thay đổi hoặc không tìm thấy?
- Thiết kế hệ thống Export (CSV, JSON hoặc đẩy ngược về Google Sheets)?

---
*Note: This file is a living document and should be updated as milestones are reached.*
