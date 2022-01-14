<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");

   include_once('conexao.php');
    try{
        $sql = "SELECT * FROM clientes_joao_3";
        $pesquisa = $conexao->query($sql);
        $row_usuario = $pesquisa->fetchAll();
        $array = array();
        
        if(count($row_usuario)> 0){
            foreach ($row_usuario as $row){
               array_push($array, $row['genero']);
            }
            $conexao = null;
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }

        else{
            $conexao = null;
            echo "1";
        } 
        
    }
    catch(Exception $ex){
        echo "1";
    }
