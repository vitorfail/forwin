<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    include('conexao.php');
    $nome = preg_replace('/[^[:alpha:]_]/', '', $_POST['nome']);
    $tema = preg_replace('/[^[:alpha:]_]/', '', $_POST['tema']);
    try{
        $sql = "UPDATE identificacao_{$_SESSION['USER']} SET nome = :nome, tema = :tema WHERE id =1";
        $inserir = $conexao->prepare($sql);
      	$inserir->bindValue(':nome', $nome);
      	$inserir->bindValue(':tema', $tema);
        $inserir->execute();
        $conexao = null;
        echo '1';
    }
    catch(Exception $ex){
        echo '2';
    }
?>