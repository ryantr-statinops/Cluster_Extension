# Project Roadmap (MVP)

Lộ trình phát triển được chia thành 7 tuần tập trung vào việc hoàn thiện bộ khung cốt lõi (Core Framework).

## Tuần 1: Infrastructure & Data Persistence
- [ ] Thiết lập Dexie Schema & Repositories.
- [ ] Xây dựng bộ UI Component cơ bản (Glassmorphism).
- [ ] Hoàn thiện Firebase Auth & Google Login.

## Tuần 2: Processing Engine (The Brain)
- [ ] Tích hợp AlaSQL vào Runtime Engine.
- [ ] Viết bộ logic Graph Traversal (DAG).
- [ ] Xây dựng Node Executors cho Source và Transform.

## Tuần 3: Canvas Implementation
- [ ] Cài đặt React Flow với Controlled Mode.
- [ ] Hoàn thiện giao diện Infinite Grid.
- [ ] Implement logic kéo thả & nối Edge.

## Tuần 4: Complex Processing Nodes
- [ ] Xây dựng Data Hub Node (Merge logic).
- [ ] Xây dựng Pivot Table Node (SQL execution).
- [ ] Tối ưu hiệu năng xử lý với Web Worker.

## Tuần 5: Chrome Extension & Bridge
- [ ] Hoàn thiện Extension Popup.
- [ ] Xây dựng `postMessage` bridge giữa Extension và Web App.
- [ ] Kiểm tra luồng Data Ingestion thực tế từ Google Sheets.

## Tuần 6: Polish & Integration
- [ ] Hoàn thiện Sidebar (Data Sources manager).
- [ ] Cài đặt cơ chế Auto-save & Sync lên Firebase.
- [ ] Sửa lỗi (Bug fixing) và tối ưu hóa UX.

## Tuần 7: MVP Alpha Launch
- [ ] Triển khai bản thử nghiệm nội bộ.
- [ ] Thu thập feedback và chuẩn bị cho Phase 2 (AI & Automation).

---

# Future Milestones
- **Phase 2**: AI Assistant (NLP to SQL), Automation Engine.
- **Phase 3**: Real-time Collaboration, Dashboard Export.
- **Phase 4**: Enterprise Connectors (Salesforce, Hubspot).

---

# Related
- [[implementation-phases]]
- [[index]]
