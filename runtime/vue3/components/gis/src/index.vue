<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px; width: 100%"
    @click="clickHandler"
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
    useApp(props);

    const center = ref([120, 30]);
    const projection = ref('EPSG:4326');
    const zoom = ref(8);
    const rotation = ref(0);
    return {
      center,
      projection,
      zoom,
      rotation,

      clickHandler() {
        console.log(1);
      },
    };
  },
});
</script>
