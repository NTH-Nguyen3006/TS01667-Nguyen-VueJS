<template>
    <div class="container my-3">
        <div class="row g-5">
            <div class="col-4 ">
                <div class="bg-light shadow-lg rounded-5 p-3">
                    <div class="header d-flex align-items-center">
                        <img class="rounded-circle shadow" src="https://placehold.co/80" width="80" alt="">

                        <div class="mx-3">
                            <h5 class="m-0">Name</h5>
                            <span class="text-secondary">email@gmail.com</span>
                        </div>
                    </div>
                    <hr class="mb-3">

                    <div class="list-group list-group-flush p-2">
                        <a href="#"
                            class="list-group-item  list-group-item-action border-0 rounded-3 d-flex align-items-center py-3">
                            <div class="text-secondary me-3"><i class="bi bi-person fs-4"></i></div>
                            <span class="flex-grow-1 fw-medium">My Profile</span>
                            <i class="bi bi-chevron-right text-muted"></i>
                        </a>

                        <a href="#"
                            class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3">
                            <div class="text-secondary me-3"><i class="bi bi-gear fs-4"></i></div>
                            <span class="flex-grow-1 fw-medium">Settings</span>
                            <i class="bi bi-chevron-right text-muted"></i>
                        </a>

                        <div class="dropdown dropend">
                            <a href="#" data-bs-toggle="dropdown" aria-expanded="false"
                                class="list-group-item list-group-item-action dropdown-toggle border-0 rounded-3 d-flex align-items-center py-3">
                                <div class="text-secondary me-3"><i class="bi bi-bell fs-4"></i></div>
                                <span class="flex-grow-1 fw-medium">Thông báo</span>
                                <span class="text-muted small">Cho phép</span>
                            </a>

                            <ul class="dropdown-menu mb-0 py-2">
                                <li class="px-3 py-1 hover-bg-light">
                                    <a href="#" class="dropdown-item">Cho phép</a>
                                </li>
                                <li class="px-3 py-1 hover-bg-light">
                                    <a href="#" class="dropdown-item">Chặn</a>
                                </li>
                            </ul>
                        </div>

                        <a href="#"
                            class="list-group-item list-group-item-action border-0 rounded-3 d-flex align-items-center py-3 text-danger">
                            <div class="me-3"><i class="bi bi-box-arrow-right fs-4"></i></div>
                            <span class="flex-grow-1 fw-medium text-dark">Log Out</span>
                        </a>

                    </div>
                </div>
            </div>
            <div class="col-8 ">
                <div class="bg-light rounded-5 p-5">
                    <div class="header d-flex align-items-center ">
                        <img class="rounded-circle shadow "
                            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/547645434_1503444727749236_2566166377190540803_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEoWwzp4ZcL6kNIdzTcIO5pgwsgIraYb4yDCyAitphvjEnSUfX3u4htOopJPIx8PS0JuyIt2I6wZBJCLlgeZhIr&_nc_ohc=blSHiQgFo8cQ7kNvwGiXw32&_nc_oc=AdmuYAFOnhfkSEXAkPseqh1QcwD6mR3flVJ0rIMTiWRKoc6tXnW3qxkHRAz-ZmrHfPA&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=OWCL9nZMsrvt1xTRmllwzA&oh=00_AfpaNYSNpaGfqEbILhsAq5LZtZLq1Ofg7Z-bW07TzRo61g&oe=6976E273"
                            width="80" alt="">

                        <div class="mx-3">
                            <h5 class="m-0">Name</h5>
                            <span class="text-secondary">email@gmail.com</span>
                        </div>
                    </div>
                    <hr class="mb-3">

                    <div class="mb-4 bg-light">
                        <div
                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3 border-bottom">
                            <span class="text-dark fw-medium">Name</span>
                            <span class="text-secondary">your name</span>
                        </div>
                        <div
                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3 border-bottom">
                            <span class="text-dark fw-medium">Email account</span>
                            <span class="text-secondary">yourname@gmail.com</span>
                        </div>
                        <div
                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3 border-bottom">
                            <span class="text-dark fw-medium">Mobile number</span>
                            <span class="text-secondary text-muted">Add number</span>
                        </div>
                        <div
                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3 border-0">
                            <span class="text-dark fw-medium">Location</span>
                            <span class="text-secondary">USA</span>
                        </div>
                    </div>

                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary px-4 py-2 fw-semibold rounded-3" type="button"
                            style="background-color: #3b91ff; border: none;">
                            Chỉnh sửa
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style>
body {
    background-image: url('/src/assets/pexels-jplenio-1103970.jpg');
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    place-items: unset;
}

.bd-links-link {
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: 1.125rem;
    color: var(--bs-body-color);
    text-decoration: none;
}

.bd-links-link.active {
    color: var(--bs-emphasis-color);
    background-color: blanchedalmond;
}
</style>