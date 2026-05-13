Việc cần làm
1. Define Core Workflow
Mình sẽ viết lại như khi người dùng lần đầu tiên xài hệ thống
Người dùng mở Google Sheets:
→ bật extension lên, đăng nhập, xác thực các bước bằng tài khoản google
→ dùng nút lấy dữ lliệu trong google sheet, hệ thống sẽ hiện ra các thông tin cơ bản của dữ liệu để xác nhận và nhấn nút lưu, ( đối với MVP hiện tại sẽ chỉ nhận các file có cấu trúc giống csv )
Hiện ra tên các sheet có thể lưu vào kho lưu trữ

→ Đi vào trang web chính của hệ thống, hiện tại sẽ có 2 mục chính là kho lưu trữ các file đã được lưu (storage) và cái thứ 2 là các workspace, nhấn nút tạo workspace đầu tiên, ở thanh side bar sẽ có mục data source, sẽ có nút import từ storage vào mục data source, có thể tạo thêm các thư mục trong data source để phân loại dữ liệu theo cấu trúc nhánh cây
→ kéo thả sheet vào Canvas( chỉ các sheet đơn lẻ trong các file), thì data sẽ được thể hiện dưới dạng một node là Data Source Node( hoặc gọi là Sheet Node)
→ kết nối các Sheet Node vào Data Hub ( nếu chưa ghi nhận kết nối, cần kéo qua node data transform để chỉnh sửa dữ liệu rồi mới kéo vào Data Hub
→ Creates Pivot Table và nối Data Hub vào
→ xem được kết quả là các bảng tính tự động thủ công

Sản phẩm sẽ gồm 2 phần là extension và web app:
> Extension: là 1 cái pop up dùng để collect data source sites (google sheet, google docs) vào trong data storage
> Web app: là một web app được sử dụng để người dùng tương tác và xử lý data một cách dễ dàng và trực quan.

Người dùng mở data source sites:
> Kích hoạt extension sau đó đăng nhập, xác thực các bước bằng tài khoản google
> Dùng nút collect data source (đối với MVP hiện tại sẽ chỉ nhận các file có cấu trúc theo dạng csv), hệ thống sẽ hiện ra một bảng thông tin của dữ liệu bao gồm (danh sách các sheet nếu là google sheet hoặc tab nếu là google docs và size, name,...) sau đó người dùng sẽ xác nhận và data source này sẽ được ghi nhận lại vào bên trong data storage (data storage này sẽ được hiểu là một nơi dùng để lưu trữ lại tất cả data source site mà người dùng đã thu thập lại và người dùng có thể lấy data từ trong đây để sử dụng ở trong workspace)

> Web app sẽ gồm [ Pause ]



2. Define Entities
File:
entities.md

Overview
Product Vision
Hệ thống là một Local-first Visual Data Workspace dùng để xử lý dữ liệu từ Google Sheets thông qua giao diện Infinite Canvas dạng node-based workflow.
Người dùng có thể:
Import dữ liệu từ Google Sheets thông qua Chrome Extension
Lưu dữ liệu vào Storage
Import dữ liệu từ Storage vào Workspace
Kéo thả dữ liệu dưới dạng Node trên Infinite Canvas
Kết nối các Node để tạo pipeline xử lý dữ liệu
Merge nhiều nguồn dữ liệu
Tạo Pivot Table bằng SQL hoặc Visual Settings
MVP tập trung vào:
Data Import
Data Organization
Data Merge
Pivot Table Workflow
MVP chưa bao gồm:
AI
Automation
Realtime Collaboration
ERP
Two-way Sync

Core Workflow
Google Sheets
    ↓
Chrome Extension
    ↓
Import dữ liệu
    ↓
Storage
    ↓
Workspace
    ↓
Data Source Node
    ↓
Data Transform Node (optional)
    ↓
Data Hub Node
    ↓
Pivot Table Node
    ↓
Result Table


User Flow (MVP)
1. Import Data from Google Sheets
Người dùng:
mở Google Sheets
bật Chrome Extension
đăng nhập bằng Google Account
xác thực quyền truy cập
Sau khi xác thực:
extension lấy metadata của spreadsheet
hiển thị preview dữ liệu cơ bản:
tên spreadsheet
danh sách sheets
số cột
số dòng
người dùng chọn lưu dữ liệu
MVP hiện tại:
chỉ hỗ trợ dữ liệu dạng bảng tương tự CSV
chưa hỗ trợ nested structure hoặc formula phức tạp
Sau khi lưu:
dữ liệu xuất hiện trong Storage của hệ thống

2. Homepage
Homepage gồm 2 section chính:
Storage
Kho lưu trữ dữ liệu đã import.
Storage chứa:
Google Sheets files
individual sheets
imported datasets
Storage KHÔNG phải nơi xử lý dữ liệu.
Storage chỉ là:
dataset library


Workspace
Workspace là môi trường làm việc độc lập dùng để:
build pipeline
xử lý dữ liệu
merge dữ liệu
tạo pivot table
Mỗi workspace:
có canvas riêng
có nodes riêng
có edges riêng
có data sources riêng

3. Create Workspace
Người dùng:
tạo workspace mới
mở Infinite Canvas
Trong workspace:
sidebar trái chứa:
Data Sources
Node Library

4. Import from Storage into Data Sources
Người dùng:
chọn dữ liệu từ Storage
import vào Workspace
Sau khi import:
dữ liệu xuất hiện trong mục Data Sources
có thể tổ chức bằng folder tree structure
Ví dụ:
Data Sources
├── Sales
│   ├── January
│   └── February
└── HR


5. Create Data Source Node
Người dùng:
kéo sheet từ Data Sources vào Canvas
Hệ thống tạo:
Data Source Node

Node này:
đại diện cho một sheet cụ thể
hiển thị preview dữ liệu
có thể resize
có output port để kết nối pipeline

6. Data Transformation
Nếu dữ liệu chưa tương thích:
người dùng cần nối qua:
Data Transform Node

Node này dùng để:
đổi tên cột
chuẩn hóa dữ liệu
filter
mapping structure
Sau khi transform:
dữ liệu mới có thể merge vào Data Hub

7. Data Hub
Người dùng:
kết nối nhiều Data Source Node hoặc Transform Node vào:
Data Hub Node

Data Hub dùng để:
merge dữ liệu
quản lý nhiều input datasets
xử lý logic join/merge
Data Hub:
nhận nhiều input
xuất ra merged dataset

8. Pivot Table
Người dùng:
tạo:
Pivot Table Node

Sau đó:
nối Data Hub vào Pivot Node
Pivot Node hỗ trợ:
SQL Mode
Visual Setting Mode
Pivot Node sẽ:
xử lý dữ liệu
tạo pivot result
hiển thị bảng kết quả

Entities Overview
1. Workspace
Purpose
Không gian làm việc chính của người dùng.
Responsibilities
chứa canvas
quản lý nodes
quản lý edges
quản lý data sources
Properties
Workspace {
  id
  name
  createdAt
  updatedAt

  nodes[]
  edges[]
  dataSources[]
}

Lifecycle
create
open
rename
save
delete


2. Storage Item
Purpose
Đại diện cho dữ liệu đã import từ Google Sheets.
Responsibilities
lưu metadata của dữ liệu
làm nguồn import cho workspace
Properties
StorageItem {
  id
  spreadsheetId
  spreadsheetName
  sheetName

  importedAt
  lastSync
}

Lifecycle
import
sync
rename
delete


3. Data Source
Purpose
Đại diện cho dữ liệu đã được import vào Workspace.
Responsibilities
quản lý dataset bên trong workspace
tổ chức dữ liệu theo folder tree
Properties
DataSource {
  id
  workspaceId
  storageItemId

  name
  folderPath
}

Lifecycle
import
move
rename
remove


4. Node
Purpose
Block xử lý hoặc hiển thị dữ liệu trên Canvas.
Responsibilities
xử lý dataflow
hiển thị data
tạo pipeline
Properties
Node {
  id
  type

  position
  size

  config
}

Lifecycle
create
move
resize
connect
delete


5. Edge
Purpose
Connection giữa hai Nodes.
Responsibilities
định nghĩa dataflow
truyền dữ liệu giữa nodes
Properties
Edge {
  id

  sourceNodeId
  targetNodeId
}

Lifecycle
create
reroute
delete


6. Dataset
Purpose
Dữ liệu thực tế được xử lý trong hệ thống.
Responsibilities
lưu rows/columns
cung cấp dữ liệu cho processing engine
Properties
Dataset {
  id

  columns[]
  rows[]

  sourceId
}


Node System Overview
1. Data Source Node
Purpose
Hiển thị một dataset đơn lẻ trên Canvas.
Input
None.
Output
Dataset.
Features
preview data
resize
connect output pipeline

2. Data Transform Node
Purpose
Chuẩn hóa dữ liệu trước khi merge.
Features
rename columns
filter rows
map structure
clean dataset

3. Data Hub Node
Purpose
Merge nhiều datasets thành một nguồn dữ liệu thống nhất.
Features
multi-input
merge strategy
join management

4. Pivot Table Node
Purpose
Tạo Pivot Table từ merged dataset.
Modes
SQL Mode
Visual Setting Mode
Output
Pivot result table.

Entities Relationship Overview
Workspace
 ├── DataSources
 │      └── StorageItems
 │
 ├── Nodes
 │      ├── DataSourceNode
 │      ├── TransformNode
 │      ├── DataHubNode
 │      └── PivotNode
 │
 └── Edges
        └── Connect Nodes


Storage vs Data Source
Storage
Storage là:
global dataset library

Storage tồn tại ở Homepage.
Storage dùng để:
lưu dữ liệu đã import
tái sử dụng datasets
quản lý nguồn dữ liệu
Storage không xử lý dữ liệu.

Data Source
Data Source là:
workspace-level dataset reference

Data Source tồn tại bên trong Workspace.
Data Source dùng để:
tổ chức dữ liệu cho workflow hiện tại
cung cấp dữ liệu cho Nodes

Architecture Overview
Google Sheets
      ↓
Chrome Extension
      ↓
Storage System
      ↓
Workspace
      ↓
Data Sources
      ↓
Canvas Nodes
      ↓
Processing Pipeline
      ↓
Pivot Result


Technical Architecture (MVP)
Frontend
React
TypeScript
React Flow
Zustand

Local Data
IndexedDB
Dexie.js
Dùng để:
lưu datasets
cache data
local processing

Processing Engine
AlaSQL
Dùng để:
merge
pivot
query

Cloud Layer
Firebase
Dùng để:
authentication
workspace metadata
workspace persistence

Extension Layer
Chrome Extension dùng để:
detect spreadsheet
authenticate user
extract metadata
launch web app
import datasets into storage system

3. Define Node System
File:
node-system.md

Nodes


Data Source Node


Mô tả
Một node để hiển thị dữ liệu từ sheet khi kéo sheet vào infinite workspace.
Tính năng
View
Hiển thị nội dung của sheet được chọn khi kéo vào workspace
Settings
Có nút cập nhật dữ liệu nếu dữ liệu từ sheet kia gốc trong google sheet có thay đổi
Cách hoạt động
Là một node để thể hiện dữ liệu nguồn trên sheet nhằm xem được là sheet đến từ đâu và trực quan hóa rõ dữ liệu đầu vào trông như thế 

Data Hub
Mô tả
Một node chuyên dùng để merge nhiều data field thành một bộ dữ liệu thống nhất.
Tính năng
View
Sources: Hiển thị toàn bộ nguồn dữ liệu đầu vào được kết nối.
Data Table: Hiển thị dữ liệu tổng hợp sau khi merge.
Settings
Merge Settings: Một bảng setting chuyên biệt (right sidebar) dành cho việc cấu hình merge data.
Cách hoạt động
Liên kết các data field trên infinite canvas vào Data Hub, sau đó tùy chỉnh các thông số merge để tạo ra bộ dữ liệu tổng hợp.

Data Transform
Mô tả
Một node chuyên dùng để xử lý và transform dữ liệu.
Tính năng
View
Sources: Hiển thị toàn bộ nguồn dữ liệu đầu vào được kết nối.
Data Table: Hiển thị dữ liệu sau khi xử lý.
Data Processing
Sort: Sắp xếp dữ liệu.
Filter: Lọc dữ liệu theo điều kiện.
Select: Chọn các cột cần hiển thị.
Remove Duplicate: Xóa các record bị trùng lặp.
...
Cách hoạt động
Kết nối nguồn dữ liệu vào Data Transform, sau đó áp dụng các thao tác xử lý dữ liệu để tạo ra bộ dữ liệu mới.

Pivot Table
Mô tả
Một node chuyên dùng để tạo pivot table từ dữ liệu đã được xử lý bằng node Data hub.
Tính năng
View
Sources: Hiển thị toàn bộ nguồn dữ liệu đầu vào được kết nối.
Data Table: Hiển thị dữ liệu được sử dụng để tạo pivot table.
Pivot Configuration
Group By: Nhóm dữ liệu theo trường được chọn.
Calculate: Thực hiện các phép tính tổng hợp.
Sub Group: Tạo nhóm dữ liệu phụ.
...
Cách hoạt động
Kết nối dữ liệu đầu vào vào Pivot Table, sau đó cấu hình các trường group và calculation để tạo bảng pivot tương ứng.


4. Define Data Flow
CỰC QUAN TRỌNG

File:
data-flow.md

Bạn cần mô tả:
Google Sheets
→ Extension
→ Web App
→ IndexedDB
→ Hub Node
→ Pivot Node
→ Result

Vì sao?
Để:
hiểu processing
hiểu ownership
tránh spaghetti architecture

5. Define State Ownership
File:
state-ownership.md

State Ownership Overview
Purpose
State Ownership định nghĩa:
“data nào được quản lý ở đâu”

Đây là foundation cực kỳ quan trọng của toàn bộ architecture.
Nếu không define rõ:
state sẽ bị duplicate
sync sẽ loạn
debugging rất khó
AI generate code dễ sai structure
app dễ thành spaghetti architecture

Core Principle
Mỗi loại state:
chỉ nên có 1 owner chính
mỗi owner có trách nhiệm rõ ràng
tránh nhiều nơi cùng quản lý một state

State Ownership Architecture
UI State
    ↓
Zustand

Heavy Dataset State
    ↓
IndexedDB

Cloud Workspace Metadata
    ↓
Firebase

Canvas Rendering State
    ↓
React Flow

Temporary Processing State
    ↓
Memory Runtime


1. Zustand Ownership
Purpose
Zustand là:
global application state manager

Zustand dùng để quản lý:
UI state
active workspace
selected node
current canvas state
temporary interaction state

Zustand SHOULD own
Workspace Session State
activeWorkspaceId
openedWorkspace


Canvas UI State
selectedNodeId
selectedEdgeId
canvasZoom
canvasPosition


Sidebar State
openedFolder
expandedTree
activePanel


User Interaction State
draggingNode
connectingEdge
hoveredNode


Temporary Runtime State
currentPipelineExecution
previewResult


Zustand SHOULD NOT own
- large datasets
- pivot result tables
- cached spreadsheet data
- long-term persistence


Why?
Vì Zustand:
nằm trong memory
reload browser sẽ mất
không phù hợp data lớn

2. IndexedDB Ownership
Purpose
IndexedDB là:
local persistent heavy data storage


IndexedDB SHOULD own
Raw Imported Datasets
Google Sheets data


Processed Datasets
merged data
transformed data


Pivot Results Cache
generated pivot tables


Offline Cache
cached workspace datasets


IndexedDB SHOULD NOT own
- authentication
- active UI state
- node hover state
- canvas interaction state


Why?
IndexedDB optimized cho:
large local data
persistence
offline-first architecture

IndexedDB Tables (MVP)
datasets
processedDatasets
pivotResults
workspaceCache


3. Firebase Ownership
Purpose
Firebase là:
cloud metadata + authentication layer


Firebase SHOULD own
User Authentication
user account
login session


Workspace Metadata
workspace name
createdAt
updatedAt


Canvas Structure Metadata
nodes
edges
layout


Cloud Persistence
workspace save/load


Firebase SHOULD NOT own
- large datasets
- raw spreadsheet rows
- heavy processing results
- pivot execution


Why?
Firebase:
không tối ưu cho processing engine
storage cost tăng nhanh
sync datasets lớn rất nặng

4. React Flow Ownership
Purpose
React Flow là:
canvas rendering engine


React Flow SHOULD own
visual node rendering
edge rendering
drag behavior
connection visuals
zoom/pan rendering


React Flow SHOULD NOT own
business logic
dataset processing
workspace persistence


Why?
React Flow chỉ nên:
render UI

KHÔNG nên:
become application state manager


5. Runtime Processing Ownership
Purpose
Temporary runtime execution layer.

Runtime SHOULD own
temporary SQL execution
temporary merge result
temporary pivot generation
pipeline execution state


Runtime SHOULD NOT own
persistent workspace state


Why?
Processing runtime:
chỉ tồn tại khi execute pipeline
không nên save toàn bộ runtime state

State Flow Overview
Google Sheets
      ↓
Chrome Extension
      ↓
Storage Import
      ↓
IndexedDB
      ↓
Pipeline Processing
      ↓
Runtime Engine
      ↓
Canvas Result


Workspace State Flow
Firebase
      ↓
Workspace Metadata
      ↓
Zustand Active Session
      ↓
React Flow Rendering


Data Ownership Summary
State Type
Owner
Authentication
Firebase
Workspace Metadata
Firebase
Nodes Metadata
Firebase
Edges Metadata
Firebase
Active Workspace
Zustand
Selected Node
Zustand
Sidebar UI
Zustand
Large Dataset
IndexedDB
Pivot Result Cache
IndexedDB
SQL Runtime Result
Runtime Memory
Canvas Rendering
React Flow


Important Architecture Rules
Rule 1
One state = one owner


Rule 2
Heavy data never stays in Zustand


Rule 3
Firebase stores metadata, not processing data


Rule 4
React Flow renders UI only


Rule 5
IndexedDB is the local-first foundation


MVP Simplification Rules
MVP DOES NOT include
realtime sync
multi-user collaboration
background synchronization
distributed conflict resolution


MVP Sync Strategy
User manually clicks:
[ Sync Latest Data ]

System:
fetches latest sheet data
updates IndexedDB cache
refreshes pipeline

Final Architecture Mindset
Hệ thống được thiết kế theo hướng:
local-first visual data operating system

Trong đó:
Firebase quản lý cloud metadata
IndexedDB quản lý heavy local datasets
Zustand quản lý runtime UI state
React Flow render canvas
Runtime Engine xử lý pipeline execution

Long-Term Scalability
State ownership structure này cho phép sau này mở rộng:
AI nodes
automation pipeline
chart nodes
collaboration
cloud sync
workflow templates
mà không cần rewrite toàn bộ architecture.

PHASE 2 — UI/UX FOUNDATION
Sau khi xong architecture foundation.

6. Build User Flow
File:
user-flow.md

User Flow Overview
Purpose
User Flow định nghĩa:
người dùng đi qua hệ thống như thế nào

Mục tiêu của User Flow:
hiểu trải nghiệm sản phẩm
xác định luồng dữ liệu
xác định UI cần thiết
xác định state transitions
làm foundation cho UI/UX và architecture

MVP User Flow Principle
MVP chỉ tập trung vào:
happy path

Tức là:
luồng sử dụng thành công
ít edge cases
ít exception handling

Core User Journey
Google Sheets
    ↓
Extension Import
    ↓
Storage
    ↓
Workspace
    ↓
Canvas Workflow
    ↓
Pivot Result


USER FLOW (MVP)
FLOW 1 — First-Time User Authentication
Goal
Cho phép user:
đăng nhập
kết nối Google account
chuẩn bị import dữ liệu

Entry Point
Người dùng:
mở Google Sheets
bật Chrome Extension

System Actions
Extension:
detect spreadsheet hiện tại
kiểm tra authentication state

User Actions
Nếu chưa đăng nhập:
user nhấn:
Sign in with Google


System Response
Hệ thống:
mở Google OAuth
xác thực tài khoản
cấp quyền đọc Google Sheets

Result
User:
authenticated
ready to import datasets

FLOW 2 — Import Data from Google Sheets
Goal
Import dữ liệu từ Google Sheets vào Storage.

Entry Point
User đang mở:
Google Sheets
Extension popup

User Actions
User nhấn:
Import Current Sheet


System Actions
Extension:
đọc spreadsheet metadata
lấy:
spreadsheet name
sheet list
rows count
columns count

Preview Step
Extension hiển thị:
tên file
danh sách sheets
preview structure

User Confirmation
User:
chọn sheets cần import
nhấn:
Save to Storage


System Processing
Hệ thống:
convert sheet thành internal dataset format
lưu dataset vào IndexedDB
tạo StorageItem metadata

Result
Dataset xuất hiện trong:
Homepage → Storage


FLOW 3 — Homepage Navigation
Goal
Cho phép user:
quản lý datasets
quản lý workspaces

Homepage Structure
Homepage
 ├── Storage
 └── Workspaces


Storage Section
Hiển thị:
imported datasets
spreadsheet files
sheet collections

Workspace Section
Hiển thị:
workspace list
recent workspaces
create workspace button

FLOW 4 — Create Workspace
Goal
Tạo môi trường làm việc mới.

User Actions
User nhấn:
Create Workspace


System Actions
Hệ thống:
tạo Workspace entity
tạo empty canvas
initialize workspace state

Result
User được chuyển tới:
Workspace Canvas


FLOW 5 — Import Dataset into Workspace
Goal
Đưa dữ liệu từ Storage vào Workspace.

Workspace Layout
Workspace
 ├── Sidebar
 │     ├── Data Sources
 │     └── Node Library
 │
 └── Infinite Canvas


User Actions
User:
mở:
Data Sources

nhấn:
Import from Storage


System Actions
Hệ thống:
hiển thị datasets trong Storage
cho phép chọn datasets

Result
Datasets xuất hiện trong:
Workspace → Data Sources


FLOW 6 — Organize Data Sources
Goal
Tổ chức datasets trong workspace.

User Actions
User:
tạo folders
kéo datasets vào folder

Example Structure
Data Sources
├── Sales
│   ├── January
│   └── February
└── HR


Result
Workspace có:
organized dataset structure
reusable workspace datasets

FLOW 7 — Create Data Source Node
Goal
Đưa dataset lên Canvas.

User Actions
User:
kéo dataset từ Data Sources
drop vào Infinite Canvas

System Actions
Hệ thống tạo:
Data Source Node


Node Behavior
Node:
hiển thị dataset preview
resize được
có output connection port

Result
Dataset trở thành:
visual workflow object


FLOW 8 — Data Transformation
Goal
Chuẩn hóa dữ liệu trước khi merge.

Trigger
Nếu datasets:
khác schema
khác naming
khác structure

User Actions
User:
tạo:
Data Transform Node

nối:
Data Source Node
    ↓
Data Transform Node


Transform Features
Transform Node hỗ trợ:
rename columns
filtering
mapping
cleaning

Result
Output dataset:
standardized
ready for merge

FLOW 9 — Merge into Data Hub
Goal
Merge nhiều datasets.

User Actions
User:
tạo:
Data Hub Node

nối:
Transform Node
      ↓
Data Hub Node


System Actions
Data Hub:
nhận nhiều datasets
validate connections
chuẩn bị merge pipeline

Result
Data Hub tạo:
merged dataset stream


FLOW 10 — Create Pivot Table
Goal
Tạo Pivot Table từ merged dataset.

User Actions
User:
tạo:
Pivot Table Node

nối:
Data Hub Node
      ↓
Pivot Table Node


Pivot Modes
SQL Mode
User viết SQL query.

Visual Mode
User:
chọn rows
chọn columns
chọn aggregation

System Actions
Pipeline engine:
execute query
generate pivot result

Result
Pivot Node hiển thị:
result table


FLOW 11 — View Results
Goal
Xem kết quả xử lý dữ liệu.

Result Display
Pivot Node:
hiển thị table preview
scrollable
resizable

Optional Actions
User có thể:
refresh
rerun
export CSV

FLOW 12 — Save Workspace
Goal
Lưu workspace state.

System Actions
Hệ thống lưu:
nodes
edges
layout
data source references

Storage Locations
Firebase
workspace metadata
node structure

IndexedDB
local datasets
cached processing data

USER FLOW OVERVIEW DIAGRAM
Google Sheets
      ↓
Chrome Extension
      ↓
Storage Import
      ↓
Homepage
 ├── Storage
 └── Workspaces
      ↓
Create Workspace
      ↓
Import Data Sources
      ↓
Infinite Canvas
      ↓
Data Source Nodes
      ↓
Transform Nodes
      ↓
Data Hub Node
      ↓
Pivot Table Node
      ↓
Result Table


MVP User Flow Constraints
MVP DOES NOT support
- realtime collaboration
- multi-user editing
- automatic schema inference
- AI-generated pipelines
- background synchronization


MVP Design Principle
User Flow được thiết kế theo hướng:
simple visual data pipeline

Mục tiêu:
dễ hiểu
dễ demo
dễ build
dễ mở rộng sau này

7. Wireframe UI
Wireframe UI Overview
Purpose
Wireframe UI KHÔNG phải:
thiết kế đẹp


Wireframe UI là:
thiết kế cấu trúc màn hình và luồng tương tác

Mục tiêu:
xác định layout
xác định component
xác định navigation
xác định state interaction
xác định information hierarchy

MVP Wireframe Principle
Hiện tại:
KHÔNG cần:
animation đẹp
design system phức tạp
branding hoàn chỉnh
visual polish

Chỉ cần:
functional architecture UI


Điều QUAN TRỌNG
Wireframe phải:
scale được
modular
node-based friendly
local-first friendly

Những phần BẮT BUỘC phải có Wireframe
Dựa theo architecture hiện tại, MVP của bạn cần:

1. Authentication Flow
Mục tiêu
Xác định:
login flow
onboarding flow
extension redirect flow

Màn hình cần có
A. Login Screen
Contains:
logo
Sign in with Google
short product intro

B. Authentication Redirect
Flow:
Extension
    ↓
OAuth
    ↓
Homepage


2. Homepage
Đây là ROOT UI của toàn hệ thống.

Mục tiêu
Hiển thị:
Storage
Workspaces
navigation

Layout Structure
┌────────────────────────────┐
│ Top Navigation             │
├──────────────┬─────────────┤
│ Sidebar      │ Main Area   │
│              │             │
│ - Storage    │ Content     │
│ - Workspace  │             │
│              │             │
└──────────────┴─────────────┘


Homepage Sections
A. Sidebar
Contains:
Storage
Workspaces
Settings
Profile

B. Main Content Area
Dynamic area:
Storage View
Workspace List
Recent Activity

3. Storage UI
Đây là:
dataset management system


Mục tiêu
Cho phép:
xem datasets
organize datasets
sync datasets

Storage Layout
┌────────────────────────────┐
│ Storage Toolbar            │
├────────────────────────────┤
│ Dataset Grid/List          │
│                            │
│ ┌────────────┐             │
│ │ Sheet A    │             │
│ │ metadata   │             │
│ └────────────┘             │
│                            │
└────────────────────────────┘


Storage Components
Dataset Card
Shows:
spreadsheet name
sheet name
last sync
row count
import date

Toolbar
Contains:
search
filter
sync
import status

4. Workspace List UI
Mục tiêu
Cho phép:
tạo workspace
mở workspace
quản lý workspace

Layout
┌────────────────────────────┐
│ Workspace Toolbar          │
├────────────────────────────┤
│ Workspace Cards            │
│                            │
│ ┌────────────┐             │
│ │ Workspace  │             │
│ └────────────┘             │
└────────────────────────────┘


Components
Workspace Card
Shows:
workspace name
updated time
preview thumbnail
datasets count

5. Workspace UI
ĐÂY LÀ PHẦN QUAN TRỌNG NHẤT

Workspace Structure
┌──────────────────────────────────────┐
│ Top Toolbar                          │
├──────────────┬───────────────────────┤
│ Sidebar      │ Infinite Canvas       │
│              │                       │
│ Data Sources │                       │
│ Node Library │                       │
│              │                       │
├──────────────┴───────────────────────┤
│ Bottom Status Bar                    │
└──────────────────────────────────────┘


6. Top Toolbar
Purpose
Global workspace actions.

Components
Contains:
workspace title
save status
sync button
zoom controls
export button

IMPORTANT
MVP:
Manual Sync Button

phải visible rõ.

7. Sidebar UI
Đây là:
data organization center


Sidebar Sections
A. Data Sources
Tree structure:
Data Sources
├── Sales
│   ├── January
│   └── February
└── HR


B. Node Library
Contains:
Data Source Node
Transform Node
Data Hub Node
Pivot Node

IMPORTANT
Data Sources và Node Library:
nên tách riêng.

Vì:
data ≠ processing node

8. Infinite Canvas UI
Đây là:
core interaction surface


Canvas MUST support
MVP Features
pan
zoom
drag node
connect edge
resize node

Canvas SHOULD NOT include MVP
collision engine
smart auto layout
advanced graph routing


9. Data Source Node UI
Layout
┌────────────────────┐
│ Sheet Name         │
├────────────────────┤
│ Table Preview      │
│                    │
├────────────────────┤
│ Output Port        │
└────────────────────┘


Components
Contains:
sheet title
row count
column count
mini preview
output connector

10. Transform Node UI
Purpose
Data cleaning/configuration.

UI Sections
┌────────────────────┐
│ Transform Settings │
├────────────────────┤
│ Column Mapping     │
│ Filter Rules       │
│ Rename Rules       │
└────────────────────┘


11. Data Hub Node UI
Đây là:
multi-source merge center


Layout
┌────────────────────┐
│ Data Hub           │
├────────────────────┤
│ Connected Sources  │
│ Merge Strategy     │
├────────────────────┤
│ Output Port        │
└────────────────────┘


Components
Contains:
source list
merge validation
schema status
output connector

12. Pivot Node UI
Đây là:
analytics node


Layout
┌────────────────────┐
│ Pivot Table        │
├────────────────────┤
│ SQL / Visual Mode  │
├────────────────────┤
│ Result Preview     │
└────────────────────┘


Pivot Modes
A. SQL Mode
Contains:
SQL editor
run button

B. Visual Mode
Contains:
rows selector
columns selector
aggregation selector

13. Edge UI
Purpose
Visualize dataflow.

MVP Edge Features
directional flow
simple bezier line
connection highlight

DO NOT BUILD YET
animated dataflow
smart rerouting
dynamic edge physics


14. Result Table UI
Purpose
Display processed result.

Features
table scrolling
resize
pagination
export CSV

15. State Visibility UI
VERY IMPORTANT
System cần hiển thị rõ:
sync state
processing state
error state

Example
Sync Status
Last synced: 5 minutes ago


Processing Status
Running Pivot Query...


16. Wireframe Priority Order
Bạn KHÔNG cần wireframe tất cả cùng lúc.

Thứ tự đúng
PRIORITY 1
Homepage

PRIORITY 2
Workspace Layout

PRIORITY 3
Sidebar + Data Sources

PRIORITY 4
Canvas + Nodes

PRIORITY 5
Pivot Interaction

17. MVP Wireframe Checklist
Homepage
Sidebar
Storage View
Workspace View

Workspace
Toolbar
Sidebar
Infinite Canvas
Status Bar

Nodes
Data Source Node
Transform Node
Data Hub Node
Pivot Node

Canvas
Drag
Connect
Zoom
Pan

18. Recommended Workflow
Step 1
Low-fidelity wireframe first.

Step 2
Define layout system.

Step 3
Define interaction flow.

Step 4
Define component hierarchy.

Step 5
THEN visual design.

19. Tool Recommendation
UI Design
Figma

Inspiration
React Flow Examples

20. Final Wireframe Mindset
Bạn đang KHÔNG build:
dashboard app


Bạn đang build:
visual data operating system

Nên UI phải:
workflow-first
node-first
scalable
information-dense
canvas-centric

OVERVIEW — TECHNICAL ROADMAP 
Đúng rồi, và đây là lúc project bắt đầu chuyển từ:
product architecture

→ sang:
implementation architecture

Hiện tại thứ bạn cần KHÔNG phải:
code ngay toàn bộ
học fullstack đầy đủ
build production system
mà là:
hiểu “thứ tự build đúng”.
Vì với project kiểu này:
build order quyết định sống còn


OVERVIEW — TECHNICAL ROADMAP
PHASE 3
Technical Foundation
    ↓
PHASE 4
Data Layer
    ↓
PHASE 5
Persistence + Polish


PHASE 3 — TECHNICAL FOUNDATION
Mục tiêu thật sự của phase này
Không phải:
build product hoàn chỉnh


Mà là:
xây core interaction engine

Tức là:
canvas
node
state
local workspace

8. Setup Project
Mục tiêu
Tạo:
technical skeleton


STACK CHÍNH
1. React
Vai trò
UI framework chính.

Vì sao dùng React?
Vì:
component-based
ecosystem cực mạnh
React Flow built cho React
AI coding support tốt nhất

Bạn sẽ dùng React để build:
homepage
workspace UI
sidebar
node UI
toolbar

2. TypeScript
CỰC KỲ QUAN TRỌNG

Vai trò
Typed architecture layer.

Vì sao?
Project bạn:
nhiều entities
nhiều state
nhiều node types
dataflow phức tạp
JS thuần sẽ:
rất dễ thành chaos


TypeScript giúp:
Workspace luôn đúng structure
Node luôn đúng config
Data flow predictable


3. Vite
Vai trò
Development/build tool.

Vì sao?
cực nhanh
setup nhẹ
React + TS support tốt

Recommendation
KHÔNG dùng:
CRA
Next.js
ở MVP hiện tại.

Vì bạn đang build:
client-heavy local-first app


4. React Flow
React Flow

Đây là:
core canvas engine


React Flow xử lý:
node rendering
edge rendering
drag
connect
zoom
pan

Điều QUAN TRỌNG
React Flow:
KHÔNG phải state manager.

Nó chỉ:
render canvas


5. Zustand
Zustand

Đây là:
global app state layer


Zustand quản lý:
active workspace
selected node
canvas state
temporary runtime state

Vì sao không Redux?
Redux:
quá nặng cho MVP
boilerplate nhiều
Zustand:
nhẹ
clean
cực hợp canvas app

6. Dexie.js
Dexie.js

Đây là:
IndexedDB abstraction layer


Dexie dùng để:
save datasets
cache processing data
offline persistence

7. Firebase
Firebase

Firebase chỉ dùng cho:
auth + workspace metadata


KHÔNG dùng Firebase cho:
datasets lớn
pivot processing
analytics engine

9. Build Canvas First
ĐÂY LÀ DECISION QUAN TRỌNG NHẤT

Vì sao không build extension trước?
Vì:
extension không phải core product


Core product là:
visual data workflow canvas


Thứ tự đúng
STEP 1
Canvas rendering.

STEP 2
Drag node.

STEP 3
Connect edge.

STEP 4
Save local workspace.

MVP Canvas Requirements
MUST HAVE
A. Infinite Canvas
pan
zoom

B. Node Interaction
drag
resize

C. Edge Interaction
connect nodes
delete connection

D. Workspace State
save nodes
save edges
reload state

MUST NOT BUILD YET
smart layout
multiplayer
collision engine
AI assistant


PHASE 4 — DATA LAYER
Đây là phase:
biến canvas thành data system


10. Add IndexedDB
Mục tiêu
Biến app thành:
local-first


Bạn sẽ build:
A. Dataset Save
save dataset locally


B. Dataset Load
load dataset into workspace


C. Cache Management
refresh / overwrite cache


IndexedDB mindset
IndexedDB:
KHÔNG phải backend.
Nó là:
browser local database


11. Add AlaSQL
AlaSQL

Đây là:
local query engine


AlaSQL dùng để:
Merge
SELECT *
FROM sales
JOIN hr
ON sales.id = hr.id


Pivot
SELECT region,
SUM(revenue)
FROM sales
GROUP BY region


Vì sao AlaSQL thông minh cho MVP?
Vì:
không cần backend SQL server
chạy local
nhanh setup
phù hợp local-first

12. Add Google Sheets Import
CHỈ build khi:
canvas ổn
node flow ổn
local data flow ổn

Vì sao?
Nếu không:
bạn sẽ debug cả UI + auth + extension cùng lúc

rất dễ chết project.

Google Sheets Import gồm:
A. OAuth
Google login.

B. Extension
Detect spreadsheet.

C. Import Pipeline
Google Sheets
    ↓
Normalize
    ↓
Storage
    ↓
IndexedDB


MVP IMPORT RULE
Chỉ support:
CSV-like tabular structure


ĐỪNG support:
merged cells
formulas
nested structure

PHASE 5 — MVP POLISH
Đây là phase:
biến prototype thành product demo được


13. Save Workspace
Mục tiêu
Cho user:
đóng app
mở lại
workspace vẫn còn

Firebase lưu:
workspace metadata
nodes
edges
layout


IndexedDB lưu:
datasets
pivot cache
processing data


IMPORTANT
Workspace save:
KHÔNG nên save heavy datasets lên Firebase.

14. Export Result
MVP chỉ cần:
CSV export


Vì sao?
CSV:
đơn giản
universal
đủ cho MVP

ĐỪNG build:
Excel formatting
Google Sheets writeback
PDF export

BUILD ORDER THỰC TẾ
CỰC KỲ QUAN TRỌNG

WEEK 1
Canvas Only
Build:
React Flow
drag
connect
save local JSON

WEEK 2
State Layer
Build:
Zustand
workspace state
node state

WEEK 3
IndexedDB
Build:
Dexie
dataset persistence

WEEK 4
Node System
Build:
Data Source Node
Transform Node
Hub Node
Pivot Node

WEEK 5
AlaSQL
Build:
merge
pivot

WEEK 6
Extension Import
Build:
OAuth
sheet import
storage pipeline

WEEK 7
Firebase
Build:
auth persistence
workspace cloud save

Đây là mindset QUAN TRỌNG nhất
Bạn đang build:
platform foundation trước
KHÔNG phải:
feature collection


Điều cuối cùng
Với background của bạn:
Toán
systems thinking
abstraction tốt
thì thứ nguy hiểm nhất KHÔNG phải:
technical difficulty


Mà là:
build quá nhiều thứ cùng lúc

Nên:
build theo layer
build theo dependency
build từng abstraction một.
Việc đầu tiên nên làm:
Tạo folder:
docs/

Và tạo các file:
entities.md
node-system.md
data-flow.md
user-flow.md
architecture.md


---

# Related
- [[user-flow]]
- [[entities]]
- [[node-system]]
- [[architecture]]
- [[pipeline-runtime]]
- [[index]]
