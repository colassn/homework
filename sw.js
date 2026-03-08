const CACHE_NAME = 'app-cache-v1';

// 安裝 Service Worker (PWA 必備)
self.addEventListener('install', event => {
    self.skipWaiting(); // 強制立刻啟用，不須等待舊版關閉
});

// 啟動 Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim()); 
});

// 攔截網路請求 (這是 Chrome/Android PWA 驗證可離線使用的硬性條件)
// 這裡我們做最簡單的放行，確保每次都是抓最新資料
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("目前處於離線狀態，請檢查網路連線。");
        })
    );
});
