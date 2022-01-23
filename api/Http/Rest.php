<?php
    namespace Map\Http;

    class Rest{
        private $request;
        private $class;
        private $method;
        private $params = array();

        public function __constructor($req){
            $this->request = $req;
            $this->load();
        }
        public function load(){
            $newURL = explode('/', $this->request['url']);
            array_shift($newURL); 
            if(isset($newURL[0])){
                $this->class = ucfirst($newURL[0]).'Controller';
                array_shift($newURL);
                return ucfirst($newURL).'Controller';
                if(isset($newURL[0])){
                    $this->method = $newURL[0];
                    array_shift($newURL);
                    if(isset($newURL[0])){
                        $this->params = $newURL;
                    } 
                }
            }
        }
        public function run(){
            if(class_exists('\Map\Http\Controllers\\'.$this->class) && method_exists('\Map\Http\Controllers\\'. $this->class, $this->method)){
                try{
                    $controll = '\Map\Http\Controllers\\'.$this->class;
                    $response = call_user_func_array(array(new $controll, $this->method), $this->params);
                    return json_encode(array('data' => $response, 'status' => 'sucess'), JSON_UNESCAPED_UNICODE);
                }
                catch(\Exception $e){
                    return json_encode(array('data' => $e->getMessage(), 'status' => 'error'), JSON_UNESCAPED_UNICODE);
                }
            }
            else{
                return json_encode(array('data' => 'Operação inválida', 'status' => 'error'), JSON_UNESCAPED_UNICODE);
            }
        }
    }
?>