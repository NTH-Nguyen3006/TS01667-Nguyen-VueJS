<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow rounded-bottom-5">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">
                    <img src="/src/assets/logo_poly.png" width="100" alt="Logo Poly">
                </RouterLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/">Trang Chủ</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/list-article">Danh Sách Bài Viết
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/post-article">
                                Thêm Bài Viết
                            </RouterLink>
                        </li>
                    </ul>


                    <ul v-if="!authState.isLoggedIn" class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/login">Đăng nhập</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/register">Đăng Ký</RouterLink>
                        </li>
                    </ul>
                    <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/profile">
                                Hi, {{ authState.user.fullname }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { authState } from '../../auth';

</script>

<style scoped>
.navbar {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link.active {
    font-weight: bold;
    color: #f05123 !important;
}
</style>