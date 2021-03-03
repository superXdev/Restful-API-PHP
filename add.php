<?php
include_once('koneksi.php');

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

// Masukkan user baru ke database
$mysqli->query("INSERT INTO users(name,email,mobile) VALUES('$name','$email','$mobile')");

// Tampilkan hasil kedalam format JSON
header('Content-Type: application/json');
echo json_encode(['message' => 'success']);