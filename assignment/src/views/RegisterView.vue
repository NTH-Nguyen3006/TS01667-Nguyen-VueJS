<template>
    <div class="container my-5">
        <div class="row login-container mx-auto g-0 shadow-lg rounded-5">
            <div class="col-lg-5 p-5 d-flex flex-column" style="place-self: center;">
                <h2 class="fw-bold mb-4">Đăng Ký</h2>

                <form @submit.prevent="handleRegister">
                    <div class="mb-3">
                        <label class="form-label small text-muted fw-bold mb-0">Tên đăng nhập</label>
                        <input v-model.lazy="form.username" type="text" class="form-control rounded-5"
                            placeholder="Nhập tên đăng nhập" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label small text-muted fw-bold mb-0">Họ và tên</label>
                        <input v-model.lazy="form.fullname" type="text" class="form-control rounded-5"
                            placeholder="Nhập Họ và tên" required>
                    </div>

                    <div class="mb-2">
                        <label class="form-label small text-muted fw-bold mb-0">Email</label>
                        <input v-model.lazy="form.email" type="email" class="form-control rounded-5"
                            placeholder="name@example.com" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label small text-muted fw-bold mb-0">Mật khẩu</label>
                        <input v-model.lazy="form.password" type="password" class="form-control rounded-5"
                            placeholder="Tối thiểu 8 ký tự" required>
                    </div>

                    <button type="submit" class="btn btn-success rounded-5 w-100">
                        Tạo tài khoản
                    </button>
                </form>
            </div>

            <div class="col-lg-7 d-none d-lg-block image-side " place-self: center;>
                <img class="w-100 rounded-5" src="/src/assets/login-1.jpg" style="min-height: 100%;">
            </div>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue';
import { register } from '../auth';


const form = reactive({
    username: '',
    fullname: '',
    email: '',
    password: ''
});

const handleRegister = () => {
    if (form.username && form.fullname && form.email && form.password) {

        console.log("Dữ liệu đăng ký hợp lệ:", form);
        register(form);

    } else {
        alert("Vui lòng nhập đầy đủ: Tên đăng nhập, Họ tên, Email và Mật khẩu!");
    }
};
</script>

<style></style>