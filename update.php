<?php
include_once('koneksi.php');

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

// update data berdasarkan id
$query = "UPDATE users SET name='{$name}', email='{$email}', mobile='{$mobile}' WHERE id={$id}";
$mysqli->query($query);

// Tampilkan hasil kedalam format JSON
header('Content-Type: application/json');
echo json_encode(['message' => 'success']);