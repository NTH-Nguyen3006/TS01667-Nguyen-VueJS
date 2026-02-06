<template>
    <div class="mb-4">
        <div class="row py-3 mx-0">
            <div class="row col-6 g-1 mx-0" v-for="post in posts" :key="post.id">
                <RouterLink :to="'/post-article/' + post.id"
                    class="col-10 text-decoration-none border-bottom text-dark">
                    <div class="row g-0 post-card">
                        <div class="col-4">
                            <img :src="post.image" class="img-fluid rounded-3 sub-img" alt="post">
                        </div>
                        <div class="col-8 ps-3">
                            <p class="text-primary fw-semibold small mb-1">{{ post.author }} • {{ post.date }}
                            </p>
                            <h4 class="fw-bold h6">{{ post.title }}</h4>
                            <div class="d-flex gap-2">
                                <span v-for="tag in post.tags" :key="tag"
                                    class="badge rounded-pill border text-dark fw-normal small">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <div class="col-1 border-bottom">
                    <button class="btn btn-outline-danger" @click="() => handleDel(post.id)">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { posts } from '../posts';

const handleDel = (pidToDel) => {
    const indexToDel = posts.findIndex(p => p.id !== pidToDel)
    if (indexToDel !== -1) posts.splice(indexToDel, 1)
}
</script>


<style></style>