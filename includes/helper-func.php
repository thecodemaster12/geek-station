<?php
include 'db-con.php';

// function isNotAdmin($adminEmail, $conn) {
//     $sql = "SELECT * FROM admins WHERE admin_email = '$adminEmail'";
//     $result = mysqli_query($conn, $sql);
//     if(mysqli_num_rows($result) > 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }


// function isAdminPassWrong($adminEmail, $adminPass, $conn) {
//     $sql = "SELECT admin_id FROM admins WHERE admin_email = '$adminEmail'";
//     $result = mysqli_query($conn, $sql);
//     if(mysqli_num_rows($result) > 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

function isAdmin($adminEmail, $adminPass, $conn) {
    $sql = "SELECT * FROM admins WHERE admin_email = '$adminEmail' AND admin_pass = '$adminPass'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0) {
        return false;
    }
    else {
        return true;
    }
}


function getAdminId($adminEmail, $conn) {
    $sql = "SELECT admin_id FROM admins WHERE admin_email = '$adminEmail'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    return $row['admin_id'];
}

function getUserPass($userEmail, $conn) {
    $sql = "SELECT user_pass FROM users WHERE user_email = '$userEmail'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    return $row['user_pass'];
}

function userAlreadyExist($userEmail, $conn) {
    $sql = "SELECT * FROM users WHERE user_email = '$userEmail'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function createNewUser($userName, $userEmail, $userPass, $conn) {
    $sql = "INSERT INTO users (user_name, user_email, user_pass) VALUES ('$userName', '$userEmail', '$userPass')";
    $result = mysqli_query($conn, $sql);
}

function getUserId($userEmail, $conn) {
    $sql = "SELECT user_id FROM users WHERE user_email = '$userEmail'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    return $row['user_id'];
}

function getUserInfo($userId, $conn) {
    $sql = "SELECT * FROM users WHERE user_id = '$userId'";
    $result = mysqli_query($conn, $sql);
    return $result;
}