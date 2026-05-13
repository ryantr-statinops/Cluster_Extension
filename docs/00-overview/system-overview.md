# System Overview

# MVP Goal
The goal of the MVP is to provide a local-first visual data workspace where users can import data from Google Sheets via a Chrome Extension, organize it in storage, and build simple data pipelines (Merge, Pivot) using a node-based interface on an infinite canvas.

# System Architecture
The system follows a local-first architecture. Data is imported from Google Sheets and stored in the browser's IndexedDB (via Dexie.js). The UI is built with React, and the canvas is rendered using React Flow. State is managed by Zustand, and synchronization of workspace metadata is handled by Firebase.

# Runtime
The [[pipeline-runtime]] is the execution engine of the application. It processes the data flow graph, manages execution order, and propagates data between nodes. It uses AlaSQL for complex data operations like merging and pivoting.

# Canvas
The canvas is an infinite grid workspace where users interact with nodes and edges. It provides a Figma-like experience for building data pipelines. See [[canvas-ui]] and [[react-flow-architecture]] for more details.

# Storage
Storage is a global library of imported datasets. Users can import datasets from storage into their workspaces to use them in pipelines. Actual data rows are persisted in IndexedDB. See [[dexie-schema]].

# Integrations
- **Chrome Extension**: Acts as a data bridge to collect data from Google Sheets.
- **Firebase**: Handles authentication and workspace metadata persistence.
- **Google Sheets API**: Used to fetch data from spreadsheets.

# Execution Flow
1. Google Sheets → Extension → Storage (IndexedDB)
2. Storage → Workspace Data Sources
3. Data Source Node → Transform Node → Data Hub Node → Pivot Node
4. Execution Engine (AlaSQL) processes the pipeline and produces results.
