project-root/
│
├── public/
│
├── docs/
│   ├── architecture.md
│   ├── entities.md
│   ├── state-ownership.md
│   ├── user-flow.md
│   ├── wireframe-ui.md
│   ├── project-structure.md
│   ├── pipeline-runtime.md
│   ├── zustand-architecture.md
│   ├── dexie-schema.md
│   └── react-flow-architecture.md
│
├── src/
│
│   ├── app/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   │
│   │   ├── providers/
│   │   │   ├── react-query.provider.tsx
│   │   │   ├── theme.provider.tsx
│   │   │   └── auth.provider.tsx
│   │   │
│   │   ├── router/
│   │   │   ├── index.tsx
│   │   │   └── routes.ts
│   │   │
│   │   └── layouts/
│   │       ├── home.layout.tsx
│   │       └── workspace.layout.tsx
│   │
│   │
│   ├── core/
│   │   ├── config/
│   │   │   ├── app.config.ts
│   │   │   ├── firebase.config.ts
│   │   │   └── runtime.config.ts
│   │   │
│   │   ├── constants/
│   │   │   ├── node-types.ts
│   │   │   ├── storage.constants.ts
│   │   │   └── workspace.constants.ts
│   │   │
│   │   ├── pipeline/
│   │   │   ├── execution.ts
│   │   │   ├── validation.ts
│   │   │   └── graph.utils.ts
│   │   │
│   │   └── utils/
│   │       ├── id.ts
│   │       ├── date.ts
│   │       └── dataset.ts
│   │
│   │
│   ├── entities/
│   │   │
│   │   ├── workspace/
│   │   │   ├── workspace.types.ts
│   │   │   ├── workspace.factory.ts
│   │   │   ├── workspace.validation.ts
│   │   │   └── workspace.utils.ts
│   │   │
│   │   ├── node/
│   │   │   ├── node.types.ts
│   │   │   ├── node.factory.ts
│   │   │   ├── node.validation.ts
│   │   │   └── node.utils.ts
│   │   │
│   │   ├── edge/
│   │   │   ├── edge.types.ts
│   │   │   ├── edge.factory.ts
│   │   │   └── edge.utils.ts
│   │   │
│   │   ├── dataset/
│   │   │   ├── dataset.types.ts
│   │   │   ├── dataset.validation.ts
│   │   │   └── dataset.utils.ts
│   │   │
│   │   ├── storage/
│   │   │   ├── storage.types.ts
│   │   │   ├── storage.validation.ts
│   │   │   └── storage.utils.ts
│   │   │
│   │   └── datasource/
│   │       ├── datasource.types.ts
│   │       ├── datasource.validation.ts
│   │       └── datasource.utils.ts
│   │
│   │
│   ├── features/
│   │   │
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── workspace/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── storage/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── datasource/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── pivot/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   └── canvas/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── utils/
│   │
│   │
│   ├── shared/
│   │   │
│   │   ├── components/
│   │   │   ├── button/
│   │   │   ├── modal/
│   │   │   ├── input/
│   │   │   ├── table/
│   │   │   └── dropdown/
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-debounce.ts
│   │   │   └── use-shortcut.ts
│   │   │
│   │   ├── ui/
│   │   │   ├── loading/
│   │   │   ├── empty-state/
│   │   │   └── error-state/
│   │   │
│   │   └── utils/
│   │       ├── cn.ts
│   │       └── export-csv.ts
│   │
│   │
│   ├── store/
│   │   ├── workspace.store.ts
│   │   ├── canvas.store.ts
│   │   ├── ui.store.ts
│   │   ├── runtime.store.ts
│   │   └── storage.store.ts
│   │
│   │
│   ├── database/
│   │   │
│   │   ├── dexie.ts
│   │   │
│   │   ├── schema/
│   │   │   ├── dataset.schema.ts
│   │   │   ├── workspace.schema.ts
│   │   │   └── pivot.schema.ts
│   │   │
│   │   ├── repositories/
│   │   │   ├── dataset.repository.ts
│   │   │   ├── workspace.repository.ts
│   │   │   └── pivot.repository.ts
│   │   │
│   │   └── migrations/
│   │       └── migration.v1.ts
│   │
│   │
│   ├── runtime/
│   │   │
│   │   ├── engine/
│   │   │   ├── pipeline-engine.ts
│   │   │   ├── node-runner.ts
│   │   │   └── execution-manager.ts
│   │   │
│   │   ├── graph/
│   │   │   ├── graph-builder.ts
│   │   │   ├── graph-traversal.ts
│   │   │   └── dependency-map.ts
│   │   │
│   │   ├── executors/
│   │   │   ├── datasource.executor.ts
│   │   │   ├── transform.executor.ts
│   │   │   ├── hub.executor.ts
│   │   │   └── pivot.executor.ts
│   │   │
│   │   ├── processors/
│   │   │   ├── merge.processor.ts
│   │   │   ├── transform.processor.ts
│   │   │   └── pivot.processor.ts
│   │   │
│   │   └── sql/
│   │       ├── alasql.ts
│   │       └── query-builder.ts
│   │
│   │
│   ├── canvas/
│   │   │
│   │   ├── renderer/
│   │   │   ├── canvas.tsx
│   │   │   └── flow-provider.tsx
│   │   │
│   │   ├── nodes/
│   │   │   ├── datasource-node/
│   │   │   ├── transform-node/
│   │   │   ├── datahub-node/
│   │   │   └── pivot-node/
│   │   │
│   │   ├── edges/
│   │   │   ├── default-edge.tsx
│   │   │   └── edge-types.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-node-events.ts
│   │   │   ├── use-edge-events.ts
│   │   │   └── use-canvas-state.ts
│   │   │
│   │   └── utils/
│   │       ├── node-layout.ts
│   │       └── edge-routing.ts
│   │
│   │
│   ├── integrations/
│   │   │
│   │   ├── firebase/
│   │   │   ├── firebase.ts
│   │   │   ├── auth.ts
│   │   │   └── workspace-sync.ts
│   │   │
│   │   ├── google/
│   │   │   ├── oauth.ts
│   │   │   └── sheets-api.ts
│   │   │
│   │   └── extension/
│   │       ├── extension-bridge.ts
│   │       └── import-handler.ts
│   │
│   │
│   ├── pages/
│   │   │
│   │   ├── auth/
│   │   │   └── login.page.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── home.page.tsx
│   │   │   ├── storage.page.tsx
│   │   │   └── workspace-list.page.tsx
│   │   │
│   │   └── workspace/
│   │       └── workspace.page.tsx
│   │
│   │
│   ├── widgets/
│   │   ├── charts/
│   │   ├── analytics/
│   │   └── ai/
│   │
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── tailwind.css
│   │
│   │
│   └── types/
│       ├── api.types.ts
│       ├── common.types.ts
│       └── runtime.types.ts
│
│
├── extension/
│   │
│   ├── src/
│   │   ├── background/
│   │   ├── popup/
│   │   ├── content/
│   │   ├── bridge/
│   │   └── utils/
│   │
│   ├── public/
│   │
│   ├── manifest.json
│   │
│   └── package.json
│
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── .env
├── .gitignore
└── README.md