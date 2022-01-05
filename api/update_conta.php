<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");

    include('conexao.php');
    $_POST = json_decode(file_get_contents("php://input"),true);
    if($_POST['situacao'] == 'true'){
        try{
            $sql = "UPDATE  contas_joao_3  SET situacao = 'Pago' WHERE id = :id";
            $inserir = $conexao->prepare($sql);
          	$inserir->bindValue(':id', $_POST['id']);
            $inserir->execute();
            $conexao = null;
            echo '1';
        }
        catch(Exception $ex){
            echo '2';
        }
    }
    if($_POST['situacao'] == 'false'){
        try{
            $sql = "UPDATE  contas_joao_3  SET situacao = 'Aberto' WHERE id =:id";
            $inserir = $conexao->prepare($sql);
            $inserir->bindValue(':id', $_POST['id']);
            $inserir->execute();
            $conexao = null;
            echo '1';
        }
        catch(Exception $ex){
            echo '2';
        }
    }
?>