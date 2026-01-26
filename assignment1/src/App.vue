<script setup>
// import Auth from './components/views/Auth.vue';
import ArticleDetail from './components/views/ArticleDetail.vue';
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
import HomeViews from './components/views/HomeViews.vue';
</script>

<template>
  <Header />
  <HomeViews />
  <!-- <ArticleDetail /> -->
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
</style>
