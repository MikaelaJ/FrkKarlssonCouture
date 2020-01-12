import about from './pages/about.vue'
import contact from './pages/contact.vue'
import couture from './pages/couture.vue'
import index from './pages/index.vue'
import wedding from './pages/wedding.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default [
    { path: '/', component: index},
    { path: '/about', component: about},
    { path: '/contact', component: contact},
    { path: '/couture', component: couture},
    { path: '/wedding', component: wedding},
    { path: '/Footer', component: Footer},
    { path: '/Header', component: Header}
]