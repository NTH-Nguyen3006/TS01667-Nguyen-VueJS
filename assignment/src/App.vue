<script setup>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
</script>

<template>
  <Header />

  <main class="">
    <RouterView to="/" />
  </main>

  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

main {
  /* min-height: 100vw; */
}
</style>
