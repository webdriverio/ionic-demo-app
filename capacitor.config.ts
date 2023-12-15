import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'WebdriverIO Demo Application',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
