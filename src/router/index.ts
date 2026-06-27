import EditarJogoView from '@/views/EditarJogoView.vue'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'
import NovoJogoView from '@/views/NovoJogoView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
     path: '/',
     component: HomeView
    },
    {
     path: '/jogos',
     component: JogosView
    },
    {
     path: '/jogos/novo',
     component: NovoJogoView
    },
    {
     path: '/jogos/:id/editar',
     component: EditarJogoView
    }
  ],
})

export default router