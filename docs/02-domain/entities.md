# Core Entities

## 1. Workspace
**Purpose**: Không gian làm việc chính của người dùng.
**Responsibilities**:
- Chứa canvas (nodes & edges).
- Quản lý các data sources liên kết.
- Lưu trữ cấu trúc pipeline.

**Properties**:
```ts
type Workspace = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date

  nodes: Node[]
  edges: Edge[]
  dataSources: DataSource[]
}
```

---

## 2. Storage Item
**Purpose**: Đại diện cho dữ liệu đã import từ Google Sheets.
**Responsibilities**:
- Lưu metadata của dữ liệu gốc.
- Làm nguồn import cho các workspace khác nhau.

**Properties**:
```ts
type StorageItem = {
  id: string
  spreadsheetId: string
  spreadsheetName: string
  sheetName: string

  importedAt: Date
  lastSync: Date
}
```

---

## 3. Data Source
**Purpose**: Đại diện cho dữ liệu đã được import vào một Workspace cụ thể.
**Responsibilities**:
- Quản lý dataset reference bên trong workspace.
- Tổ chức dữ liệu theo folder tree structure.

**Properties**:
```ts
type DataSource = {
  id: string
  workspaceId: string
  storageItemId: string

  name: string
  folderPath: string
}
```

---

## 4. Node
**Purpose**: Đơn vị xử lý hoặc hiển thị dữ liệu trên Canvas.
**Responsibilities**:
- Xử lý dataflow.
- Hiển thị preview dữ liệu.
- Định nghĩa cấu hình pipeline (Pivot, Transform, etc).

**Properties**:
```ts
type Node = {
  id: string
  type: 'SOURCE' | 'TRANSFORM' | 'HUB' | 'PIVOT'

  position: { x: number, y: number }
  size: { width: number, height: number }

  config: Record<string, any>
}
```

---

## 5. Edge
**Purpose**: Kết nối dữ liệu giữa hai Nodes.
**Responsibilities**:
- Định nghĩa luồng dữ liệu (Dataflow).
- Truyền kết quả từ output port của node nguồn sang input port của node đích.

---

## 6. Dataset
**Purpose**: Dữ liệu thực tế được xử lý trong bộ nhớ/storage.
**Responsibilities**:
- Lưu trữ các dòng (rows) và cột (columns).
- Cung cấp dữ liệu cho engine AlaSQL xử lý.

---

# Related
- [[node-system]]
- [[data-flow]]
- [[index]]
