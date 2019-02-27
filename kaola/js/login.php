<?php
	header("content-type:text/html;charset=utf-8");
	$conn = mysql_connect( "localhost","root","root" );
	mysql_select_db( "1824" , $conn );
	mysql_query( "set names utf8" );
	$tel = $_POST["tel"];
	$pwd = $_POST["pwd"];
	$sql = "SELECT * FROM `login` WHERE tel = '$tel'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	if($arr){
		if($arr["pwd"] == $pwd){
			echo "<script>alert('登录成功');location.href='../index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='../register.html?sid=2';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在');location.href='../register.html?sid=2';</script>";
	}
?>