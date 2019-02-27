$(function(){
	$(".l1 >a").hover(function(){
		$(this).css("color","#FFFFFF");
	},function(){
		$(this).css("color","#999");
	})
    $('.le').hover(function(){
    $(this).css({"color":"#FF2337","background":"#fff"})
    $(this).find("i").html("▲");
    $(this).find('ul').show();
    },function(){
	$(this).css({"color":"#999999","background":"#000"})
	$(this).find("i").html("▼");
    $(this).find('ul').hide();
    });
    $(".lh").on("mouseenter","li",function(){
    	$(this).find("a").css("color","#FF2337");
    })
    $(".lh").on("mouseleave","li",function(){
    	$(this).find("a").css("color","#333333");
    })
    })

//logo
$(".show1").on("mouseenter","li",function(){
	$(this).find(".show2").addClass("active");
})
$(".show1").on("mouseleave","li",function(){
	$(this).find(".show2").removeClass("active");
})

$(".show1 >li>a").hover(function(){
	$(this).css("color","#FF274B")
	$(this).parent().css("background","#FFFFFF")
	$(this).find("i").css("color","#FF274B")
},function(){
	$(this).css("color","#FFFFFF")
	$(this).parent().css("background","linear-gradient(90deg,red,#ff3264)")
	$(this).find("i").css("color","#ff96ad")
})
$(".showc").on("mouseenter","a",function(){
	$(this).css("color","#FF274B")
})
$(".showc").on("mouseleave","a",function(){
	$(this).css("color","#999")
})
$(".t-b").on("mouseenter","div",function(){
	$(".show1").show()
})

$(".t-b").on("mouseleave",function(){
	$(".show1").hide()
})
window.onload = function(){
	var cok = getCookie("shoplist");
	var str ="";
	for(var i = 0;i<cok.length;i++){
		str += '<div class="shop">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl fl1" src="'+cok[i].src+'" alt="" />'+
					'<p class="fl">'+cok[i].name+'</p>'+
					'<span class="fl">￥'+cok[i].price+'</span>'+
					'<h4 class="fl"><span id="add">+</span><input type="text" class="count" value="'+cok[i].count+'"/><span id="reduce">-</span></h4>'+
					'<em class="fl sumPrice">'+(cok[i].count*cok[i].price)+'元</em>'+
					'<i class="fl delBtn">删除</i>'+
					'<p id="pid">'+cok[i].id+'</p>'+
				'</div>';
	}
	$(".shop-c").html(str);
}
var cok = getCookie("shoplist");
//全选
$("#selectAll").click(function(){
	$(".ck").prop("checked",$(this).prop("checked"));
	Settlement();
});
//算账
$(".shop-c").on("click",".ck",function(){
	Settlement();
});
//封装结算
function Settlement(){
	var money =0;
	var count = 0;
	$(".ck:checked").each(function(){
		money += parseInt($(this).parent().parent().find(".sumPrice").html());
		count += parseInt($(this).parent().parent().find(".count").val());
	})
	$(".count2").html(count);
	$(".money2").html(money);
}
//加减
$(".shop-c").on("click","#add",function(){
	$val = $(this).next().val();
	$(this).next().val(++$val);
	var pid = $("#pid").html();
	for(var i = 0;i<cok.length;i++){
		if(cok[i].id == pid){
			cok[i].count = $val;
			setCookie("shoplist",JSON.stringify(cok));
			$(this).next().val(cok[i].count);
			$(this).parent().next().html( cok[i].count * cok[i].price + "元" )
			Settlement();
			break;
		}
	}
})
$(".shop-c").on("click","#reduce",function(){
	$val = $(this).prev().val();
	if($val == 1){
		stop();
	}else{
		$(this).next().val(--$val);	
	}
	var pid = $("#pid").html();
		for(var i = 0;i<cok.length;i++){
			if(cok[i].id == pid){
				cok[i].count = $val
				setCookie("shoplist",JSON.stringify(cok));
				$(this).prev().val(cok[i].count);
				$(this).parent().next().html( cok[i].count * cok[i].price + "元" )
				Settlement();
				break;
			}
		}
})	
//删除
$(".shop-c").on("click",".delBtn",function(){
	var pid = $("#pid").html();
	console.log(pid);
	for(var i = 0;i<cok.length;i++){
		if(cok[i].id == pid){
			cok.splice(i,1);
			setCookie("shoplist",JSON.stringify(cok));
			$(this).parent().remove();
			break;
		}
	}
})