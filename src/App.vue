<script setup>
import Header from './components/menus/HeaderMenu.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <Header user="Jiesie"></Header>
      <router-link to="/">Home</router-link>
      <router-link to="/accounts">Accounts</router-link>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
