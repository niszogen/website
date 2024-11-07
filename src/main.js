import { inject } from "@vercel/analytics";
inject();

import "./assets/style.scss";
import "./assets/buttons.scss";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
