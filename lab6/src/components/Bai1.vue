<template>
    <div class="container mt-4 p-3 border">
        <h3>Nhập điểm của bạn:</h3>
        <input type="number" v-model.number="score" class="form-control mb-2" placeholder="Nhập điểm">

        <div v-if="score != 0">
            <p v-if="score < 5">Yếu</p>
            <p v-else-if="score < 6.5">Trung bình</p>
            <p v-else-if="score < 8.0">Khá</p>
            <p v-else-if="score < 9.0">Giỏi</p>
            <p v-else-if="score <= 10">Xuất sắc</p>
            <p v-else>Điểm không hợp lệ!</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(0);
</script>