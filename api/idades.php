<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");

    include_once('conexao.php');
    try{
        $data = strval(date('Y/m/d'));
        $data_formatada = strtotime(str_replace('/', '-', $data));
        $sql = "SELECT data_nascimento FROM clientes_joao_3";
        $pesquisa = $conexao->query($sql);
        $row_usuario = $pesquisa->fetchAll();
        $array = array();
        $conexao =null;
        if(count($row_usuario)> 0){
            foreach ($row_usuario as $row) {
                $data_nascimento = strtotime($row['data_nascimento']);
                $dias = ($data_formatada - $data_nascimento)/ 86400;
                if($dias <0){
                    $dias *= -1;
                }
                $dias = $dias/365;
                array_push($array, floor($dias));                  
            }

            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo "1";
        }
    }
    catch(Exception $e){
        echo "1";
    }
?>