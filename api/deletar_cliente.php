<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    $_POST = json_decode(file_get_contents("php://input"), true);
    include('conexao.php');
    try{
        $sql = "DELETE FROM clientes_joao_3 WHERE id=:id";
        $pesquisa = $conexao->prepare($sql);
        $pesquisa->execute(array(
            ':id' => $_POST['id'] 
        ));
        $conexao = null;
        echo '1';
        
    }
    catch(Execption $ex){
        $conexao = null;
        echo '2';
    }
?>