<?php
    namespace Map\Http\Controllers;
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
    header("Access-Control-Allow-Headers: *");

    class AniversariantesController{
        public function pesquisa(){
            if(AuthController::checkAuth()){
                try{
                    $dados_de_usuario_sql = AuthController::dados_de_sql(); 
                    include_once('conexao.php');
                    $data = strval(date('Y/m/d'));
                    $data_formatada = str_replace('/', '-', $data);
                    $sql = "SELECT * FROM clientes_".$dados_de_usuario_sql->name."_".$dados_de_usuario_sql->id." WHERE data_nascimento = '$data_formatada'";
                    $pesquisa = $conexao->query($sql);
                    $row_usuario = $pesquisa->fetchAll();
                    $array = array();
                    $id = array();
                    $nome = array();
                    $tel = array();
                    $email = array();
                    $data = array();
                    $genero = array();
                    $conexao =null;
                    if(count($row_usuario)> 0){
                        foreach ($row_usuario as $row) {
                            array_push($id, $row['id']);
                            array_push($nome, $row['nome']);
                            array_push($email, $row['email']);
                            array_push($tel, $row['telefone']);
                            array_push($genero, $row['genero']);
                            array_push($data, $row['data_nascimento']);                
                        }
                        array_push($array, $id, $nome, $email, $tel, $genero ,$data);            
                        return $array;
                    }
                    else{
                        return "Nenhum";
                    }
                }
                catch(Exception $e){
                    return "1";
                }            
            }
            else{
                return 'Usuário não autenticado';
            }
        }
    }
?>