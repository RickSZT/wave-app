import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elioenai.wave',
  appName: 'Wave',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: ['*.infinityfreeapp.com', 'www.youtube.com', 'youtube.com']
  },
  plugins: {
    BackgroundMode: {
      enabled: true
    }
  }
};

export default config;