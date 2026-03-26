importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// 貼上您現有的 Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyB3gYuwnyoTUwO7PFh4Nuue-Ud8GTruuRk",
    authDomain: "recordhwv2.firebaseapp.com",
    projectId: "recordhwv2",
    storageBucket: "recordhwv2.firebasestorage.app",
    messagingSenderId: "599261009391",
    appId: "1:599261009391:web:66cd7f932650bebc0e521a",
    measurementId: "G-C51XDYW67W"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 處理背景推播 (當網頁被關閉或在背景時)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] 收到背景推播 ', payload);
  const notificationTitle = payload.notification.title || '新通知';
  const notificationOptions = {
    body: payload.notification.body || '您有一項新任務',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234f46e5' rx='20'/%3E%3Cpath fill='%23fff' d='M30 30h40v40H30z'/%3E%3C/svg%3E",
    badge: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234f46e5' rx='20'/%3E%3Cpath fill='%23fff' d='M30 30h40v40H30z'/%3E%3C/svg%3E"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
