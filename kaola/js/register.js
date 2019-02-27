$("#log").click(function(){
	$(".reg").hide();
	$(".login").show();
})
$("#res").click(function(){
	$(".login").hide();
	$(".reg").show();
})
$("#res1").click(function(){
	$(".login").hide();
	$(".reg").show();
})
$("#tab1").click(function(){
	$(this).css("color","#e31436");
	$("#tab2").css("color","#999999");
	$(".l-b").show();
	$(".l-c").hide();
})
$("#tab2").click(function(){
	$(this).css("color","#e31436");
	$("#tab1").css("color","#999999");
	$(".l-c").show();
	$(".l-b").hide();
})

var sid = location.href;
var arr = sid.split("?");
var ary = arr[1].split("=");
var res = [ary];
var sum = res[0][1]

$(function(){
	if(sum == 1){
		$(".reg").hide();
		$(".login").show();
	}else{
		$(".login").hide();
		$(".reg").show();
	}
})
//登录注册的php
var flagMail = null;
$("#tel").blur(function(){
	var reg = /^1[34578]\d{9}$/;
	var str = $(this).val();
	if(reg.test(str)){
		flagMail = true;
	}else{
		figeMail = false;
		$("#s1").html("手机号格式错误");
	}
})
var flagPwad = null;
$("#pwd").blur(function(){
	var reg = /^\w{6,}$/;
	var str = $(this).val();
	if(reg.test(str)){
		flagPwad = true;
	}else{
		flagPwad = false;
		$("#s1").html("密码最少有6位");
	}
})
$(".r-b").submit(function(){
	if(flagMail&&flagPwad){
		return true;
	}else{
		return false;
	}
})

//登录

