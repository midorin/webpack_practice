import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import { createApp } from 'vue'
import App from './VueApp.vue'
createApp(App).mount('#vue-root');

import add from './add.ts';

console.log('webpack');
console.log(add(3, 9));

my();