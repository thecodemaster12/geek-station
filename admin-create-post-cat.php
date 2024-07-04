<?php
    include 'includes/header.php';
?>

<div class="page-content">
    <div class="container-fluid">
        
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">Dashboard</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="<?php echo $_SERVER['PHP_SELF']?>">
                                <?php
                                    echo $company;
                                ?>
                            </a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <!-- Code Here -->

        <!-- Add Category Name -->
        <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form action="" method="post">
                        <div class="mb-3">
                            <label>Category Name</label>
                            <input type="text" class="form-control" />
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
        </div>

        <!-- Category List -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2 m-0">
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1 <a class='text-danger' href=""><i class="ri-delete-bin-2-line"></i></a></p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1dfdf</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itedfdfm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itdfem1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itefdfdfdfdm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1dfdf</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itedfdfm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itdfem1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itefdfdfdfdm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1dfdf</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itedfdfm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itdfem1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itefdfdfdfdm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1dfdf</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itedfdfm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itdfem1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itefdfdfdfdm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>item1dfdf</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itedfdfm1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itdfem1</p>
                            <p class='p-2 m-0 d-inline-block bg-secondary bg-opacity-25 text-black'>itefdfdfdfdm1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Code Here -->

    </div>
    
</div>
<!-- End Page-content -->

<?php
    include 'includes/footer.php';
?>