<template>
    <div class="container-lg my-3" v-if="currentPost">
        <div class="row justify-content-center">
            <!-- Cột chính bên trái: Nội dung bài viết -->
            <div class="col-lg-8">
                <div class="mb-4">
                    <div class="text-primary fw-bold mb-2">
                        {{ currentPost.author }} • {{ currentPost.date }}
                    </div>
                    <h1 class="display-5 fw-bold mb-3">{{ currentPost.title }}</h1>

                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <!-- Render Tags từ mảng -->
                        <span v-for="tag in currentPost.tags" :key="tag" class="tag-pill">
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Ảnh bài viết -->
                <img :src="currentPost.image" class="featured-image mb-5 shadow-sm w-100 rounded-4"
                    style="height: 450px; object-fit: cover;" :alt="currentPost.title">

                <!-- Nội dung bài viết -->
                <article class="post-content mb-5">
                    <!-- Lead text lấy từ description -->
                    <p class="lead fw-normal text-muted mb-4">
                        {{ currentPost.description }}
                    </p>

                    <p>
                        Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta làm việc hàng ngày.
                        Không chỉ dừng lại ở việc hỗ trợ soạn thảo văn bản, AI còn giúp các nhà thiết kế
                        tối ưu hóa quy trình sáng tạo, từ khâu lên ý tưởng đến lúc hoàn thiện sản phẩm cuối cùng.
                    </p>

                    <h3 class="fw-bold mt-5 mb-3">Tầm quan trọng của công nghệ mới</h3>
                    <p>
                        Việc làm chủ các công cụ mới giúp chúng ta tiết kiệm thời gian và tập trung hơn
                        vào tư duy chiến lược. Những trải nghiệm thực tế cho thấy năng suất lao động
                        có thể tăng lên gấp đôi nếu biết áp dụng đúng quy trình.
                    </p>

                    <blockquote
                        class="border-start border-primary border-4 ps-4 my-5 fst-italic text-muted bg-light py-3 rounded-end">
                        "Sáng tạo không phải là tìm ra cái mới, mà là nhìn cái cũ dưới một lăng kính mới với sự hỗ trợ
                        của công nghệ."
                    </blockquote>
                </article>

                <hr class="my-5">


                <section id="comments">
                    <h4 class="fw-bold mb-4">Bình luận ()</h4>
                    <div class="mb-5">
                        <div class="d-flex mb-4">
                            <div class="ms-3 p-3 bg-light rounded-4 w-100">
                                <div class="d-flex justify-content-between mb-1">
                                    <span class="fw-bold fs-5 text-primary"> Minh Anh </span>
                                    <small class="text-muted">2 giờ trước</small>
                                </div>
                                <p class="mb-0 small">Bài viết rất hữu ích ạ!</p>
                            </div>
                        </div>
                    </div>



                    <div class="card border-0 bg-light p-4 rounded-4 shadow-sm">
                        <h5 class="fw-bold mb-3">Để lại bình luận</h5>
                        <form @submit.prevent>
                            <div class="row g-3">
                                <div class="col-md-6"><input type="text" class="form-control rounded-3 border-0 py-2"
                                        placeholder="Tên của bạn"></div>
                                <div class="col-md-6"><input type="email" class="form-control rounded-3 border-0 py-2"
                                        placeholder="Email"></div>
                                <div class="col-12"><textarea class="form-control rounded-3 border-0 py-2" rows="4"
                                        placeholder="Viết bình luận..."></textarea></div>
                                <div class="col-12 text-end"><button type="submit"
                                        class="btn btn-primary rounded-pill px-4 fw-bold">Gửi bình luận</button></div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>



            <div class="col-lg-4 ps-lg-5">
                <div class="sticky-top" style="top: 90px; z-index: 1;">
                    <h5 class="fw-bold mb-4 pb-2 border-bottom">Bài viết mới nhất</h5>
                    <div class="vstack gap-4">
                        <!-- Load 4 bài mới nhất trừ bài hiện tại -->
                        <router-link v-for="recent in recentPosts" :key="recent.id" :to="'/article/' + recent.id"
                            class="text-decoration-none d-flex align-items-center gap-3 group">
                            <img :src="recent.image" class="rounded-3 object-fit-cover shadow-sm"
                                style="width: 80px; height: 80px;">
                            <div>
                                <h6 class="text-dark fw-bold mb-1 mb-0" style="font-size: 0.95rem; line-height: 1.3;">{{
                                    recent.title }}</h6>
                                <small class="text-muted">{{ recent.date }}</small>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section: Bài viết khác ở dưới cùng -->
        <section class="container my-5 pt-5 border-top">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold m-0">Có thể bạn quan tâm</h4>
                <router-link to="/" class="text-decoration-none small fw-bold">Xem tất cả →</router-link>
            </div>

            <div class="row g-4">
                <div class="col-md-4" v-for="other in otherPosts" :key="other.id">
                    <router-link :to="'/article/' + other.id" class="text-decoration-none">
                        <div class="card border-0 h-100">
                            <img :src="other.image" class="rounded-4 mb-3 w-100 object-fit-cover shadow-sm"
                                style="height: 200px;">
                            <div class="text-primary fw-bold mb-1" style="font-size: 0.85rem;">{{ other.author }} • {{
                                other.date }}</div>
                            <h5 class="fw-bold text-dark mb-2" style="font-size: 1.1rem; line-height: 1.4;">{{
                                other.title }}</h5>
                            <div class="d-flex flex-wrap gap-2">
                                <span v-for="tag in other.tags" :key="tag" class="tag-pill">{{ tag }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>

    <!-- Loading state nếu chưa tìm thấy bài -->
    <div v-else class="container text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3">Đang tải bài viết...</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { posts } from '../posts'; // Import mảng dữ liệu chung

const route = useRoute();

// 1. Tìm bài viết hiện tại dựa trên ID từ URL
const currentPost = computed(() => {
    return posts.find(p => p.id == route.params.id);
});

// 2. Lấy danh sách bài viết mới nhất cho Sidebar (loại trừ bài đang xem)
const recentPosts = computed(() => {
    return posts.filter(p => p.id != route.params.id).slice(0, 4);
});

// 3. Lấy 3 bài viết khác cho phần dưới cùng
const otherPosts = computed(() => {
    return posts.filter(p => p.id != route.params.id).slice(4, 7);
});
</script>

<style scoped>
.tag-pill {
    border: 1px solid #dee2e6;
    color: #6c757d;
    font-size: 0.8rem;
    padding: 3px 12px;
    border-radius: 50px;
    background: #fff;
}

.post-content {
    line-height: 1.8;
    font-size: 1.1rem;
    color: #333;
}

.group:hover h6 {
    color: #0d6efd !important;
    text-decoration: underline;
}

.card:hover img {
    opacity: 0.9;
    transform: translateY(-5px);
    transition: 0.3s;
}
</style>