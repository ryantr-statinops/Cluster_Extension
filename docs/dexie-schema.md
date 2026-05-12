# Dexie Schema Architecture

# Purpose

Dexie là:
IndexedDB abstraction layer

dùng để:
persistent local storage.

---

# Dexie Responsibility

Dexie chịu trách nhiệm:

- persist datasets
- persist workspaces
- cache pivot results
- local-first storage
- offline support

---

# Dexie DOES NOT Handle

Dexie KHÔNG xử lý:

- runtime execution
- React UI state
- graph rendering
- authentication logic

---

# Database Architecture Overview

database/
│
├── dexie.ts
├── schema/
├── repositories/
└── migrations/

---

# Database Design Philosophy

Database architecture:
local-first

---

# Important Principle

IndexedDB:
KHÔNG phải backend database.

Nó là:
browser persistence layer.

---

# Database Overview

Tables:

- datasets
- workspaces
- pivotCache
- metadata

---

# Database Initialization

# dexie.ts

Responsibility:

- initialize Dexie instance
- register tables
- setup versions
- setup migrations

---

# Example

```ts
const db = new Dexie("ClusterDB")