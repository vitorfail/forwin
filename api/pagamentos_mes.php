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
        $data = array();
        $valor = array();
        $nome = array();
        $id_cliente= array();
        $tipo = array();
        $conexao =null;
        $_POST = json_decode(file_get_contents("php://input"),true);
        $row_mes ='';
        if(count($pesquisa) > 0 ){
            foreach($pesquisa as $row){
                $row_mes = explode('-',$row['data']);
                if(sizeof($row_mes) == 3 ){
                    if($row_mes[1] == $_POST['mes'] && $row_mes[0] == $_POST['ano']){
                        array_push($data, $row['data']);
                        array_push($valor, $row['valor']);
                        array_push($nome, $row['nome']);
                        array_push($id_cliente, $row['id_cliente']);
                        array_push($tipo, $row['tipo']);
                    }
                }
            }
            array_push($array, $data, $valor, $nome, $id_cliente, $tipo);
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