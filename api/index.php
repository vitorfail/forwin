<?php
    require_once('Http/Rest.php');
    use Map\Http\Rest;

    if(isset($_GET) && !empty($_GET)){
        $rest = new Rest($_GET);
        echo $rest->run();
    }
?>