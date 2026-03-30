import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

import AppModal from "./components/AppModal.vue";

const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store);

app.mount("#app");
