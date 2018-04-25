<?php
//global $db;

$connect_string = "host=localhost port=5432 dbname=postgres user=postgres password=postgres";
$db = pg_connect($connect_string);

function db_query($i,$sql, $txt) {
	global $db;

	if ($i==1) {
        $res = pg_insert($db, 'mao_text', $txt);
        if ($res) {
            echo "Данные из POST успешно внесены в журнал\n";
        } else {
            echo "Пользователь прислал неверные данные\n";
        }
	}
	else {
        $result = pg_query($db, $sql);
//        $result = pg_fetch_assoc($result);
        if (!$result)
            db_error();

        return $result;
    }
}

function db_error() {
    echo "<pre>
		Извините, возникла проблема с подключение м к бд на сайте!\n;</pre>";
    exit;		
}
//
//$array = [
//    "txt"=>"ata"
//];
//$res =db_query(0,"SELECT * FROM mao_text",null);
//while($row=pg_fetch_array($res))
//    $result[] = $row['txt'];
//echo $res;