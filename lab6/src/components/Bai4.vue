<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 border p-3">
                <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Họ tên:</label>
                        <input type="text" v-model="student.name" class="form-control" required
                            placeholder="Nhập họ tên">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Điểm:</label>
                        <input type="number" v-model.number="student.score" class="form-control" min="0" max="10"
                            required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngày sinh:</label>
                        <input type="date" v-model="student.dob" class="form-control" required>
                    </div>
                    <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
                        {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                    </button>
                    <button v-if="isEditing" type="button" @click="resetForm"
                        class="btn btn-secondary ms-2">Hủy</button>
                </form>
            </div>

            <div class="col-md-8 border p-3">
                <h3>Danh sách học sinh</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const students = ref([
    { name: 'Hoàng Nguyên', score: 9, dob: '2007-06-30' },
]);

const student = ref({ name: '', score: null, dob: '' });
const isEditing = ref(false);
const editingIndex = ref(null);

function submitForm() {
    if (isEditing.value) {
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        students.value.push({ ...student.value });
    }
    resetForm();
}

function editStudent(index) {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

function deleteStudent(index) {
    if (confirm('Bạn có chắc muốn xóa?')) {
        students.value.splice(index, 1);
    }
}

function resetForm() {
    student.value = { name: '', score: null, dob: '' };
    isEditing.value = false;
    editingIndex.value = null;
}
</script>