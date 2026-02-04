import { reactive } from "vue";

export const posts = reactive([
    {
        id: 1,
        title: 'Hành trình học thiết kế UI/UX ở tuổi 18',
        author: 'Hoàng Nguyên',
        date: '25 Jan 2025',
        category: 'Thiết kế',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
        description: 'Mình đã bắt đầu từ con số 0 như thế nào? Chia sẻ về những công cụ...',
        tags: ['Thiết kế', 'Học tập', 'Chia sẻ'],
        section: 'featured'
    },
    {
        id: 2,
        title: 'Kinh nghiệm nhận dự án Freelance đầu tay',
        author: 'Hoàng Nguyên',
        date: '22 Jan 2025',
        category: 'Công việc',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop',
        tags: ['Công việc', 'Kỹ năng'],
        section: 'featured-sub'
    },
    {
        id: 3,
        title: 'Chăm sóc sức khỏe cho lập trình viên trẻ',
        author: 'Hoàng Nguyên',
        date: '20 Jan 2025',
        category: 'Sức khỏe',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop',
        tags: ['Lối sống', 'Sức khỏe'],
        section: 'featured-sub'
    },
    {
        id: 4,
        title: 'Ứng dụng AI vào quy trình thiết kế hiện đại',
        author: 'Hoàng Nguyên',
        date: '15 Jan 2025',
        category: 'Công nghệ',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        description: 'Cách mình sử dụng ChatGPT và Midjourney để tối ưu hóa ý tưởng...',
        tags: ['Công nghệ', 'AI', 'Xu hướng'],
        section: 'project'
    },
    {
        id: 5,
        title: 'Build góc làm việc tối giản cho sinh viên IT',
        author: 'Hoàng Nguyên',
        date: '10 Jan 2025',
        category: 'Setup',
        image: 'https://images.unsplash.com/photo-1517336712612-4c998b8b09e0?q=80&w=500&auto=format&fit=crop',
        tags: ['Setup', 'Cảm hứng'],
        section: 'project-sub'
    },
    {
        id: 6,
        title: '5 Cuốn sách thay đổi tư duy thiết kế của mình',
        author: 'Hoàng Nguyên',
        date: '05 Jan 2025',
        category: 'Sách',
        image: 'https://images.unsplash.com/photo-1506784919141-105053748be4?q=80&w=500&auto=format&fit=crop',
        tags: ['Sách', 'Tư duy'],
        section: 'project-sub'
    },
]);