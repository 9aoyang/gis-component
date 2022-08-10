import { createApp } from 'vue';

import App from './App.vue';

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

Promise.all([import('../.tmagic/comp-entry'), import('../.tmagic/plugin-entry')]).then(([components, plugins]) => {
  const magicApp = createApp(App);
  magicApp.use(OpenLayersMap)

  Object.values(components.default).forEach((component: any) => {
    magicApp.component(component.name, component);
  });

  Object.values(plugins.default).forEach((plugin: any) => {
    magicApp.use(plugin);
  });

  magicApp.mount('#app');
});
