<template>
  <!-- TODO 4 — Crie a barra de navegação usando Bootstrap.
       A NavBar deve conter:
         - O nome da locadora ("GameLoc") como marca/logo
         - Links de navegação para: Home (/) e Acervo (/jogos)
         - Use o componente <RouterLink> do Vue Router nos links

       Dica: consulte o componente navbar do Bootstrap 5. -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        GameLoc
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menuNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/jogos">Acervo</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Nenhuma lógica necessária aqui — apenas o template da navbar.
</script>