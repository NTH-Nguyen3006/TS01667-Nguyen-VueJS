<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm rounded-4 p-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h4 class="fw-bold mb-0">Tạo bài viết mới</h4>
                    <button type="button" class="btn-close shadow-none" aria-label="Close"></button>
                </div>

                <form>
                    <div class="mb-4">
                        <label for="postTitle" class="form-label fw-medium text-secondary">Tiêu đề</label>
                        <input type="text" class="form-control form-control-lg border-0 bg-light rounded-3 shadow-none"
                            id="postTitle" placeholder="Nhập tiêu đề ...">
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-medium text-secondary">Hình ảnh</label>
                        <div class="border border-2 border-dashed rounded-4 p-5 text-center bg-light position-relative"
                            style="border-style: dashed !important;">
                            <input type="file"
                                class="position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer"
                                id="postImage">
                            <i class="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                            <p class="mt-2 mb-0 small text-muted">Chọn hoặc thả ảnh</p>
                            <p class="extra-small text-muted" style="font-size: 0.7rem;">PNG, JPG, GIF (max.
                                800x400px)</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label class="form-label fw-medium text-secondary">Thư mục</label>
                            <select class="form-select border-0 bg-light rounded-3 shadow-none py-2">
                                <option selected>--- Chọn Thư mục ---</option>
                                <option value="1">Thiết kế</option>
                                <option value="2">Tìm kiếm</option>
                                <option value="3">Phóng Viên</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label class="form-label fw-medium text-secondary">Tác giả</label>
                            <div class="d-flex align-items-center bg-light p-1 rounded-3">
                                <img src="https://via.placeholder.com/32" class="rounded-circle me-2 ms-1" alt="avatar">
                                <span class="small fw-medium">Tên của bạn</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="postContent" class="form-label fw-medium text-secondary">Nội dung</label>
                        <textarea class="form-control border-0 bg-light rounded-3 shadow-none" id="postContent" rows="6"
                            placeholder="Write your story..."></textarea>
                    </div>

                    <div class="d-flex justify-content-end gap-3 pt-3 border-top">
                        <button type="button" class="btn btn-light px-4 rounded-3 fw-medium">Hủy</button>
                        <button type="submit" class="btn btn-primary px-4 rounded-3 fw-medium shadow-sm"
                            style="background-color: #2d8cf0;">Đăng bài</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>