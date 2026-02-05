<template>
    <footer class="rounded-top-5 p-5 text-white mt-5 shadow-lg" style="background-color: #0f172a;">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4 mb-4">
                    <h5 class="fw-bold mb-4 text-primary">Hoàng Nguyên Blog</h5>
                    <p class="opacity-75 small lh-lg">
                        Nơi chia sẻ hành trình học tập, những trải nghiệm về thiết kế UI/UX,
                        công nghệ AI và lối sống tối giản của một Designer tuổi 18.
                        Hy vọng những nội dung này sẽ truyền cảm hứng cho bạn.
                    </p>
                    <div class="d-flex gap-3 mt-4">
                        <a href="https://www.facebook.com/h.nguyen.3006"
                            class="text-white fs-5 opacity-75 hover-opacity-100" target="_blank">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="text-white fs-5 opacity-75 hover-opacity-100"><i
                                class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white fs-5 opacity-75 hover-opacity-100"><i
                                class="bi bi-linkedin"></i></a>
                        <a href="https://github.com/NTH-Nguyen3006" target="_blank"
                            class="text-white fs-5 opacity-75 hover-opacity-100"><i class="bi bi-github"></i></a>
                    </div>
                </div>


                <div class="col-md-2 col-6 mb-4 ms-md-auto">
                    <h5 class="fw-bold mb-4">Khám phá</h5>
                    <div class="d-flex flex-column gap-2 small">
                        <RouterLink to="/" class="text-white text-decoration-none opacity-75 hover-link">Trang chủ
                        </RouterLink>
                        <RouterLink to="/list-article" class="text-white text-decoration-none opacity-75 hover-link">
                            Tất cả bài viết</RouterLink>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Dự án cá nhân</a>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Về tác giả</a>
                    </div>
                </div>

                <div class="col-md-3 col-6 mb-4">
                    <h5 class="fw-bold mb-4">Chuyên mục</h5>
                    <div class="d-flex flex-column gap-2 small">
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Thiết kế UI/UX</a>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Trí tuệ nhân tạo</a>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Setup góc làm việc</a>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Tâm lý học màu sắc</a>
                        <a href="#" class="text-white text-decoration-none opacity-75 hover-link">Sách & Tư duy</a>
                    </div>
                </div>
            </div>


            <div class="mt-5 pt-4 border-top border-white border-opacity-10">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p class="mb-0 small opacity-50">&copy; 2025 Hoang Nguyen. Built with Vue.js & Bootstrap.</p>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-center justify-content-md-end gap-4 opacity-50 small">
                            <a href="#" class="text-white text-decoration-none hover-link">Chính sách bảo mật</a>
                            <a href="#" class="text-white text-decoration-none hover-link">Điều khoản sử dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.opacity-75 {
    opacity: 0.75;
}

.opacity-50 {
    opacity: 0.5;
}

.hover-link:hover {
    opacity: 1 !important;
    color: #3b82f6 !important;
    padding-left: 5px;
    transition: all 0.3s ease;
}

.hover-opacity-100:hover {
    opacity: 1 !important;
    transform: translateY(-3px);
    transition: all 0.3s ease;
}

.input-group input {
    background-color: rgba(255, 255, 255, 0.05) !important;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}
</style>