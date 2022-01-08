<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
  header("Access-Control-Allow-Headers: *");
  $_POST = json_decode(file_get_contents("php://input"),true);

	include('conexao.php');
	if( $_POST['passe'] == 'visita'){
    	try{
          	$sql = "SELECT nome, visitas from acumulado_joao_3 ORDER BY visitas DESC LIMIT 5";
         	$pesquisa_id = $conexao->query($sql);
          	$visitantes = $pesquisa_id->fetchAll();
          	$array= array();
          	$nome = array();
          	$visitas = array();
            $conexao = null;
            if(count($visitantes) > 0){
              foreach($visitantes as $row){
              	array_push($nome, $row['nome']);
              	array_push($visitas, $row['visitas']);
              }
              array_push($array, $nome, $visitas);
              echo json_encode($array);
            }
            else{
                echo '1';
            }
        }
      	catch(Exception $ex){
      		echo '2';
        } 
    }
	if( $_POST['passe'] == 'pagamento'){
    	try{
          $sql = "SELECT * from acumulado_joao_3 order by valor DESC LIMIT 5";
          $pesquisa = $conexao->query($sql);
          $resultado = $pesquisa->fetchAll();
          $nome = array();
          $valor = array();
          $array = array();
          $conexao = null;
          if(count($resultado) > 0){
            foreach ($resultado as $row){
            	array_push($nome, $row['nome']);
              array_push($valor, $row['valor']);
            }
            array_push($array, $nome, $valor);
            echo json_encode($array);
          }
          else{
              echo '1';
          }
      	}
        catch(Exception $e){
            echo '2';
        }
    }
?>