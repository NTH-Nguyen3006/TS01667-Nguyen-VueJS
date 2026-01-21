<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[0].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[0].title }}</h3>
                        <p class="card-text">{{ items[0].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[1].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[1].title }}</h3>
                        <p class="card-text">{{ items[1].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <img :src="items[2].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[2].title }}</h3>
                        <p class="card-text">{{ items[2].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

const users = [
    {
        title: "Khám phá Công nghệ AI năm 2026",
        content: "Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc và sáng tạo mỗi ngày với những bước tiến vượt bậc.",
        image: "https://example.com/images/ai-tech-2026.jpg"
    },
    {
        title: "Du lịch bền vững lên ngôi",
        content: "Xu hướng du lịch thân thiện với môi trường đang trở thành lựa chọn hàng đầu của giới trẻ trong năm nay.",
        image: "https://example.com/images/sustainable-travel.jpg"
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: "https://example.com/images/healthy-lifestyle.jpg"
    }
];

</script>

<style lang="">

                        </style>
