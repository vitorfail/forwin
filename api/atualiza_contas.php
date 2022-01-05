<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    
    include('conexao.php');
    try{
        $array = array();
        $conta = array();
        $valor = array();
        $data = array();
        $id = array();
        $situacao = array();
        $tipo = array();
        $sql = "SELECT * from contas_joao_3";
        $contas = $conexao->query($sql);
        $puxar = $contas->fetchAll();
        $conexao = null;
        $validade = array();
        $_POST = json_decode(file_get_contents("php://input"),true);
        if( count($puxar)>0){
            foreach($puxar as $row){
                $data_formatada = explode('-' ,$row['data']);
                if(sizeof($data_formatada) == 3){
                    if($data_formatada[1] == $_POST['mes_query']){
                        $diferenca = floor((strtotime($row['data']) - strtotime($_POST['dat']) )  / (60 * 60 * 24)) ;
                        array_push($id, $row['id']);
                        array_push($conta, $row['conta']);
                        array_push($valor, $row['valor']);
                        array_push($data, $row['data']);
                        array_push($situacao, $row['situacao']);
                        array_push($tipo, $row['tipo']);
                        array_push($validade, $diferenca); 
                    }
                }           
            }
            array_push($array, $id, $conta, $valor, $data , $situacao, $tipo, $validade);
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo '1';
        }
    }
    catch(Exception $ex){
        echo '2';
    }
?>