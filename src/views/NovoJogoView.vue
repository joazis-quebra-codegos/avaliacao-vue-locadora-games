<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="mb-4">Cadastrar Novo Jogo</h2>

      <!-- TODO 14 — Crie um formulário com os seguintes campos:
             - Título           (input text)
             - Plataforma       (input text ou select com opções)
             - Gênero           (input text)
             - Ano de Lançamento (input number)
             - Disponível       (select com opções: Disponível / Locado)

           Use v-model para vincular cada campo à variável "novoJogo".
           Ao enviar o formulário, chame a função "cadastrarJogo".

           Adicione também:
             - Um botão "Salvar"
             - Um botão "Cancelar" que volta para /jogos -->

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
// TODO 15 — Importe a interface Jogo do arquivo de tipos

const router = useRouter()
const API_URL = 'http://localhost:3000/jogos'

const novoJogo = ref({} as Omit<Jogo, 'id'>)

async function salvar(){
  novoJogo.value.disponivel = String(novoJogo.value.disponivel) === 'true';
  const jogoPost = novoJogo.value as Jogo
  await postJogo(jogoPost as Jogo)

  router.push('/jogos')
}
// TODO 16 — Crie a variável reativa "novoJogo" com os campos
//   do jogo, sem o "id" (que é gerado automaticamente pela API).
//   Dica: use Omit<Jogo, 'id'> para tipar o objeto sem o campo id.

// TODO 17 — Crie a função "cadastrarJogo" que:
//   1. Faz uma requisição POST para a API_URL com os dados de "novoJogo"
//   2. Redireciona para /jogos após o cadastro
</script>