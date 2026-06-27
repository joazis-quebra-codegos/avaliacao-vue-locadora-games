import EditarJogoView from '@/views/EditarJogoView.vue'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'
import NovoJogoView from '@/views/NovoJogoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// TODO 2 — Importe as views necessárias para configurar as rotas.
// Você precisará importar: HomeView, JogosView, NovoJogoView e EditarJogoView

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
    // TODO 3 — Defina as rotas da aplicação aqui.
    //
    // A aplicação deve ter no mínimo 4 rotas:
    //   '/'                  → HomeView       (tela inicial)
    //   '/jogos'             → JogosView      (listagem de jogos)
    //   '/jogos/novo'        → NovoJogoView   (cadastro de novo jogo)
    //   '/jogos/:id/editar'  → EditarJogoView (edição de jogo)
    //
    // Dica: a rota com parâmetro ":id" identifica qual jogo será editado.
  ],
})

export default router