import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
 const base=loadEnv(mode,'.','').DEPLOY_BASE || '/';
 return {
  base,
  plugins: [{name:'adc-public-asset-base',enforce:'pre',transform(code,id){
    if(base==='/'||id.indexOf('/src/')===-1||!/\.[jt]sx?$/.test(id))return;
    return code.replace(/(['"`])\/assets\//g,`$1${base}assets/`);
  }},react()],
  server: { host: '127.0.0.1', port: 4174 },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('/node_modules/') === -1) return;
          if (/\/(motion|framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion';
          if (/\/(react|react-dom|scheduler)\//.test(id)) return 'react';
          if (id.indexOf('/@phosphor-icons/') !== -1) return 'icons';
        },
      },
    },
  },
 };
});
