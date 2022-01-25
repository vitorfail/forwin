<?php
    namespace Map\Http\Controllers;
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    $_POST = json_decode(file_get_contents("php://input"), true);
    function Check_user($usuario, $senha){
        include_once("conexao.php");

        $sql = "SELECT id FROM user WHERE usuario=:usuario and senha=:senha ";
        $pesquisa = $conexao->prepare($sql);
        $pesquisa->execute(array(
            ':usuario'=> $usuario
            ,':senha' => $senha));
        $puxar= $pesquisa->fetchAll();
        $conexao = null;

        $array = array($usuario, $senha);
        if(count($puxar) >0 ){
            $array = array("não passou", "aqui");
            foreach($puxar as $row){
                array_push($array, $row['id']);
            }
        }
        return $array;
    }
    class AuthController{
        public function login(){
            if($_POST['user']){
                $resultado = Check_user($_POST['user'], md5($_POST['password']));
                return $resultado;
            }
            else{
                $key = 'KILLLAKILLERUIM';

                //Header Token
                $header = [
                    'typ' => 'JWT',
                    'alg' => 'HS256'
                ];
        
                //Payload - Content
                $payload = [
                    'name' => "Nomeusuario",
                    'email' => 'email@email.com',
                ];
        
                //JSON
                $header = json_encode($header);
                $payload = json_encode($payload);
        
                //Base 64
                $header = base64_encode($header);
                $payload = base64_encode($payload);
        
                //Sign
                $sign = hash_hmac('sha256', $header . "." . $payload, $key, true);
                $sign = base64_encode($sign);
        
                //Token
                $token = $header . '.' . $payload . '.' . $sign;
        
                return $token;    
            }
        }

    }
?>