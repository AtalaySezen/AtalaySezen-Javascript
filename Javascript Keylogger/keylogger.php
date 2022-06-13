<?php

$abc = $_POST['searchFor'];
$logfile = fopen('data.txt','a+'); 
fwrite($logfile,$abc);
fclose($logfile);

?>

