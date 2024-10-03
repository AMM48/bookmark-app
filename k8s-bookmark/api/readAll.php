<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
include '../db/Database.php';
$db = new Database();
$conn = $db->reader_connect();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $sql = "SELECT * FROM bookmarks";
    $stmt = $conn->prepare($sql);

    try {
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $result]);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Error: Something Happened, Who Knows What!"]);
    }
}

