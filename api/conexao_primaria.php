<?php
    $hotname = "localhost";
    $user = "root";
    $password = "";
    $database = "users";

    $conexao = new PDO("mysql:host=$hotname;dbname=$database;charset=utf8", $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_EMULATE_PREPARES => false, 
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    if(!$conexao){
        print("Falha na conexão com banco de dados");
    }
?>