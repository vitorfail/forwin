<?php
    require_once('Http/Rest.php');

    use Map\Http\Rest;

    if(isset($_GET) && !empty($_GET)){
        //$rest = new Rest($_REQUEST);
        //echo $rest->run();
        echo var_dump($_GET);
    }
?>