<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: *");

    try{
        include_once('conexao.php');
        $sql = "SELECT * from pagamentos_joao_3";
        $resultado = $conexao->query($sql);
        $pesquisa = $resultado->fetchAll();
        $array = array();
        $conexao =null;
        if(count($pesquisa) > 0 ){
            foreach($pesquisa as $row){
                array_push($array, $row['tipo']);
            }
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo "1";
        }

    }
    catch(Exception $ex){
        $conexao =null;
        echo "2";   
    }
?>