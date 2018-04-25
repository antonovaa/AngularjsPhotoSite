<?php
/* пара заголовков борются с кешированием
   в данной задаче это не слишком актуально
*/
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

/* покажем тип содержимого и ответ сервера,
   вообще то мы будем отправлять совсем не text/html 
   в ответ, но Angular это переживет. :)
*/
header('Content-Type: text/html; charset=UTF-8');
header("HTTP/1.1 200 OK");

/* рутину, связанную с работой с базой, 
   я спрятал в отдельный файл */
require_once dirname(__FILE__) . 'dao/db.php';
/* грузим данные, которые AngularJS шлет мимо $_POST 
   функция будет в самом низу :) */
$vars = get_angular_request_payload();

/* тут формируем результат - ответ сервера*/
$result = array();
/* реализация API, обработка команд серверу */
switch ($vars['command']) {
    case 'loadList':
        $res = db_query(0,"SELECT * FROM mao_text",null);
            while($row=pg_fetch_array($res))
                $result[] = $row['txt'];
        break;
    case 'save':
        $array = [
            "txt"=>$vars['data']
        ];
        db_query(1," ",$array);
        $result['msg'] = "Данные сохранены!";
        break;
}
/* отправляем данные в виде json */
//echo json_encode($result, true);

/* ТА-ДАМ!
   а вот способ, того как решается проблема
   с получением данных
 
   это избавляет нас менять заголовки и форматировать данные
   на стороне front-end, в Angular
*/
function get_angular_request_payload() {
    return json_decode(file_get_contents('php://input'), true);
}

echo json_encode($result, true);
//$res =db_query(0,"SELECT * FROM mao_text",null);
//while($row=pg_fetch_array($res))
//    $result[] = $row['txt'];
