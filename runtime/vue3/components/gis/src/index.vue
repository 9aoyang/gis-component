<template>
  <ol-map
    v-if="visible"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px; width: 100%"
    @click="onClick"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Core from '@tmagic/core';

import useApp from '../../useApp';

export default defineComponent({
  name: 'magic-ui-gis',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const visible = ref(true);
    const center = ref([120, 30]);
    const projection = ref('EPSG:4326');
    const zoom = ref(8);
    const rotation = ref(0);
    const app: Core | undefined = useApp(props);

    return {
      visible,
      center,
      projection,
      zoom,
      rotation,

      refresh() {
        visible.value = false
        setTimeout(() => {
          visible.value = true
        }, 1000);
      },

      onClick() {
        console.log('map:click');
        app?.emit('map:click');
      },
    };
  },
});
</script>
