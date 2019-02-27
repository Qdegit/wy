<?php
header("content-type:text/html;charset=utf-8");
	$tel = $_POST["tel"];
	$pwd = $_POST["pwd"];
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("1824", $db);
	mysql_query("set names utf8");
	$sql = "SELECT  `tel` FROM  `login` WHERE tel =  '$tel'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	if($arr){
		echo "<script>alert('手机号已注册');location.href = '../register.html?sid=2';</script>";
	}else{
		$sqq = "INSERT INTO `login`( `tel`, `pwd`) VALUES ('$tel','$pwd')";
		$row = mysql_query($sqq);
		if($row){
			echo "<script>alert('注册成功');location.href = '../register.html?sid=1';</script>";
		}else{
			echo "<script>alert('注册失败');location.href = '../register.html?sid=2';</script>";
		}
	}
?>