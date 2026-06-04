// sw.js
self.addEventListener('install', (e) => {
  // 서비스 워커 설치 시 즉시 활성화
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 이 부분이 있어야 설치 가능 조건 중 하나인 '오프라인 지원'으로 인식됩니다.
  // 실제 캐싱 로직이 없더라도 fetch 이벤트가 정의되어 있으면 통과됩니다.
});