<?php
    namespace Map\Http\Controllers;
    require_once('conexao_login.php');
    
    private function Check_user($user, $password){
        $sql = "SELECT id FROM user WHERE";
    }
    class AuthController{
        public function login(){
            
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



?>