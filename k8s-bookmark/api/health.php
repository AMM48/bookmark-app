<?php

ob_start();
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); 
    exit;
}
include '../db/Database.php';
$db = new Database();
$conn = $db->writer_connect();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
	if($conn != null) {
		http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Service is healthy']);
	} else {
		http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Service is unhealthy']);
		exit;
	}
}

ob_end_flush();