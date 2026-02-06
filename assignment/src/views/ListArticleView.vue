<template>
    <div class="container py-5">
        <!-- Header & Bộ lọc -->
        <div class="row mb-5 align-items-center">
            <div class="col-md-6">
                <h1 class="fw-bold display-5 mb-2">Tất cả bài viết</h1>
                <p class="text-secondary">Khám phá những chia sẻ mới nhất về Thiết kế, Công nghệ và Đời sống.</p>
            </div>
            <div class="col-md-6">
                <div class="d-flex gap-3 justify-content-md-end mt-3 mt-md-0">
                    <div class="search-box position-relative w-100" style="max-width: 300px;">
                        <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                        <input v-model="searchQuery" type="text"
                            class="form-control rounded-pill ps-5 shadow-none border-0 bg-light"
                            placeholder="Tìm bài viết...">
                    </div>
                    <select v-model="selectedCategory"
                        class="form-select rounded-pill border-0 bg-light shadow-none w-auto px-4">
                        <option value="All">Tất cả danh mục</option>
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Danh sách bài viết (Grid 3 cột) -->
        <div class="row g-4" v-if="filteredPosts.length > 0">
            <div class="col-md-6 col-lg-4" v-for="post in filteredPosts" :key="post.id">
                <RouterLink :to="'/article/' + post.id" class="text-decoration-none text-dark h-100 d-block">
                    <!-- <div class="card border-0 bg-transparent rounded-5 post-card">
                        <div class="img-container overflow-hidden rounded-4 mb-3 shadow-sm">
                            <img :src="post.image" class="card-img-top object-fit-cover"
                                style="height: 240px; transition: 0.5s;" :alt="post.title">
                        </div>
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center mb-2">
                                <span class="text-primary fw-bold small">{{ post.author }}</span>
                                <span class="mx-2 text-muted">•</span>
                                <span class="text-muted small">{{ post.date }}</span>
                            </div>
                            <h5 class="fw-bold mb-2 post-title" style="line-height: 1.4;">{{ post.title }}</h5>
                            <p class="text-muted small mb-3 text-truncate-3">
                                {{ post.description }}
                            </p>
                            <div class="d-flex flex-wrap gap-2 mt-auto">
                                <span v-for="tag in post.tags" :key="tag"
                                    class="badge rounded-pill border text-dark fw-normal bg-white px-3 py-2">
                                    #{{ tag }}
                                </span>
                            </div>
                        </div>
                    </div> -->

                    <article-card :article="post" />
                </RouterLink>
            </div>
        </div>

        <!-- Trạng thái trống -->
        <div v-else class="text-center py-5">
            <i class="bi bi-journal-x display-1 text-muted"></i>
            <h3 class="mt-3 text-muted">Không tìm thấy bài viết nào</h3>
            <button @click="resetFilters" class="btn btn-primary rounded-pill mt-3 px-4">Xem tất cả bài viết</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { posts } from '../posts';
import ArticleCard from '../components/ArticleCard.vue';

const searchQuery = ref('');
const selectedCategory = ref('All');



const categories = computed(() => {
    const cats = posts.map(p => p.category);
    return [...new Set(cats)];
});


const filteredPosts = computed(() => {
    return posts.filter(post => {
        const matchSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchCat = selectedCategory.value === 'All' || post.category === selectedCategory.value;
        return matchSearch && matchCat;
    });
});

const resetFilters = () => {
    searchQuery.value = '';
    selectedCategory.value = 'All';
};
</script>

<style scoped>
:deep() {
    img {
        height: 250px !important;
    }

    .post-card:hover :deep {
        transform: scale(1.1);
    }

    .post-card:hover .post-title {
        color: #0d6efd;
    }

    .text-truncate-3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .post-card {
        transition: transform 0.3s ease;
    }

    .post-card:hover {
        transform: translateY(-5px);
    }

    .form-control:focus {
        background-color: #fff !important;
        border: 1px solid #0d6efd !important;
    }
}
</style>