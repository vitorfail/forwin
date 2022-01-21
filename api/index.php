<?php
    require_once('Http/Rest.php');

    use Map\Http\Rest;

    if(isset($_REQUEST) && !empty($_REQUEST)){
        $rest = new Rest($_REQUEST);
        echo $rest->run();
    }


?>