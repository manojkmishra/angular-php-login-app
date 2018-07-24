<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator [database.php]",
        "success": true   
    }';
} else {
    echo '{
        "message": "Who the f are you [database.php]",
        "success": false
    }';
}

?>
