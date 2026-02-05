<template>
    <div class="container py-5">
        <section class="mb-5">
            <h1 class="fw-bold mb-4">Bài viết nổi bật</h1>
            <hr>
            <div class="row g-4 mb-4">
                <div class="col-lg-6" v-if="featuredMain">
                    <RouterLink :to="'/article/' + featuredMain.id" class="text-decoration-none text-dark">
                        <div class="card border-0 bg-transparent rounded-5 post-card">
                            <img :src="featuredMain.image" class="card-img-top mb-3 rounded-3 main-img" alt="Blog Main">
                            <div class="card-body p-0">
                                <p class="text-primary fw-semibold small mb-1">{{ featuredMain.author }} • {{
                                    featuredMain.date }}</p>
                                <div class="d-flex justify-content-between align-items-start">
                                    <h3 class="fw-bold h4">{{ featuredMain.title }}</h3>
                                    <i class="bi bi-arrow-up-right fs-5"></i>
                                </div>
                                <p class="text-muted small">{{ featuredMain.description }}</p>
                                <div class="d-flex gap-2">
                                    <span v-for="tag in featuredMain.tags" :key="tag"
                                        class="badge rounded-pill border text-dark fw-normal px-3">{{ tag }}</span>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>



                <div class="col-lg-6">
                    <div class="d-flex flex-column gap-4">
                        <RouterLink v-for="post in featuredSub" :key="post.id" :to="'/article/' + post.id"
                            class="text-decoration-none text-dark">
                            <div class="row g-0 align-items-center post-card">
                                <div class="col-5">
                                    <img :src="post.image" class="img-fluid rounded-3 sub-img" alt="post">
                                </div>
                                <div class="col-7 ps-3">
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
                    </div>
                </div>
            </div>

            <br>

            <h1 class="fw-bold mt-3">Dự án & Sáng tạo</h1>
            <hr>
            <div class="row g-4 mb-5">
                <div class="col-lg-6" v-if="projectMain">
                    <RouterLink :to="'/article/' + projectMain.id" class="text-decoration-none text-dark">
                        <div class="card border-0 post-card">
                            <img :src="projectMain.image" class="card-img-top rounded-3 mb-3 main-img">
                            <div class="card-body p-0">
                                <p class="text-primary fw-semibold small mb-2">
                                    {{ projectMain.author }} •
                                    {{ projectMain.date }}</p>
                                <h3 class="fw-bold h4">{{ projectMain.title }}</h3>
                                <p class="text-muted small">{{ projectMain.description }}</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex flex-column gap-4">
                        <RouterLink v-for="post in projectSub" :key="post.id" :to="'/article/' + post.id"
                            class="text-decoration-none text-dark">
                            <div class="row g-0 align-items-center post-card">
                                <div class="col-5">
                                    <img :src="post.image" class="img-fluid rounded-3 sub-img" alt="post">
                                </div>
                                <div class="col-7 ps-3">
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
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { posts } from '../posts';

const featuredMain = computed(() => posts.find(p => p.section === 'featured'));
const featuredSub = computed(() => posts.filter(p => p.section === 'featured-sub'));

const projectMain = computed(() => posts.find(p => p.section === 'project'));
const projectSub = computed(() => posts.filter(p => p.section === 'project-sub'));
</script>

<style scoped>
.main-img {
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.sub-img {
    height: 120px;
    width: 100%;
    object-fit: cover;
}

.post-card:hover .main-img {
    transform: scale(1.02);
}

.post-card:hover h3,
.post-card:hover h4 {
    color: #0d6efd;
}
</style>