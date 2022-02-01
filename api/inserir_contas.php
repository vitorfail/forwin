<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");

    $_POST= json_decode(file_get_contents('php://input'), true);
    include_once('conexao.php');
    try{
        $sql = "INSERT into contas_joao_3 (conta, data, valor , situacao, tipo) values ( :conta, :data, :valor, :situacao, :tipo )";
        $salvar = $conexao->prepare($sql);
      	$salvar->bindValue( ':conta', $_POST['conta']);
        $salvar->bindValue(':data', $_POST['vencimento']);
        $salvar->bindValue(':valor', $_POST['val']);
        $salvar->bindValue(':situacao', 'Aberto');
        $salvar->bindValue(':tipo', $_POST['tipo']);
        $salvar->execute();
        $conexao = null;    
        echo "1";
    }
    catch(Exception $ex){
        $conexao = null;  
        echo "2";
    }
?>