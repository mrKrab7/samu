<?php
if(isset($_POST['name'])) // определение события добавления файлов
{
	$name=$_POST['name'];
 	if($_POST['new']==1)
	{
		unlink("jsonSafe/$name.json");
	}
	file_put_contents("jsonSafe/$name.json", $_POST['json']);
	echo 'ok';
	//$tec_param=array("name"=>"$name");//,"json"=>"{$_POST['json']}","new"=>"{$_POST['new']}"
	//echo json_encode($tec_param);
}
else 
{
	//$tec_param=array("rez"=>"q{$_POST['name']}q");//,"name"=>"{$_POST['name']}","json"=>"{$_POST['json']}","new"=>"{$_POST['new']}"
	echo 'error';//json_encode($tec_param);
}
?>