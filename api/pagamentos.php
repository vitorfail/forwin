<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    $id = preg_replace('/[^[:alnum:]_]/', '',$_POST['id']);
    try{
        include('conexao.php');
        $sql = "SELECT * from pagamentos_{$_SESSION['USER']} where id_cliente ='$id'";
        $resultado = $conexao->query($sql);
        $pesquisa = $resultado->fetchAll();
        $nome = array();
        $data = array();
        $valor = array();
        $tipo = array();
        $procedimento = array();
        $array = array();


        $sql2 = "SELECT id, valor FROM `acumulado_{$_SESSION['USER']}`";
        $resultado2 = $conexao->query($sql2);
        $pesquisa2 = $resultado2->fetchAll();
        $rank = 0;
        $ranking = array();
        $acumulado = 0;

        foreach($pesquisa2 as $row){
            array_push($ranking , $row['valor']);
            if($row['id'] ==$id){
                $acumulado = $row['valor'];
            }
        }
        rsort($ranking);
        if(array_search($acumulado, $ranking) == false){
            $rank =0;
        }
        if(array_search($acumulado, $ranking) == 0){
            $rank =1;
        }
        else{
            $rank = array_search($acumulado, $ranking) +1;
        }
    


        $conexao = null;
        if( count($pesquisa) > 0){
            foreach($pesquisa as $row){
                array_push($nome, $row['nome']);
                array_push($data, $row['data']);
                array_push($valor, $row['valor']);
                array_push($tipo, $row['tipo']);
                if($row['procedimento'] == null){
                    array_push($procedimento, 'Não identificado');
                }
                else{
                    array_push($procedimento, $row['procedimento']);
                }

            }
            array_push($array, $nome, $data, $valor, $tipo, $procedimento, $rank);
            $array_encode = json_encode($array, JSON_UNESCAPED_UNICODE);
            echo $array_encode;
        }
        else{
            echo 'B';
        }
    }
    catch(Exception $ex){
        $conexao = null;
        echo '2';
    }

?>