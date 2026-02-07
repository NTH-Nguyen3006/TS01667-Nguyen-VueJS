<template>
    <div>
        <h2>Trang cá nhân của tôi</h2>
        <nav>
            <router-link to="/profile/info">Thông tin cơ bản</router-link> |
            <router-link to="/profile/settings">Cài đặt</router-link>
        </nav>
        <hr />
        <router-view></router-view>
    </div>
</template>