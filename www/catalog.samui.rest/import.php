<?php

if(isset($_POST['name'])) // определение события чтения файлов
{
	$name=$_POST['name'];
	$str=file_get_contents("jsonSafe/$name.json");//https://catalog.samui.rest/
	echo $str;
}
else 
{
	echo "error";
}
?>