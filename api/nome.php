<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    include('conexao.php');
    $sql = "SELECT nome, tema from identificacao_joao_3 WHERE id=1";
    $pesquisa = $conexao->query($sql);
    $resultado = $pesquisa->fetchAll();
    $nome = '';
    $tema = '';
    $array = array();
    $conexao = null;
    foreach($resultado as $row){
        $nome = $row['nome'];
        $tema = $row['tema'];
    }
    array_push($array, $nome, $tema);
    echo json_encode($array);
?>