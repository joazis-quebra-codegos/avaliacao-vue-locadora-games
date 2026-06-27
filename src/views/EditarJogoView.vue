<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="mb-4">Editar Jogo</h2>

      <form @submit.prevent="editarJogo">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Título</label>
          <input class="form-control" type="text" v-model="alterarJogo.titulo">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Plataforma</label>
            <input class="form-control" type="text" v-model="alterarJogo.plataforma">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Gênero</label>
          <input class="form-control" type="text" v-model="alterarJogo.genero">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Ano de lançamento</label>
          <input class="form-control" type="text" v-model="alterarJogo.anoLancamento">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Status de disponibilidade</label>
          <select class="form-control" v-model="alterarJogo.disponivel">
            <option value="" select disabled>Selecione o status</option>
            <option value="true">Disponível</option>
            <option value="false">Não disponível</option>
          </select>
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-primary" type="submit">Salvar</button>
          <RouterLink to="/jogos" class="btn btn-primary">Voltar</RouterLink> 
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { Jogo } from '@/interfaces/Jogo'
import { getJogoById, putJogo } from '@/service/api'

const router = useRouter()
const route = useRoute()
const API_URL = 'http://localhost:3000/jogos'

const alterarJogo = ref({} as Jogo)
const jogoId = route.params.id as string

async function buscarJogoAltual(){
  const jogoAtual: Jogo = await getJogoById(jogoId) 

  alterarJogo.value = jogoAtual
}

async function editarJogo(){
  alterarJogo.value.disponivel = String(alterarJogo.value.disponivel) === 'true';
  const novoJogo = alterarJogo.value as Jogo
  await putJogo(jogoId, novoJogo)

  router.push(`/jogos`)
}

onMounted(buscarJogoAltual)
</script>