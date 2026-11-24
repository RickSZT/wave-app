import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wave.app',
  appName: 'Wave',
  webDir: 'www',
  backgroundColor: '#0b0b14',
  server: {
    url: 'https://waves.gt.tc',
    cleartext: false,
    androidScheme: 'https',
    allowNavigation: ['waves.gt.tc', 'www.youtube.com', 'youtube.com', 'i.ytimg.com', 'www.google.com']
  },
  android: {
    allowMixedContent: true
  },
  plugins: {
    BackgroundMode: {
      title: 'Wave tocando',
      text: 'Sua música continua tocando',
      icon: 'ic_launcher',
      color: '4fd8ff',
      resume: true,
      silent: false
    },
    SplashScreen: {
      launchShowDuration: 0
    },
    Keyboard: {
      resizeOnFullScreen: true
    }
  }
};

export default config;
