<?php

$result= array();

header('Content-Type: application/json; charset=UTF-8');
header("HTTP/1.1 200 OK");


$vars = get_angular_request_payload();


$files =opendir("../images/test1");
while (false !== ($file = readdir($files))) {
    if(pathinfo($file, PATHINFO_EXTENSION)=="jpg")
        $result[] = $file;
}
echo json_encode($result, false);

function get_angular_request_payload() {
    return json_decode(file_get_contents('php://input'), true);
}