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
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Jogo } from '@/interfaces/Jogo';
import { deleteJogo, getJogos } from '@/service/api';
import StatusBadgeComponent from '@/components/statusBadgeComponent.vue';

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
    jogos.value = jogos.value.filter(jogo => jogo.id !== id);
  } catch (erro) {
    console.error(erro);
  }
}

onMounted(buscarJogos)
</script>