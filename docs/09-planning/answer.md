
1. MVP đầu tiên thực sự làm gì?
User mở Google Sheet

→ Extension: Đóng vai trò là "Data Bridge", lấy Access Token và gửi tín hiệu mở Web App kèm dữ liệu qua postMessage.

→ Web App: Mở ra một Infinite Canvas (ZUI). Dữ liệu từ Sheet được lưu tạm vào IndexedDB để xử lý local.

→ Giá trị: Người dùng có thể kéo thả dữ liệu vào các Node để thực hiện Merge, Pivot Table bằng SQL mà không làm hỏng file gốc.
idea gốc đọc toàn diện:
- Ý tưởng xây dựng: coi không gian làm việc là các workspace (concept của nó sẽ tương tự lúc truy cập vào google sheet hay docs thì sẽ thấy một list các file làm việc gần đây thì workspace này cũng hoạt động tương tự như vậy, nó cũng giống file google sheet hay google docs) các dữ liệu từ google sheet hoặc local data được add vào trong 1 section gọi là data sources (concept của nó giống như media pool của davinci resolve), và sau đó người dùng có thể từ data sources đấy lấy ra một nhóm dữ liệu cụ thể (ví dụ như là một vài sheet bên trong 1 spreadsheet hoặc là một vài cột dữ liệu trong 1 trường dữ liệu) rồi kéo vào bên trong infinite canvas (giải thích cụ thể sau). bên trái sẽ là một cái sidebar bao gồm 2 section là data sources và nodes. Data sources đã được giải thích trước đó còn nodes thì được hiểu là các khối được dùng để xử lý dữ liệu. Còn sidebar bên phải sẽ là một cái dùng để setting hay điều chỉnh property để điều chỉnh và xử lý dữ liệu. Khi người dùng kéo data từ trong data sources vào bên trong canvas thì nó sẽ display cái data table và người dùng có thể theo dõi xem bên trong dữ liệu này có gì - tôi sẽ gọi là là data field.
Các Nodes cần có cho MVP:
Data Hub:
Mô tả: đây là node dùng để tổng hợp dữ liệu 
Chức năng: setting chuyên sâu về cách merge data
Thành phần: 
Sources: display các data source được link tới
View data: dùng để xem cái data sau khi được merge
Tương tác: 
Có thể từ data field kéo một cái arrow đến data hub thì data field đó sẽ được add vào trong data hub và sẽ là 1 data source trong cái data hub đó
Người dùng nhấn vào cái icon gear của cái data hub thì nó sẽ hiện một cái setting dialogue chuyên sâu về cách merge data vào phía cái sidebar bên phải
Pivot Table
Mô tả: đây là node để từ một nguồn data (data hub hoặc data field) để tạo nên pivot table
Chức năng: setting chuyên sâu về cách tạo pivot table
Thành phần:
SQL Formula
Setting Dialogue
Tương tác:
Node này sẽ display cái pivot table để build lên
Sẽ có 2 cái lựa chọn setting riêng biệt là SQL Formula và Setting Dialogue thì khi nhấn vào nó sẽ hiện cái setting vào cái sidebar bên phải. SQL Formula thì sẽ hiện một cái không gian để viết code SQL và khi người dùng thay đổi code thì cái pivot table nó cũng sẽ thay đổi theo luôn. Còn Setting Dialogue thì sẽ hiện một cái setting dialogue chuyên sâu về cách tạo pivot table
Ý tưởng về cách sync
Sync 1 chiều: chỉ sync theo hướng từ data source -> workspace. Về cơ bản thì nó chỉ là lấy và tổng hợp dữ liệu từ các sources sau đó xử lý cục bộ bên trong workspace (tức là thay đổi đối với dữ liệu sẽ chỉ xảy ra trong workspace). 
Sync 2 chiều: sync theo cả 2 chiều (thay đổi 1 bên sẽ dẫn đến thay đổi bên còn lại) -> còn khá mơ hồ và rủi ro
Ví dụ:
sync data
dashboard
AI summarize
merge nhiều sheet
workflow ERP
quản lý nhân sự
analytics
chat với data
database graph
notification
automation

2. User chính là ai?
cá nhân dùng google sheet, docs:
agency
đội sales
kế toán 
doanh nghiệp vận hành bằng Google Sheet
Điều này quyết định:
UI complexity
auth model
pricing
onboarding
architecture

3. Extension có cần realtime sync không?
chỉnh sheet → web update ngay


Realtime sẽ thay đổi rất mạnh:
backend
database
websocket
quota
complexity

4. Bạn muốn AI tham gia ở mức nào?
Ví dụ:
AI detect anomalies
natural language query
AI chỉ là addon nhỏ build sẵn để scale


5. Bạn muốn MVP chạy kiểu nào?
Lựa chọn: B — Web platform thật (Frontend-heavy).

Chi tiết: Sử dụng Firebase để lưu trữ cấu trúc Workspace (vị trí các Node), nhưng toàn bộ dữ liệu nặng và logic tính toán sẽ chạy trực tiếp tại Frontend (Local-first) để tối ưu chi phí và tốc độ.

Nhanh build nhất.

6. Bạn muốn tự code bao nhiêu %?
dùng AI generate phần lớn
chỉ muốn hiểu architecture
Technical Stack & Security (New)
- **Framework:** React + Zustand (State Management).
- **Canvas Engine:** React Flow (Customized for Grid Snapping).
- **Local Database:** IndexedDB (via Dexie.js) - Lưu trữ dữ liệu từ Google Sheets.
- **SQL Engine:** AlaSQL - Xử lý Pivot/Merge tại Frontend.
- **Auth Bridge:** PostMessage API để truyền Access Token an toàn từ Extension sang Web App.

7. Bạn đang dùng thiết bị nào để dev?
Windows
Và:
VSCode?
Google Antigravity(IDE mới ra mắt)
Blackbox
Windsurf?
Các CLI tool: Codex,qwen,deepseek,gemini

8. Bạn muốn frontend tới mức nào?
Ví dụ:
chỉ cần functional
cần đẹp kiểu startup SaaS( brainstorm từ đây) ->hint: SaaS UI
Nhắc đến phần ZUI 
Mình chưa hiểu chỗ này lắm nên cần giải thích thêm

9. MVP này ưu tiên cái gì nhất?
Chọn 1-2 cái:
tốc độ build ( mục tiêu cho cá nhân xài trước)
 scale lâu dài
low cost(no cost càng tốt)
dễ maintain

10. Bạn muốn học theo kiểu nào?
Song song: build 60 % + giải thích 40 % nhưng dễ dàng để học lại












