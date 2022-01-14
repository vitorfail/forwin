<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    
    include('conexao.php');
    try{
        $array = array();
        $valor = array();
        $tipo = array();
        $sql = "SELECT * from contas_joao_3";
        $contas = $conexao->query($sql);
        $puxar = $contas->fetchAll();
        $conexao = null;
        $_POST = json_decode(file_get_contents("php://input"),true);
        if( count($puxar)>0){
            foreach($puxar as $row){
                $data_formatada = explode('-' ,$row['data']);
                if(sizeof($data_formatada) == 3){
                    if($data_formatada[1] == $_POST['mes'] && $data_formatada[0] == $_POST['ano']){
                        array_push($valor, $row['valor']);
                        array_push($tipo, $row['tipo']);
                    }
                }           
            }
            array_pus($array, $valor, $tipo);
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo '1';
        }
    }
    catch(Exception $ex){
        echo '1';
    }
?>