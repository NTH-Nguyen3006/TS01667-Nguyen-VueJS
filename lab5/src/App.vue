<script setup>
// import Bai from './components/Bai1.vue';
// import Bai from './components/Bai2.vue';
import Bai from './components/Bai3.vue';

import { ref } from 'vue';
import CreatePost from './components/Bai4/CreatePost.vue';
import PostList from './components/Bai4/PostList.vue';

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<template>
  <!-- <Bai1 /> -->
  <Bai />
  <!-- <bai3Lab5 /> -->

  <!-- <div id="app">
    <h1 class="fw-bolder text-primary mb-5">Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div> -->
</template>

<style setup>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
