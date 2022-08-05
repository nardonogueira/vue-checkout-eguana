import { createApp } from "vue";
import App from "./App.vue";
import VueNumberFormat from 'vue-number-format'
import VueTheMask from 'vue-the-mask'
import VueNumberInput from '@chenfengyuan/vue-number-input';

import "./assets/css/main.css";
import "./assets/css/global.css";
import "./assets/css/client-config.css";

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

app.component(VueNumberInput.name, VueNumberInput);
app.mount("#app");
