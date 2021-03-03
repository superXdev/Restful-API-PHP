<?php
include_once('koneksi.php');

$id = $_POST['id'];
// hapus berdasarkan id
$mysqli->query("DELETE FROM users WHERE id={$id}");

// Tampilkan hasil kedalam format JSON
header('Content-Type: application/json');
echo json_encode(['message' => 'success']);