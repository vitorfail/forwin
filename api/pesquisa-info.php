<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    
   $id = preg_replace('/[^[:alnum:]_]/', '',$_POST['id']);
   include_once('conexao.php');
    try{
        $sql = "SELECT * FROM clientes_{$_SESSION['USER']} WHERE id = $id";
        $pesquisa = $conexao->query($sql);
        $row_usuario = $pesquisa->fetchAll();
        $array = array();
        $array_id = array();
        $array_nome = array();
        $array_data_nascimento = array();
        $array_cpf = array();
        $array_estado_civil = array();
        $array_genero = array();
        $array_uf = array();
        $array_endereco = array();
        $array_cidade = array();
        $array_telefone = array();
        $array_email = array();
        $array_notific = array();
        $conexao = null;
        if(count($row_usuario) > 0){
            foreach($row_usuario as $row){
                array_push($array_id, $row['id']);
               array_push($array_nome, $row['nome']);
               array_push($array_data_nascimento, $row['data_nascimento']);
               array_push($array_cpf, $row['cpf']);
               array_push($array_estado_civil, $row['estado_civil']);
               array_push($array_genero, $row['genero']);
               array_push($array_uf, $row['uf']);
               array_push($array_endereco, $row['endereco']);
               array_push($array_cidade, $row['cidade']);
               array_push($array_telefone, $row['telefone']);
               array_push($array_email, $row['email']);
               array_push($array_notific, $row['notific']);            
            }
            array_push($array, $array_id, $array_nome, $array_data_nascimento, $array_cpf, $array_estado_civil, $array_genero, $array_uf, $array_endereco, $array_cidade, $array_telefone, $array_email, $array_notific);
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;      
        }
        else{
            echo "2";
        }   
    }
    catch(Exception $ex){
        $conexao = null;
        echo "1";
    }

?>