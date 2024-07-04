<?php
session_start();
include 'helper-func.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $userName = htmlspecialchars($_POST['userName']);
    $userEmail = htmlspecialchars($_POST['userEmail']);
    $userPass = htmlspecialchars($_POST['userPass']);
    $conPass = htmlspecialchars($_POST['conPass']);

    if (empty($userName) || empty($userEmail) || empty($userPass) || empty($conPass)) {
        $_SESSION['reg-error'] = "Fill out all the field";
        header('location: ../user-registration.php');
        exit();
    }

    if (userAlreadyExist($userEmail, $conn)) {
        $_SESSION['reg-error'] = "User Already Exist";
        header('location: ../user-registration.php');
        exit();
    }

    if ($userPass != $conPass) {
        $_SESSION['reg-error'] = "Password didn't match";
        header('location: ../user-registration.php');
        exit();
    }

    $userPass = password_hash($conPass, PASSWORD_DEFAULT);

    createNewUser($userName, $userEmail, $userPass, $conn);
    $_SESSION['user'] = getUserId($userEmail, $conn);
    header('location: ../user-dashboard.php');
}