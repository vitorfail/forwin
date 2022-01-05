<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    
    include('conexao.php');
    try{
        $sql = "SELECT * FROM clientes_joao_3 ORDER BY id DESC LIMIT 5" ;
        $salvar = $conexao->query( $sql);
        $pesquisa = $salvar->fetchAll();
        $array = array(); 
        $nome = array();
        $telefone = array();
        $genero = array();

        if(count($pesquisa) > 0){
            foreach($pesquisa as $row){
               array_push($nome, $row['nome']);
               array_push($telefone, $row['telefone']);
               array_push($genero, $row['genero']);            
            }
            $conexao=null;
            array_push($array, $nome, $telefone, $genero);
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            $conexao = null;
            echo "2";
        }
    }
    catch(Exception $ex){
        $conexao = null;
        echo "0";
    }
?>