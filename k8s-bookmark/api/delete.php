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

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    // Delete the record with the specified name and number
    $sql = "DELETE FROM bookmarks WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $data->id);

    try {
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            echo json_encode(['success' => true, 'message' => "Bookmark Deleted Successfully"]);
        } else {
            echo json_encode(['success' => false, 'message' => "Error: Record Not Found"]);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Error: Something Happened, Who Knows What!"]);
    }
}

