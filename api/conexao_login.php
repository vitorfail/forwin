<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    
    session_start();
    include('conexao_primaria.php');
    if(empty($_POST['usuario']) || empty($_POST['senha'])) {
        header('Location: ../index.php');
        exit();
    }
    $usuario = preg_replace('/[^[:alpha:]_]/', '',$_POST['usuario']);
    $senha = md5( $_POST['senha']);

    $query = "SELECT usuario, id, senha from user where usuario = '$usuario' and senha ='$senha'";
    $pesquisa = $conexao->query($query);
    $row_usuario = $pesquisa->fetchAll();
    if(count($row_usuario) > 0){
        foreach($row_usuario as $row){
            $_SESSION['usuario'] = $usuario;
            $_SESSION['USER'] = $usuario . '_' . $row['id'];
            $_SESSION['SENHA'] = $row['senha'];
        }
	    header('Location: ../home.php');
	    exit();
    }
    else{
        $_SESSION['nao_autenticado'] = true;
	    header('Location: ../index.php');
	    exit();
    }
?>