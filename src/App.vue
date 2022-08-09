<template>
  <m-editor
    v-model="data"
    :menu="menu"
    :runtime-url="runtimeUrl"
    :props-configs="propsConfigs"
    :props-values="propsValues"
    :component-group-list="componentGroupList"
  >
  </m-editor>
</template>

<script lang="ts" setup>
  import { defineComponent, ref } from "vue";
import { asyncLoadJs } from '@tmagic/utils';

  export default defineComponent({
    name: "App",

asyncLoadJs('/runtime/vue3/assets/config.js').then(() => {
  propsConfigs.value = (globalThis as any).magicPresetConfigs;
});
asyncLoadJs('/runtime/vue3/assets/value.js').then(() => {
  propsValues.value = (globalThis as any).magicPresetValues;
});

      return {
        menu: ref({
          left: [
            // 顶部左侧菜单按钮
          ],
          center: [
            // 顶部中间菜单按钮
          ],
          right: [
            // 顶部右侧菜单按钮
          ],
        }),

        data: ref({
          // 初始化页面数据
        }),

        runtimeUrl: "/runtime/vue3/playground.html",
        propsConfigs: [
          // 组件属性列表
        ],
        propsValues: [
          // 组件默认值
        ],

        componentGroupList: ref([
          // 组件列表
        ]),
      }
    },
  );
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .m-editor {
    flex: 1;
    height: 100%;
  }
</style>
