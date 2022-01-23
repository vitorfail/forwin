<?php
    require_once('Http/Rest.php');
    require_once('Http/Controllers/UsersController.php');
    use Map\Http\Rest;

    if(isset($_GET) && !empty($_GET)){
        //$rest = new Rest($_REQUEST);
        //echo $rest->run();
        $req = explode('/', $_GET['url']);
        $class = ucfirst($req[0]).'Controller';
        array_shift($req);
        if(class_exists('Map\Http\Controllers\\'.$class)){
            $method = $req[0];
            if(method_exists('Map\Http\Controllers\\'.$class, $method)){
                echo var_dump($_GET);
            }
            else{
                echo 'Map\Http\Controllers\\'.'\\'.$class.'\\'.$method;
            }
        }
        else{
        }
    }
?>