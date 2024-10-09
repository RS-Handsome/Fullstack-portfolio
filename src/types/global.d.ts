// src/types/global.d.ts
interface TelegramWebApp {
  ready: () => void;
  BackButton: {
    show: () => void;
    hide: () => void;
  };
  // Add other properties and methods as needed
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
