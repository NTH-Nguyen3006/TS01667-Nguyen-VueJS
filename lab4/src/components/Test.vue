<template>
    <div>
        <h1>Kiểm tra tuổi thọ</h1>
        <input type="number" v-model="year">
        <p>Năm: {{ year }}</p>
        <p>Tuổi: {{ age() }}</p>
        <p>Phân loại: {{ phanloai() }}</p>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const year = ref(0);

const age = () => year.value === 0 ? 0 : 2026 - year.value;

const phanloai = () => {
    console.log(age() || "");

    if (age() == 0) return "";

    if (age() < 18) return "Thiếu niên"
    else if (age() < 55) return "Thanh niên"
    else return "Người già";
};

</script>
