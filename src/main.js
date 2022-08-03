import { createApp } from "vue";
import App from "./App.vue";
import VueNumberFormat from 'vue-number-format'

import VueTheMask from 'vue-the-mask'

import "./assets/main.css";
import "./assets/global.css";
import "./assets/client-config.css";

const app = createApp(App)
app.use(VueTheMask)
app.use(VueNumberFormat, {
    precision: 2, 
    prefix: '', 
    suffix: '', 
    decimal: ',', 
    thousand: '.', 
    acceptNegative: true, 
    isInteger: false
})

app.mount("#app");