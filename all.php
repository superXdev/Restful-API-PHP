<?php
include_once('koneksi.php');

// ambil semua data user
$result = $mysqli->query("SELECT * FROM users");

// ubah hasil mysql kedalam array
$data = array();
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
	$data[] = $row;
}

// Tampilkan hasil kedalam format JSON
header('Content-Type: application/json');
echo json_encode($data);