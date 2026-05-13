# System Architecture

## 1. High-Level Design
Hệ thống được thiết kế theo mô hình **Local-First**, đề cao tốc độ xử lý dữ liệu tại chỗ và quyền riêng tư của người dùng.

## 2. Technology Stack
- **Frontend Framework**: React 18 + TypeScript.
- **Canvas Engine**: React Flow (Quản lý giao diện kéo thả).
- **State Management**: Zustand (Quản lý runtime state & session).
- **Data Persistence**: Dexie.js (IndexedDB wrapper cho dữ liệu nặng).
- **Execution Engine**: AlaSQL (Thực thi SQL queries trực tiếp ở Frontend).
- **Cloud Metadata**: Firebase (Auth, Firestore cho workspace sync).

## 3. Component Layers
- **Core Layer**: Chứa logic xử lý Pipeline, Validation và Graph Utils.
- **Entities Layer**: Định nghĩa các kiểu dữ liệu và model cho Workspace, Node, Edge, Dataset.
- **Features Layer**: Các module chức năng (Auth, Workspace, Canvas, Pivot).
- **Runtime Layer**: Bộ máy thực thi (Engine) để chạy các Node executors.
- **Integrations Layer**: Giao tiếp với Chrome Extension và Google APIs.

## 4. Key Principles
- **Separation of Concerns**: Tách biệt hoàn toàn giữa UI Rendering (React Flow) và Business Logic (Runtime Engine).
- **Single Source of Truth**: Toàn bộ trạng thái Canvas được đồng bộ duy nhất từ Zustand Store.
- **Privacy First**: Dữ liệu bảng tính thô chỉ tồn tại trong máy người dùng (IndexedDB), không bao giờ gửi lên Cloud của hệ thống.

---

# Related
- [[project-structure]]
- [[data-flow]]
- [[state-ownership]]
- [[index]]
