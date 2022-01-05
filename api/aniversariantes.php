<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    include_once('conexao.php');
    try{
        $data = strval(date('Y/m/d'));
        $data_formatada = str_replace('/', '-', $data);
        $sql = "SELECT * FROM clientes_joao_3 WHERE data_nascimento = '$data_formatada'";
        $pesquisa = $conexao->query($sql);
        $row_usuario = $pesquisa->fetchAll();
        $array = array();
        $id = array();
        $nome = array();
        $tel = array();
        $email = array();
        $data = array();
        $genero = array();
        $conexao =null;
        if(count($row_usuario)> 0){
            foreach ($row_usuario as $row) {
                array_push($id, $row['id']);
                array_push($nome, $row['nome']);
                array_push($email, $row['email']);
                array_push($tel, $row['telefone']);
                array_push($genero, $row['genero']);
                array_push($data, $row['data_nascimento']);                
            }
            array_push($array, $id, $nome, $email, $tel, $genero ,$data);

            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo "Nenhum";
        }
    }
    catch(Exception $e){
        echo "1";
    }
?>