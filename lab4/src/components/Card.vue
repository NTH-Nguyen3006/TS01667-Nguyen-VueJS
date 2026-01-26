<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>

        <button class="btn btn-primary" @click="() => { show = !show }">
            {{ show ? "hide" : "show" }}
        </button>

        <br>
        <div class="row row-cols-3" v-show="show">
            <div class="col">
                <div class="card">
                    <img :src="users[0].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ users[0].title }}</h3>
                        <p class="card-text">{{ users[0].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img :src="users[1].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ users[1].title }}</h3>
                        <p class="card-text">{{ users[1].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img :src="users[2].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ users[2].title }}</h3>
                        <p class="card-text">{{ users[2].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '../assets/images/dau.jpg'
import img2 from '../assets/images/gia-vi.jpg'
import img3 from '../assets/images/rau-cu.jpg'

const show = ref(true);

const users = [
    {
        title: "Khám phá Công nghệ AI năm 2026",
        content: "Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc và sáng tạo mỗi ngày với những bước tiến vượt bậc.",
        image: img1
    },
    {
        title: "Du lịch bền vững lên ngôi",
        content: "Xu hướng du lịch thân thiện với môi trường đang trở thành lựa chọn hàng đầu của giới trẻ trong năm nay.",
        image: img2
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: img3
    }
];
</script>