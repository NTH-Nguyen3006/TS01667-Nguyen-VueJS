<template>
    <div class="p-5 bg-light shadow-lg rounded-5 text-start" style="min-width: 40rem;">
        <ul class="nav nav-tabs nav-fill bg-light mb-5" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tab-login" data-bs-toggle="pill" data-bs-target="#pills-login"
                    type="button" role="tab">
                    Đăng Nhập
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab-register" data-bs-toggle="pill" data-bs-target="#pills-register"
                    type="button" role="tab">
                    Đăng Ký
                </button>
            </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel">
                <h1 class="mb-3 fw-bolder text-uppercase ">Đăng nhập</h1>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label class="form-label">Email / ID</label>
                        <input type="text" class="form-control rounded-5" placeholder="Nhập Id hoặc email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mật khẩu</label>
                        <input type="password" class="form-control rounded-5" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-2 rounded-5">Đăng nhập</button>
                </form>
            </div>
            <div class="tab-pane fade" id="pills-register" role="tabpanel">
                <h1 class="mb-3 fw-bolder text-uppercase text-center">Đăng ký</h1>
                <form @submit.prevent="handleRegister">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control rounded-5" placeholder="Nhập Email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Họ và tên</label>
                        <input type="text" class="form-control rounded-5" placeholder="Nhập Họ và tên" required>
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control rounded-5" placeholder="name@example.com" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mật khẩu</label>
                        <input type="password" class="form-control rounded-5" placeholder="Tối thiểu 8 ký tự" required>
                    </div>
                    <button type="submit" class="btn btn-success rounded-5 w-100">Tạo tài khoản</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
body {
    background-image: url('/src/assets/black-dunes-minimal-website-background-picjumbo-com.jpeg');
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    place-items: unset;
    display: flex;
    /* place-items: center; */
}
</style>