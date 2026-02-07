<template>
    <div>
        <h2>Chi tiết bài viết</h2>
        <p>Đang xem bài viết có ID: {{ $route.params.id }}</p>
        <button @click="$router.push({ name: 'BlogList' })">Quay lại danh sách</button>
    </div>
</template>