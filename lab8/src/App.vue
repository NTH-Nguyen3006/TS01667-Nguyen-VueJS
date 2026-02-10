<template>
  <div id="app">
    <AppHeader />

    <main class="container">
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* App specific styles if needed */
</style>