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
import { defineComponent, ref, inject } from 'vue';
import Core from '@tmagic/core';

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

  setup() {
    const visible = ref(true);
    const center = ref([120, 30]);
    const projection = ref('EPSG:4326');
    const zoom = ref(8);
    const rotation = ref(0);
    const app: Core | undefined = inject('app');

    return {
      visible,
      center,
      projection,
      zoom,
      rotation,

      log() {
        console.log('log');
      },

      onClick() {
        app?.emit('map:click');
      },
    };
  },
});
</script>
