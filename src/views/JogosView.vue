<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Acervo de Jogos</h2>
      <RouterLink to="/jogos/novo" class="btn btn-primary">Novo jogo</RouterLink>
    </div>

  <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">Titulo</th>
        <th scope="col">Plataforma</th>
        <th scope="col">Gênero</th>
        <th scope="col">Ano de lançamento</th>
        <th scope="col">Disponibilidade</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody v-for="jogo in jogos" :key="jogo.id">
      <tr>
        <td>{{ jogo.titulo }}</td>
        <td>{{ jogo.plataforma }}</td>
        <td>{{ jogo.genero }}</td>
        <td>{{ jogo.anoLancamento }}</td>
        <td><StatusBadgeComponent :status="jogo.disponivel"/></td>
        <td>   
          <div class="d-flex gap-2">
            <button @click="excluirJogo(jogo.id)" class="btn btn-outline-danger btn-sm">
              Excluir
            </button>
            <RouterLink :to="`/jogos/${jogo.id}/editar`" class="btn btn-outline-warning btn-sm">
              Editar
            </RouterLink>
          </div>         
        </td>
      </tr>
  </tbody>
</table>

    <!-- TODO 7 — Exiba uma tabela com os jogos buscados da API.
         A tabela deve ter as colunas:
         Título | Plataforma | Gênero | Ano | Disponível | Ações

         Para cada jogo na lista:
           - Exiba os dados nas colunas correspondentes
           - Na coluna "Disponível", exiba um badge Bootstrap:
               · Verde  (bg-success) → "Disponível"
               · Vermelho (bg-danger) → "Locado"
           - Na coluna "Ações", exiba:
               · Botão "Editar"  → leva para /jogos/:id/editar
               · Botão "Excluir" → chama a função de exclusão

         Dica: use v-for para percorrer a lista de jogos.
               Use v-if/v-else para exibir o badge correto. -->

    <!-- TODO 8 — Se a lista de jogos estiver vazia, exiba uma mensagem
         informando que não há jogos cadastrados no acervo. -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Jogo } from '@/interfaces/Jogo';
import { deleteJogo, getJogos } from '@/service/api';
import StatusBadgeComponent from '@/components/statusBadgeComponent.vue';
// TODO 9 — Importe a interface Jogo do arquivo de tipos

const API_URL = 'http://localhost:3000/jogos'

const jogos = ref<Jogo[]>([])

async function buscarJogos(){
  const jogosRes: Jogo[] = await getJogos() 
  const jogoLista = jogosRes as Jogo[]
  jogos.value.push(...jogoLista)
}

async function excluirJogo(id: number | string) {
  try {
    await deleteJogo(id);
    // Atualiza a tela instantaneamente
    jogos.value = jogos.value.filter(jogo => jogo.id !== id);
  } catch (erro) {
    console.error(erro);
  }
}

onMounted(buscarJogos)

// TODO 10 — Crie a variável reativa "jogos" para armazenar a lista
//   de jogos retornada pela API. Comece com uma lista vazia.
//   Use a interface Jogo para tipar corretamente.

// TODO 11 — Crie a função "buscarJogos" que:
//   1. Faz uma requisição GET para a API_URL usando Axios
//   2. Armazena o resultado na variável "jogos"

// TODO 12 — Crie a função "excluirJogo" que recebe um "id" como
//   parâmetro (do tipo number) e:
//   1. Exibe uma confirmação para o usuário (use window.confirm)
//   2. Se confirmado, faz uma requisição DELETE para API_URL/id
//   3. Chama "buscarJogos" novamente para atualizar a lista

// TODO 13 — Use onMounted para chamar "buscarJogos" quando
//   a página for carregada pela primeira vez
</script>