import { reactive } from "vue";

export const posts = reactive([
    {
        id: 1,
        title: 'Hành trình học thiết kế UI/UX ở tuổi 18',
        author: 'Hoàng Nguyên',
        date: '25/01/2026',
        category: 'Thiết kế',
        image: "/src/assets/b1.avif",
        description: 'Chia sẻ chi tiết về hành trình từ một người chưa biết gì đến khi làm chủ các công cụ thiết kế. Bài viết tập trung vào lộ trình tự học, những sai lầm thường gặp và cách mình xây dựng tư duy thẩm mỹ ngay từ con số 0.',
        tags: ['Thiết kế', 'Học tập', 'Chia sẻ'],
        section: 'featured'
    },
    {
        id: 2,
        title: 'Kinh nghiệm nhận dự án Freelance đầu tay',
        author: 'Hoàng Nguyên',
        date: '02/02/2026',
        category: 'Công việc',
        image: "/src/assets/b2.avif",
        description: 'Làm sao để thuyết phục khách hàng khi bạn chưa có nhiều sản phẩm trong Portfolio? Mình sẽ chia sẻ về cách viết CV, kỹ năng đàm phán giá cả và những bài học "xương máu" rút ra từ dự án thực tế đầu tiên.',
        tags: ['Công việc', 'Kỹ năng'],
        section: 'featured-sub'
    },
    {
        id: 3,
        title: 'Chăm sóc sức khỏe cho lập trình viên trẻ',
        author: 'Hoàng Nguyên',
        date: '20/01/2026',
        category: 'Sức khỏe',
        image: "/src/assets/b3.avif",
        description: 'Ngồi hàng giờ trước máy tính không chỉ gây mỏi mắt mà còn ảnh hưởng đến cột sống. Khám phá các bài tập giãn cơ nhanh, chế độ ăn uống cân bằng và cách thiết lập thời gian làm việc khoa học để duy trì năng lượng.',
        tags: ['Lối sống', 'Sức khỏe'],
        section: 'featured-sub'
    },
    {
        id: 4,
        title: 'Ứng dụng AI vào quy trình thiết kế hiện đại',
        author: 'Hoàng Nguyên',
        date: '15/01/2025',
        category: 'Công nghệ',
        image: "/src/assets/b4.avif",
        description: 'Trí tuệ nhân tạo đang thay đổi cách chúng ta sáng tạo. Tìm hiểu cách mình phối hợp ChatGPT để lên ý tưởng nội dung và Midjourney để tạo Moodboard, giúp tối ưu hóa 50% thời gian trong quy trình thiết kế UI/UX.',
        tags: ['Công nghệ', 'AI', 'Xu hướng'],
        section: 'project'
    },
    {
        id: 5,
        title: 'Build góc làm việc tối giản cho sinh viên IT',
        author: 'Hoàng Nguyên',
        date: '04/02/2026',
        category: 'Setup',
        image: "/src/assets/b5.jpg",
        description: 'Một không gian làm việc gọn gàng sẽ giúp tăng khả năng tập trung cao độ. Bài viết gợi ý danh sách các món đồ setup "ngon - bổ - rẻ" dành cho sinh viên, từ bàn ghế công thái học đến cách đi dây cáp cực gọn.',
        tags: ['Setup', 'Cảm hứng'],
        section: 'project-sub'
    },
    {
        id: 6,
        title: '5 Cuốn sách thay đổi tư duy thiết kế của mình',
        author: 'Hoàng Nguyên',
        date: '05/01/2025',
        category: 'Sách',
        image: "/src/assets/b6.webp",
        description: 'Không chỉ là lý thuyết suông, 5 cuốn sách này đã giúp mình định hình lại cách nhìn nhận về trải nghiệm người dùng và tư duy giải quyết vấn đề. Một danh sách không thể bỏ qua cho các Designer mới vào nghề.',
        tags: ['Sách', 'Tư duy'],
        section: 'project-sub'
    },
]);