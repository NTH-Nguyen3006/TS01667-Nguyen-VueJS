<template>
    <!-- Hiển thị lời chào -->
    <h1>{{ isgreeting ? "Hello, World" : "Ahihi" }}</h1>

    <button class="btn btn-primary" v-bind:title="buttonTitle" @click="this.isgreeting = !this.isgreeting;">
        Click để thay đổi
    </button>
</template>
<script>
export default {
    data() {
        return {
            isgreeting: true,
        };
    },
}
</script>