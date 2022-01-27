<?php

    session_start();
    $nome = $_GET['c-pesquisa'];
    $_SESSION['pesquisa'] = $nome;
    header("location: ../../pesquisa_resultados.php?nome=$nome"); 

?>