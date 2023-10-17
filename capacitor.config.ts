import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.capacitor',
  appName: 'angular-capacitor',
  webDir: 'dist/angular-capacitor',
  server: {
    androidScheme: 'https'
  }
};

export default config;
