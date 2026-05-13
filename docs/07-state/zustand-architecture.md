# Zustand Store Architecture

# Purpose

Zustand là:
global runtime state layer

của toàn bộ application.

---

# Zustand Responsibility

Zustand chịu trách nhiệm:

- manage application state
- manage workspace graph state
- manage runtime execution state
- manage canvas interaction state
- coordinate UI state

---

# Zustand DOES NOT Handle

Zustand KHÔNG xử lý:

- persistent storage
- heavy data processing
- SQL execution
- graph rendering
- authentication APIs

---

# Core Philosophy

Zustand là:
runtime memory layer

KHÔNG phải:
database.

---

# Architecture Principle

Application architecture:

Zustand
    ↓
React Flow Renderer
    ↓
Canvas UI

---

# Source of Truth Principle

# IMPORTANT

Workspace graph:
phải được quản lý bởi Zustand.

KHÔNG để:
React Flow tự quản lý state hoàn toàn.

---

# Vì sao?

Vì:
- predictable
- easier persistence
- easier debugging
- scalable architecture

---

# Store Structure Overview

store/
├── workspace.store.ts
├── canvas.store.ts
├── runtime.store.ts
├── storage.store.ts
└── ui.store.ts

---

# Store Separation Principle

Mỗi store:
phải có responsibility rõ ràng.

---

# IMPORTANT

KHÔNG tạo:
monolithic giant store.

---

# Vì:
- rerender khó kiểm soát
- debug khó
- scaling khó

---

# 1. workspace.store.ts

# Purpose

Quản lý:
workspace business graph state

---

# Owns

- workspace metadata
- nodes
- edges
- graph structure

---

# State Structure

```ts id="9sj53y"
type WorkspaceState = {
  activeWorkspaceId: string | null

  nodes: Node[]
  edges: Edge[]

  isDirty: boolean
}
```

---

# Related
- [[pipeline-runtime]]
- [[react-flow-architecture]]
- [[state-ownership]]