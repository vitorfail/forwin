<?php
    namespace Map\Http\Controllers;
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");
    $_POST = json_decode(file_get_contents("php://input"), true);
    function Check_user($usuario, $senha){
        include_once("login_conect.php");

        $sql = "SELECT id FROM user WHERE usuario=:usuario and senha=:senha ";
        $pesquisa = $conexao->prepare($sql);
        $pesquisa->execute(array(
            ':usuario'=> $usuario
            ,':senha' => $senha));
        $puxar= $pesquisa->fetchAll();
        $conexao = null;

        $id = null;
        $check = 0;
        if(count($puxar) >0 ){
            $check = 1;
            foreach($puxar as $row){
                $id= $row['id'];
            }
        }
        return array($check, $id);
    }
    class AuthController{
        public function login(){
            if(isset($_POST['user']) && isset($_POST['password'])){
                $resultado = Check_user($_POST['user'], md5($_POST['password']));

                if($resultado[0] >0){
                    $key = 'KILLLAKILLERUIM';
    
                    //Header Token
                    $header = [
                        'typ' => 'JWT',
                        'alg' => 'HS256'
                    ];
            
                    //Payload - Content
                    $payload = [
                        'id' => $resultado[1],
                        'name' => $_POST['user']
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
                else{
                    return 'Usuário não encontrado';
                }    
            }
            else{
                return 'Operação inválida';
            }
        }
        public function checkAuth(){
            
        }
    }
?>