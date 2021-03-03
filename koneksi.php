<?php
/**
 * Pengaturan untuk koneksi ke database mysql
 */
 
$databaseHost = 'localhost';
$databaseName = 'restful_api';
$databaseUsername = 'root';
$databasePassword = '';
 
$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName); 
 
?>