import { createRouter, createWebHistory } from 'vue-router';

// Views
import Home from '../views/Home';

// Routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]

// Router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;