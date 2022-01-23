<?php
    require_once('Http/Rest.php');
    require_once('Http/Controllers/UsersController.php');
    use Map\Http\Rest;

    if(isset($_GET) && !empty($_GET)){
        //$rest = new Rest($_REQUEST);
        //echo $rest->run();
        $req = explode('/', $_GET['url']);
        $class = ucfirst($req[0]).'Controller';
        if(class_exists('Map\Http\Controllers\\'.$class)){
            if(method_exists('Map\Http\Controllers\\'.))
            echo var_dump($_GET);
        }
        else{
        }
    }
?>