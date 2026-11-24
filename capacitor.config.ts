import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wave.app',
  appName: 'Wave',
  webDir: 'www',
  server: {
    url: 'https://waves.gt.tc',
    cleartext: false
  },
  plugins: {
    BackgroundMode: {
      title: 'Wave tocando',
      text: 'Sua música continua tocando',
      icon: 'ic_launcher'
    }
  }
};

export default config;
