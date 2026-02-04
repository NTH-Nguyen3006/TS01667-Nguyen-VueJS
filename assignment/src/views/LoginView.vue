<template>
    <div class="container my-5">
        <div class="row login-container mx-auto g-0 shadow-lg rounded-5">
            <div class="col-lg-7 d-none d-lg-block image-side " place-self: center;>
                <img class="w-100 rounded-start-5" src="/src/assets/login-1.jpg" style="min-height: 100%;">
            </div>

            <div class="col-lg-5 px-5 d-flex flex-column" style="place-self: center;">
                <h2 class="fw-bold mb-5 mt-3">Đăng Nhập</h2>

                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label class="form-label small fw-bold text-muted mb-1">Tài khoản</label>
                        <input type="text" class="form-control rounded-5" v-model="dataa.emailOrUsername"
                            placeholder="Email hoặc số điện thọai">
                    </div>

                    <div class="mb-3">
                        <label class="form-label small fw-bold text-muted mb-1 ">Mật khẩu</label>
                        <div class="position-relative">
                            <input type="password" class="form-control rounded-5" v-model="dataa.password"
                                placeholder="Nhập password">
                            <i class="fa-regular fa-eye show-password-icon"></i>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-signin w-100 mb-3 rounded-5">Đăng nhập</button>

                    <div class="text-center mb-5">
                        <span class="small text-muted">Bạn chưa có tài khoản à?????</span>
                        <RouterLink to="/register" class="small text-decoration-none fw-bold ms-1"
                            style="color: #0d6efd;">
                            Đăng Ký
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue';
import { login } from '../auth';
import { useRouter } from 'vue-router';
import router from '../router/router';

// const router = useRouter();

const dataa = reactive({
    emailOrUsername: "",
    password: ""
});


const handleLogin = () => {
    if (dataa.emailOrUsername && dataa.password) {
        const status = login(dataa);
        if (status) router.push("/");
    } else {
        alert("Vui lòng nhập dữ liệu");
    }
}

</script>

<style scoped>
body {
    background-image: url('/src/assets/black-dunes-minimal-website-background-picjumbo-com.jpeg');
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    place-items: unset;
    display: flex;
}

main {
    height: auto;
}
</style>
