import './assets/scss/main.scss';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

import Toast, {
  EventBus,
  POSITION,
} from 'vue-toastification';

import App from './App.vue';
import { createApp } from 'vue';

// Create a new event bus and first toast interface
const defaultToastEventBus = new EventBus();

console.log(`Created toast event bus: ${defaultToastEventBus}`);

const app = createApp(App);

app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  maxToasts: 3,
  newestOnTop: true,
  timeout: 5000,
  transition: 'Vue-Toastification__bounce',
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter(t => t.type === toast.type).length !== 0) {
      // discards the toast
      return false;
    }
    return toast;
  }
});

app.mount('#app');
