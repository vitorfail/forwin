<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    include('conexao.php');
    try{
        $sql = "DELETE FROM clientes_{$_SESSION['USER']} WHERE id=:id";
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