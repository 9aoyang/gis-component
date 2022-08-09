import './polyfills'

import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import MagicEditor from "@tmagic/editor";
import MagicForm from "@tmagic/form";

import App from "./App.vue";

import "element-plus/dist/index.css";
import "@tmagic/editor/dist/style.css";
import "@tmagic/form/dist/style.css";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(MagicEditor);
app.use(MagicForm);
app.mount("#app");
