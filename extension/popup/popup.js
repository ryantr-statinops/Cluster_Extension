/**
 * Cluster Extension - Popup Logic
 * Đảm bảo tuân thủ Content Security Policy (CSP) của Chrome Extension V3
 */

document.addEventListener('DOMContentLoaded', async () => {
    // --- 1. Khai báo các phần tử DOM ---
    const elements = {
        settingsButton: document.getElementById('settingsButton'),
        settingsDropdown: document.getElementById('settingsDropdown'),
        darkModeToggle: document.getElementById('darkModeToggle'),
        languageSelect: document.getElementById('languageSelect'),
        syncNotification: document.getElementById('syncNotification'),
        viewInfoButton: document.getElementById('viewInfoButton'),
        addWorkspaceButton: document.getElementById('addWorkspaceButton'),
        // Các trường dữ liệu trong Config Panel
        fileName: document.querySelector('.config-item:nth-child(1) .config-value'),
        fileType: document.querySelector('.config-item:nth-child(2) .config-value'),
        sheetCount: document.querySelector('.config-item:nth-child(3) .config-value')
    };

    // --- 2. Khởi tạo ứng dụng ---
    initSettings();
    updateTabInfo();

    // --- 3. Xử lý Cài đặt (Theme & Language) ---
    async function initSettings() {
        // Lấy dữ liệu đã lưu từ chrome.storage
        const data = await chrome.storage.local.get(['theme', 'language']);
        
        // Thiết lập Theme
        const isDark = data.theme !== 'light'; // Mặc định là dark
        document.body.classList.toggle('light-mode', !isDark);
        elements.darkModeToggle.checked = isDark;

        // Thiết lập Ngôn ngữ
        if (data.language) {
            elements.languageSelect.value = data.language;
        }
    }

    // Toggle Dropdown Cài đặt
    elements.settingsButton.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.settingsDropdown.classList.toggle('show');
    });

    // Đóng dropdown khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!elements.settingsDropdown.contains(e.target) && e.target !== elements.settingsButton) {
            elements.settingsDropdown.classList.remove('show');
        }
    });

    // Xử lý đổi Theme
    elements.darkModeToggle.addEventListener('change', () => {
        const isDark = elements.darkModeToggle.checked;
        document.body.classList.toggle('light-mode', !isDark);
        chrome.storage.local.set({ theme: isDark ? 'dark' : 'light' });
    });

    // Xử lý đổi Ngôn ngữ
    elements.languageSelect.addEventListener('change', () => {
        const lang = elements.languageSelect.value;
        chrome.storage.local.set({ language: lang });
        console.log(`Đã chuyển ngôn ngữ sang: ${lang}`);
        // Tại đây bạn có thể gọi hàm cập nhật UI theo ngôn ngữ
    });

    // --- 4. Xử lý Logic Nghiệp vụ ---

    // Lấy thông tin từ Tab hiện tại (Ví dụ minh họa)
    async function updateTabInfo() {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (tab && tab.url) {
                // Giả sử lấy tên file từ URL hoặc Title của trang
                console.log('Đang làm việc tại tab:', tab.title);
                // Bạn có thể cập nhật các giá trị trong config-panel tại đây
            }
        } catch (error) {
            console.error('Không thể lấy thông tin tab:', error);
        }
    }

    // Nút "Xem thông tin file"
    elements.viewInfoButton.addEventListener('click', () => {
        console.log('Đang quét thông tin file...');
        // Hiệu ứng phản hồi cho người dùng
        elements.viewInfoButton.textContent = 'Đang quét...';
        setTimeout(() => {
            elements.viewInfoButton.textContent = 'Xem thông tin file';
            alert('Tính năng này sẽ được kết nối với API Cluster ở bước tiếp theo!');
        }, 1000);
    });

    // Nút "Thêm vào Workspace"
    elements.addWorkspaceButton.addEventListener('click', () => {
        console.log('Đang đồng bộ dữ liệu...');
        
        // Hiển thị thông báo thành công
        const notify = elements.syncNotification;
        notify.classList.remove('hidden');
        notify.style.opacity = '1';

        // Tự động ẩn sau 3 giây
        setTimeout(() => {
            notify.style.opacity = '0';
            setTimeout(() => notify.classList.add('hidden'), 300);
        }, 3000);

        // Gửi tin nhắn tới background.js nếu cần xử lý ngầm
        chrome.runtime.sendMessage({ action: 'syncData', data: 'mock_data' });
    });
});
