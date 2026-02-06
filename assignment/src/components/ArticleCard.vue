<template>
    <div class="card border-0 bg-transparent rounded-5 post-card">
        <div class="img-container overflow-hidden rounded-4 mb-3 shadow-sm">
            <img :src="article.image" class="card-img-top  rounded-3 object-fit-cover main-img" alt="Blog Main">
        </div>

        <div class="card-body p-0">
            <p class="text-primary fw-semibold small mb-1">
                <span class="text-primary fw-bold small">{{ article.author }}</span>
                <span class="mx-2 text-muted"><i class="bi bi-dot"></i></span>
                <span class="text-muted small">{{ article.date }}</span>
            </p>

            <div class="d-flex justify-content-between align-items-start">
                <h3 class="fw-bold h4">{{ article.title }}</h3>
                <i class="bi bi-arrow-up-right fs-5"></i>
            </div>

            <p class="text-muted text-truncate-3 small">{{ article.description }}</p>

            <div class="d-flex gap-2">
                <span v-for="tag in article.tags" :key="tag"
                    class="badge rounded-pill border text-dark fw-normal px-3">{{ tag }}</span>
            </div>
        </div>
    </div>
</template>


<script setup>

defineProps(["article"]);

</script>

<style scoped>
img {
    transition: 0.5s;
}

.post-card:hover img {
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

/* Tùy chỉnh input search */
.form-control:focus {
    background-color: #fff !important;
    border: 1px solid #0d6efd !important;
}
</style>