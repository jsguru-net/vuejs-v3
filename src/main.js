import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import "./styles/main.scss";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Page from "./pages/Page.vue";

const app = createApp(App);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/pages/:pageId", component: Page },
    { path: "/bar", component: Bar },
  ],
});

app.use(router);

window.vm = app.mount("#app");
