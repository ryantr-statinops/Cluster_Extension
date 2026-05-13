# Pipeline Runtime Architecture

# Purpose

Pipeline Runtime là:
- execution engine
- dataflow system
- dependency processor

của toàn bộ application.

---

# Runtime Responsibility

Runtime chịu trách nhiệm:

- execute node pipeline
- propagate data giữa nodes
- manage execution order
- cache outputs
- trigger re-computation
- validate graph dependencies

---

# Runtime DOES NOT Handle

Runtime KHÔNG xử lý:

- UI rendering
- canvas interaction
- authentication
- storage UI
- external APIs

---

# Runtime Core Principle

Pipeline Runtime hoạt động theo mô hình:

Data Flow Graph

Ví dụ:

Data Source
    ↓
Transform
    ↓
Data Hub
    ↓
Pivot

---

# Runtime Architecture Overview

runtime/
│
├── engine/
├── graph/
├── executors/
├── processors/
├── sql/
└── cache/

---

# Runtime Layers

# 1. Graph Layer

Responsibility:
- build dependency graph
- analyze edges
- detect execution order

---

# 2. Execution Layer

Responsibility:
- run nodes
- trigger execution
- propagate outputs

---

# 3. Processor Layer

Responsibility:
- merge datasets
- transform datasets
- execute pivot queries

---

# 4. Cache Layer

Responsibility:
- store temporary runtime results
- optimize re-execution

---

# Runtime Flow

User Action
    ↓
Node Updated
    ↓
Graph Re-evaluated
    ↓
Execution Queue Built
    ↓
Nodes Executed
    ↓
Outputs Propagated
    ↓
Preview Updated

---

# Runtime Execution Principle

Execution là:
directed graph execution

---

# Graph Definition

Nodes:
processing units

Edges:
data dependencies

---

# Example

Sheet A
    ↓
Transform A
    ↓
Data Hub
    ↓
Pivot

---

# Runtime MUST Support

## A. Sequential Execution

Ví dụ:

Data Source
    ↓
Transform
    ↓
Pivot

---

## B. Multi-source Merge

Ví dụ:

Sheet A ─┐
         ├── Data Hub
Sheet B ─┘

---

## C. Dependency Tracking

Nếu:
Transform Node thay đổi

=> downstream nodes phải re-run.

---

# Runtime Entity Definitions

# RuntimeNode

```ts
type RuntimeNode = {
  id: string
  type: NodeType

  inputs: string[]
  outputs: string[]

  config: Record<string, any>
}
```

---

# Related
- [[zustand-architecture]]
- [[entities]]
- [[react-flow-architecture]]
- [[execution-model]]
- [[alasql-architecture]]