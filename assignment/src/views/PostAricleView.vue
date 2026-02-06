<template>
    <div class="container my-5">
        <div v-if="authState.isLoggedIn" class="form-container mx-auto shadow-sm p-4 rounded-4 bg-white"
            style="max-width: 800px;">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold m-0">Tạo bài viết mới</h2>
                <RouterLink to="/" class="btn btn-danger rounded-5">
                    <i class="bi bi-arrow-left me-1"></i> Quay về trang chủ
                </RouterLink>
            </div>

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="form-label fw-bold small text-muted">TIÊU ĐỀ BÀI VIẾT</label>
                    <input v-model="dataa.title" type="text" class="form-control custom-input shadow-none"
                        placeholder="Nhập tiêu đề bài viết...">
                </div>

                <div class="mb-4">
                    <label class="form-label fw-bold small text-muted">HÌNH ẢNH MINH HỌA</label>
                    <div class="upload-zone border rounded-4 p-3 text-center position-relative"
                        :class="{ 'border-primary bg-light': dataa.imagePreview }" @click="handleUpload"
                        style="cursor: pointer; min-height: 200px; display: flex; align-items: center; justify-content: center;">

                        <div v-if="!dataa.imagePreview" class="py-4">
                            <i class="bi bi-image text-primary display-4"></i>
                            <p class="mb-0 mt-2 fw-medium">Nhấn để tải ảnh lên</p>
                            <small class="text-muted">Định dạng JPG, PNG, GIF</small>
                        </div>

                        <img v-else :src="dataa.imagePreview" class="rounded-3 w-100"
                            style="max-height: 400px; object-fit: cover;">

                        <input type="file" class="d-none" id="file-input" accept="image/*" @change="onFileChange">
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <label class="form-label fw-bold small text-muted">THƯ MỤC</label>
                        <select v-model="dataa.category" class="form-select custom-input shadow-none">
                            <option value="">--- Chọn Thư mục ---</option>
                            <option value="Công nghệ">Công nghệ</option>
                            <option value="Thiết kế">Thiết kế</option>
                            <option value="Sáng tạo">Sáng tạo</option>
                            <option value="Đời sống">Đời sống</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label fw-bold small text-muted">TÁC GIẢ</label>
                        <div class="custom-input d-flex align-items-center py-2 bg-light border">
                            <span class="fw-medium">{{ authState.user?.fullname }}</span>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label fw-bold small text-muted">TAGS (CÁCH NHAU BẰNG DẤU PHẨY)</label>
                    <input v-model="dataa.tagsString" type="text" class="form-control custom-input shadow-none"
                        placeholder="Ví dụ: AI, Design, Xu hướng">
                    <div class="mt-2 d-flex flex-wrap gap-2">
                        <span v-for="tag in previewTags" :key="tag"
                            class="badge rounded-pill border text-dark fw-normal">#{{ tag }}</span>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label fw-bold small text-muted">NỘI DUNG CHI TIẾT</label>
                    <textarea v-model="dataa.content" class="form-control custom-input shadow-none" rows="6"
                        placeholder="Viết nội dung bài viết của bạn..."></textarea>
                </div>

                <div class="d-flex justify-content-end gap-2 pt-4 border-top">
                    <RouterLink type="button" to="/" class="btn btn-light px-4 rounded-pill fw-bold">
                        Hủy bỏ
                    </RouterLink>
                    <button type="submit" class="btn btn-primary px-5 rounded-pill fw-bold">Đăng bài ngay</button>
                </div>
            </form>
        </div>

        <RequireAuth v-else />


    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { authState } from '../auth';
import { posts } from '../posts';
import { useRouter } from 'vue-router';
import RequireAuth from '../components/RequireAuth.vue';

const router = useRouter();

const dataa = reactive({
    title: '',
    category: '',
    content: '',
    tagsString: '',
    imageFile: null,
    imagePreview: ''
});


const previewTags = computed(() => {
    if (!dataa.tagsString) return [];
    return dataa.tagsString.split(',').map(t => t.trim()).filter(t => t !== '');
});

const handleUpload = () => document.getElementById("file-input").click();

const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        dataa.imageFile = file;
        dataa.imagePreview = URL.createObjectURL(file);
    }
};

const handleSubmit = () => {

    if (!dataa.title || !dataa.category || !dataa.content || !dataa.imagePreview) {
        alert("Vui lòng điền đầy đủ thông tin và chọn ảnh minh họa!");
        return;
    }


    const newPost = {
        id: posts.length + 1,
        title: dataa.title,
        author: authState.user.name,
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }),
        category: dataa.category,
        image: dataa.imagePreview,
        description: dataa.content.substring(0, 150) + "...",
        tags: previewTags.value,
        section: 'project-sub'
    };

    posts.unshift(newPost);

    alert("Đăng bài thành công!");
    router.push("/");
}
</script>

<style scoped>
.custom-input {
    border-radius: 12px;
    padding: 12px;
    background-color: #f8f9fa;
    border: 1px solid #eee;
}

.custom-input:focus {
    background-color: #fff;
    border-color: #0d6efd;
}

.upload-zone {
    transition: all 0.2s ease;
}

.upload-zone:hover {
    border-color: #0d6efd !important;
    background-color: #f0f7ff !important;
}
</style>