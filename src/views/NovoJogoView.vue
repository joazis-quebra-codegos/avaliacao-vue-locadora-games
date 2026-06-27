<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="mb-4">Cadastrar Novo Jogo</h2>

      <form @submit.prevent="salvar">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Título</label>
          <input class="form-control" type="text" v-model="novoJogo.titulo">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Plataforma</label>
            <input class="form-control" type="text" v-model="novoJogo.plataforma">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Gênero</label>
          <input class="form-control" type="text" v-model="novoJogo.genero">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Ano de lançamento</label>
          <input class="form-control" type="text" v-model="novoJogo.anoLancamento">
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Status de disponibilidade</label>
          <select class="form-control" v-model="novoJogo.disponivel">
            <option value="" select disabled>Selecione o status</option>
            <option value='true' >Disponível</option>
            <option value='false' >Não disponível</option>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Jogo } from '@/interfaces/Jogo'
import { postJogo } from '@/service/api'

const router = useRouter()
const API_URL = 'http://localhost:3000/jogos'

const novoJogo = ref({} as Omit<Jogo, 'id'>)

async function salvar(){
  novoJogo.value.disponivel = String(novoJogo.value.disponivel) === 'true';
  const jogoPost = novoJogo.value as Jogo
  await postJogo(jogoPost as Jogo)

  router.push('/jogos')
}
</script>