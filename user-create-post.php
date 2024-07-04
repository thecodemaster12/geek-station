<?php
include './includes/user-header.php';
?>

<div class="page-content">
    <div class="container">
        <div class="row">
            <!-- User Posts -->
            <div class="col-10">
                <div class="card">
                    <div class="card-body">
                        <form action="" method="post">
                            <div class="mb-3">
                                <label>Post Title</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label>Post Details</label>
                                <div>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Post Category</label>
                                <div>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected="">Chose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label>Post Banner</label> <br>
                                <!-- <input type="text" class="form-control" placeholder="Post Title"/> -->
                                <input type="file" name="" id="">
                            </div>
                            <div class="mb-0">
                                <div>
                                    <button type="submit" class="btn btn-primary waves-effect waves-light me-1">
                                        Submit
                                    </button>
                                    <button type="reset" class="btn btn-secondary waves-effect">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- User Actions -->
            <div class="col-2">
                <?php
                    include 'includes/user-nav.php';
                ?>
            </div>
        </div>
    </div> <!-- container-fluid -->
</div>
<!-- End Page-content -->

<?php
include './includes/user-footer.php';
?>