<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    include('conexao.php');
    try{
        $sql = "SELECT count(id) FROM clientes_joao_3";
        $pesquisar = $conexao->query($sql);
        $numero = $pesquisar->fetch();
        $indicador = $numero['count(id)'];
        $conexao =null;
        echo $indicador;

    }
    catch(Exception $ex){
        echo "Nenhum";
    }
?>