<template>
    <div class="main container gap-3 my-3">
        <div class="box-title">
            <h1>
                Bài viết AHIHIHIHIHIHIHIHIHIHIHI
            </h1>
        </div>
        <article class="box-new-blogs">
            <div class="d-flex flex-column gap-4">
                <h5 class="fw-bold text-muted small text-uppercase">Bài viết liên quan</h5>
                <a href="#" class="text-decoration-none group">
                    <img src="https://placehold.co/400x250" class="img-fluid rounded-3 mb-2" alt="post">
                    <p class="text-primary fw-semibold small mb-1">Ten Nguoi dung • 19 Jan 2025</p>
                    <h6 class="fw-bold text-dark">Đặt nội dung ở đây</h6>
                </a>

                <a href="#" class="text-decoration-none group">
                    <img src="https://placehold.co/400x250" class="img-fluid rounded-3 mb-2" alt="post">
                    <p class="text-primary fw-semibold small mb-1">Ten Nguoi dung • 19 Jan 2025</p>
                    <h6 class="fw-bold text-dark">Đặt nội dung ở đây</h6>
                </a>
            </div>
        </article>

        <div class="box-content">
            <div class="row g-4">
                <div class="col-12 mb-4">
                    <div class="card border-0 shadow-none bg-transparent">
                        <img src="https://placehold.co/800x450" class="card-img-top rounded-4" alt="Main post">
                        <div class="card-body px-0">
                            <p class="text-primary fw-semibold mb-2">Olivia Rhye • 20 Jan 2024</p>
                            <div class="d-flex justify-content-between">
                                <h2 class="fw-bold">Conversations with London Makr & Co.</h2>
                                <i class="bi bi-arrow-up-right fs-3"></i>
                            </div>
                            <p class="text-muted">We sat down with London's fast-growing brand and product design
                                studio...</p>
                            <div class="d-flex gap-2">
                                <span class="badge rounded-pill border text-dark fw-normal px-3 py-2">Design</span>
                                <span class="badge rounded-pill border text-dark fw-normal px-3 py-2">Research</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 mb-4">
                    <img src="https://placehold.co/400x250" class="img-fluid rounded-3 mb-3" alt="post">
                    <p class="text-primary fw-semibold small mb-1">Alec Whitten • 17 Jan 2024</p>
                    <h5 class="fw-bold h6">A Continually Unfolding History</h5>
                    <div class="badge rounded-pill border text-dark fw-normal">Architecture</div>
                </div>
                <div class="col-md-6 mb-4">
                    <img src="https://placehold.co/400x250" class="img-fluid rounded-3 mb-3" alt="post">
                    <p class="text-primary fw-semibold small mb-1">Demi Wilkinson • 16 Jan 2024</p>
                    <h5 class="fw-bold h6">Cognitive Dissonance Theory</h5>
                    <div class="badge rounded-pill border text-dark fw-normal">Product</div>
                </div>
            </div>

            <nav class="mt-5 pt-4 border-top">
                <ul class="pagination justify-content-between align-items-center">
                    <li class="page-item"><a class="page-link border-0 text-muted small" href="#"><i
                                class="bi bi-arrow-left me-2"></i>Previous</a></li>
                    <div class="d-none d-md-flex gap-1">
                        <li class="page-item active"><a
                                class="page-link rounded-3 border-0 bg-dark text-white shadow-none" href="#">1</a></li>
                        <li class="page-item"><a class="page-link border-0 text-muted" href="#">2</a></li>
                        <li class="page-item"><a class="page-link border-0 text-muted" href="#">3</a></li>
                    </div>
                    <li class="page-item"><a class="page-link border-0 text-muted small" href="#">Next<i
                                class="bi bi-arrow-right ms-2"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style>
.main {
    grid-area: main;
}

.box-title {
    grid-area: title;
}

.box-new-blogs {
    grid-area: blogs;
}

.box-content {
    grid-area: content;
}

@media (min-width: 768px) {
    .main {
        display: grid;
        grid-template-areas:
            "title"
            "blogs"
            "content";
        grid-template-rows: auto auto 1fr;
        gap: inherit;
    }
}

@media (min-width: 992px) {
    .main {
        grid-template-areas:
            "title blogs"
            "content blogs";
        grid-template-rows: auto 1fr;
        grid-template-columns: 4fr 1fr;
    }
}
</style>