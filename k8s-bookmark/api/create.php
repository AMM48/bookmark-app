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
$conn = $db->writer_connect();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $link = $data->link;
    if (strpos($link, 'http://') === false && strpos($link, 'https://') === false) {
        $link = "https://" . $link;
    }

    $sql = "INSERT INTO bookmarks (title, link, date_added) VALUES (:title, :link, NOW())";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':title', $data->title);
    $stmt->bindParam(':link', $link);
    try {
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => "Website Added Successfully"]);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Error: Something Happened, Who Knows What!"]);
    }
}
