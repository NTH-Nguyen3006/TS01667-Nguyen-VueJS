<template>

    <h2 class="">Tạo bài viết mới</h2>
    <div class="container-fluid">
        <input class="form-control mb-3" v-model="blog.title" placeholder="Tiêu đề bài viết">
        <input class="form-control mb-3" v-model="blog.author" placeholder="Tên tác giả">
        <textarea class="form-control mb-3" v-model="blog.content" placeholder="Nội dung bài viết"></textarea>
        <button class="btn btn-primary align-items-end" @click="submitEv">
            Đăng bài
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-post']);

const blog = ref({
    title: "",
    author: "",
    content: ""
});

function submitEv() {
    if (blog.value.title && blog.value.content && blog.value.author) {
        emit('add-post', blog.value);

        blog.value = {
            title: "",
            author: "",
            content: ""
        };
    }
}

</script>

<style></style>