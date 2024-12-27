import { createApp } from "vue";
import "./assets/styles/base.scss";
import App from "./App.vue";
import Aos from "aos";

createApp(App).mount("#app");

Aos.init();
