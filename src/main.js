import { inject } from "@vercel/analytics";
inject();

import "./assets/style.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
