<?php

class Database
{
    private $write_host;
    private $read_host;
    private $db_name;
    private $username;
    private $password;
    private $conn;

    public function __construct() {
        $this->write_host = getenv("HOST");
        $this->read_host = getenv("READ_HOST");
        $this->db_name = getenv("DB_NAME");
        $this->username = getenv("USERNAME");
        $this->password = getenv("PASSWORD");
    }

    public function writer_connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                'mysql:host=' . $this->write_host . ';dbname=' . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error ' . $e->getMessage();
        }

        return $this->conn;
    }

    public function reader_connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                'mysql:host=' . $this->read_host . ';dbname=' . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error ' . $e->getMessage();
        }

        return $this->conn;
    }
}

