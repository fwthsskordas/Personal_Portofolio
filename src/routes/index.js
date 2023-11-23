import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/skills', component: Skills},
    {path: '/contact', component: Contact}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router 