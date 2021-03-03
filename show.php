<?php
include_once('koneksi.php');

$id = $_GET['id'];

$result = $mysqli->query("SELECT * FROM users WHERE id = {$id}");

// Tampilkan hasil kedalam format JSON
header('Content-Type: application/json');
echo json_encode($result->fetch_assoc());