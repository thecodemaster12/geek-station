<?php
session_start();

include 'helper-func.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // Admin Login
    if (isset($_POST['admin'])) {
        $adminEmail = htmlspecialchars($_POST['adminEmail']);
        $adminPass = htmlspecialchars($_POST['adminPass']);

        // Check if empty inputs
        if (empty($adminEmail) || empty($adminPass)) {
            $_SESSION['login-error'] = "Email and Password Required";
            header('location: ../admin-login.php');
            exit();
        }

        // Advance Login
        // // Check if admin exist
        // if (isNotAdmin($adminEmail, $conn)) {
        //     $_SESSION['login-error'] = "Not Valid Admin";
        //     header('location: ../admin-login.php');
        //     exit();
        // }

        // // Check admin password
        // if (isAdminPassWrong($adminEmail, $adminPass, $conn)) {
        //     $_SESSION['login-error'] = "Invalid Password";
        //     header('location: ../admin-login.php');
        //     exit();
        // }

        // Normal Login
        if (isAdmin($adminEmail, $adminPass, $conn)) {
            $_SESSION['login-error'] = "Invalid Email/Pass";
            header('location: ../admin-login.php');
            exit();
        }
        else {
            $_SESSION['admin'] = getAdminId($adminEmail, $conn);
            // $_SESSION['admin'] = 12;
            header('location: ../admin-dashboard.php');
        }



    }

    // User Login
    if (isset($_POST['user-login'])) {
        $userEmail = htmlspecialchars($_POST['userEmail']);
        $userPass = htmlspecialchars($_POST['userPass']);

        // Check if empty inputs
        if (empty($userEmail) || empty($userPass)) {
            $_SESSION['login-error'] = "Email and Password Required";
            header('location: ../user-login.php');
            exit();
        }

        // Check if empty inputs
        if (!userAlreadyExist($userEmail, $conn)) {
            $_SESSION['login-error'] = "User Not Found";
            header('location: ../user-login.php');
            exit();
        }

        $dbPass = getUserPass($userEmail, $conn);

        if (!password_verify($userPass, $dbPass)) {
            $_SESSION['login-error'] = "Invalid Password";
            header('location: ../user-login.php');
            exit();
        }

        $_SESSION['user'] = getUserId($userEmail, $conn);
        header('location: ../user-dashboard.php');
    }
}