<?php

$result= array();

header('Content-Type: application/json; charset=UTF-8');
header("HTTP/1.1 200 OK");

function get_angular_request_payload() {
    return json_decode(file_get_contents('php://input'), true);
}

$vars = get_angular_request_payload();
$lets="../../images/".$vars["dir"];
$files =opendir($lets);
while (false !== ($file = readdir($files))) {
    if(strlen ($file)>4)
        $result[] = $file;
}
echo json_encode($result, false);

