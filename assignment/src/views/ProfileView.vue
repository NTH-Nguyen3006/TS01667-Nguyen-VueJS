<template>
    <div class="container my-4">
        <div v-if="authState.isLoggedIn" class="row g-5">
            <div class="col-lg-4">
                <div class="bg-light shadow-sm rounded-5 p-4 shadow-lg">
                    <div class="header d-flex align-items-center mb-3">
                        <div class="mx-3">
                            <h5 class="text-primary fw-bolder">{{ authState.user?.fullname }}</h5>
                        </div>
                    </div>
                    <hr class="mb-4 opacity-10">

                    <div class="list-group list-group-flush">
                        <a href="#"
                            class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3 active bg-primary bg-opacity-10 text-primary">
                            <div class="me-3"><i class="bi bi-person fs-5"></i></div>
                            <span class="flex-grow-1 fw-medium">Thông tin</span>
                            <i class="bi bi-chevron-right small"></i>
                        </a>

                        <a href="#"
                            class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3">
                            <div class="text-secondary me-3"><i class="bi bi-gear fs-5"></i></div>
                            <span class="flex-grow-1 fw-medium">Cài đặt</span>
                            <i class="bi bi-chevron-right text-muted small"></i>
                        </a>

                        <div class="dropdown dropend">
                            <a href="#" data-bs-toggle="dropdown"
                                class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3">
                                <div class="text-secondary me-3"><i class="bi bi-bell fs-5"></i></div>
                                <span class="flex-grow-1 fw-medium">Thông báo</span>
                                <span class="badge rounded-pill bg-success px-2 py-1"
                                    style="font-size: 0.7rem;">Bật</span>
                            </a>
                            <ul class="dropdown-menu shadow border-0 rounded-3">
                                <li><a class="dropdown-item py-2" href="#">Cho phép</a></li>
                                <li><a class="dropdown-item py-2 text-danger" href="#">Chặn thông báo</a></li>
                            </ul>
                        </div>

                        <a href="javascript:void(0)" @click="handleLogout"
                            class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3 text-danger mt-2">
                            <div class="me-3"><i class="bi bi-box-arrow-right fs-5"></i></div>
                            <span class="flex-grow-1 fw-medium">Đăng xuất</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="bg-light rounded-5 p-5 shadow-lg">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                            <div class="mx-3">
                                <h4 class="m-0 fw-bold">{{ authState.user?.name }}</h4>
                                <h4 class="text-primary fw-bolder">{{ authState.user?.fullname }}</h4>
                            </div>
                        </div>
                    </div>

                    <hr class="my-3 opacity-10">

                    <div class="mb-4">
                        <div class="d-flex justify-content-between py-3 border-bottom">
                            <span class="text-muted fw-medium">Họ và tên</span>
                            <span class="text-dark fw-bold">{{ authState.user?.name }}</span>
                        </div>
                        <div class="d-flex justify-content-between py-3 border-bottom">
                            <span class="text-muted fw-medium">Email tài khoản</span>
                            <span class="text-dark fw-bold">{{ authState.user?.email }}</span>
                        </div>
                        <div class="d-flex justify-content-between py-3 border-bottom">
                            <span class="text-muted fw-medium">Số điện thoại</span>
                            <span class="text-dark fw-bold">{{ authState.user?.phone || 'Chưa cập nhật' }}</span>
                        </div>
                        <div class="d-flex justify-content-between py-3">
                            <span class="text-muted fw-medium">Vị trí</span>
                            <span class="text-dark fw-bold">{{ authState.user?.location || 'Chưa cập nhật' }}</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <button class="btn btn-primary px-5 py-2 fw-bold rounded-pill shadow-sm" type="button">
                            Chỉnh sửa thông tin
                        </button>
                    </div>
                </div>
            </div>
            <ActorArticle class="mt-5 shadow-lg p-1 rounded-5" />
        </div>

        <!-- <div v-else class="text-center py-5">
            <div class="display-1 text-muted mb-4"><i class="bi bi-person-lock"></i></div>
            <h2 class="fw-bold">Bạn chưa đăng nhập</h2>
            <p class="text-secondary">Vui lòng đăng nhập để xem thông tin cá nhân của bạn.</p>
            <button @click="router.push('/login')" class="btn btn-primary rounded-pill px-4 mt-3">
                Đến trang Đăng nhập <i class="bi bi-arrow-bar-right"></i>
            </button>
        </div> -->

        <RequireAuth v-else />



    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { authState, logout } from '../auth.js';
import ActorArticle from '../components/ActorArticle.vue';
import RequireAuth from '../components/RequireAuth.vue';

const router = useRouter();

const handleLogout = () => {
    if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
        logout();
        router.push('/');
    }
};
</script>

<style scoped>
.list-group-item {
    background-color: transparent;
    transition: all 0.2s ease;
}

.list-group-item:hover:not(.active) {
    background-color: #f1f3f5;
    padding-left: 20px;
}

.object-fit-cover {
    object-fit: cover;
}
</style>