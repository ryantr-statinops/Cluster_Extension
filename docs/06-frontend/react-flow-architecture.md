
```md id="1w0l5e"
# React Flow Integration Architecture

# Purpose

React Flow là:
visual graph rendering engine

của toàn bộ canvas system.

---

# React Flow Responsibility

React Flow chịu trách nhiệm:

- render nodes
- render edges
- drag interaction
- connect interaction
- zoom/pan
- viewport rendering

---

# React Flow DOES NOT Handle

React Flow KHÔNG xử lý:

- business logic
- runtime execution
- SQL processing
- dataset persistence
- application ownership

---

# Core Philosophy

React Flow:
KHÔNG phải application state manager.

---

# Correct Architecture

Zustand
    ↓
React Flow Renderer
    ↓
Canvas UI

---

# IMPORTANT

Zustand:
là source of truth.

KHÔNG để:
React Flow tự quản lý graph hoàn toàn.

---

# Recommended Mode

# Controlled Mode

---

# Vì sao?

Controlled mode:
- predictable
- easier persistence
- easier runtime integration
- easier debugging

---

# Canvas Architecture Overview

canvas/
│
├── renderer/
├── nodes/
├── edges/
├── hooks/
└── utils/

---

# Canvas Renderer

renderer/
├── canvas.tsx
└── flow-provider.tsx

---

# canvas.tsx

Responsibility:

- initialize React Flow
- inject nodes
- inject edges
- connect handlers

---

# flow-provider.tsx

Responsibility:

- provide React Flow context
- setup configuration

---

# Graph Data Flow

workspace.store
    ↓
nodes[]
edges[]
    ↓
React Flow
    ↓
Canvas Render

---

# Node Architecture

# Core Principle

Node:
là visual execution unit.

---

# Node Structure

```ts id="1od7fy"
type CanvasNode = {
  id: string

  type: string

  position: {
    x: number
    y: number
  }

  data: Record<string, any>
}
```

---

# Related
- [[zustand-architecture]]
- [[canvas-ui]]
- [[pipeline-runtime]]