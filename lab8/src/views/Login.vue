<template>
    <div>
        <h2>Trang đăng nhập</h2>
        <button @click="handleLogin">Đăng nhập ngay</button>
    </div>
</template>

<script>
import { auth } from "../router/router";

export default {
    methods: {
        handleLogin() {
            auth.login(); // Giả lập đăng nhập thành công
            alert("Đăng nhập thành công!");
            // Điều hướng lập trình (Câu d)
            this.$router.push({ name: 'Dashboard' });
        }
    }
}
</script>