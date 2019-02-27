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


$(".core-c").on("mouseenter","li",function(){
	$(this).find("div").css({"height":"330px","zIndex":"2","border-color":"red"})
	$(this).find("h5").css({"overflow":"visible","text-overflow":"clip","white-space":"normal","height":"80px"})
})
$(".core-c").on("mouseleave","li",function(){
	$(this).find("div").css({"height":"279px","zIndex":"1"})
	$(this).find("h5").css({"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap","height":"22px"})
})
//放大镜

	
		var $smallImg = $("#small img"),
			$bigImg = $("#big img"),
			$list = $("#bot li"),
			$box = $("#box"),
			$mask = $("#mask");
			
			
		$("#con-c").on("mouseenter","li",function(){
			var index = $(this).index();
			//让index对应的小图和大图显示 其他的隐藏
			$(this).css("border","3px solid red").siblings().css("border","none")
			$("#small img").eq(index).show().siblings("img").hide();
			$("#big img").eq(index).show().siblings().hide();
		})
		$("#con-c").on("mouseenter","#small",function(e){
			$("#mask").show();
			$("#big").show();
		})
		$("#con-c").on("mouseleave","#small",function(e){
			$("#mask").hide();
			$("#big").hide();
		})
		$("#con-c").on("mousemove","#small",function(e){
			var bigImgW = 800;
			var bigImgH = 800;
			var smallImgW = 400;
			var smallImgH = 400;
			
			var e = e || event;
			var x = e.pageX - $("#box").offset().left - $("#mask").width()/2;
			var y = e.pageY - $("#box").offset().top - $("#mask").height()/2;
			
			var maxL = $("#box").width() - $("#mask").width();
			var maxT = $("#box").height() - $("#mask").height();
			x = Math.min(Math.max( 0 , x ) , maxL);
			y = Math.min(Math.max( 0 , y ) , maxT);
			$("#mask").css({
				left : x,
				top : y
			})
			var bigImgLeft = x*bigImgW / smallImgW;
			var bigImgTop = y*bigImgH / smallImgH;
			$(".bigImage").css({
				left : -bigImgLeft,
				top : -bigImgTop
			})
		
		})

	


//数量加减
$("#con-c").on("click","#add",function(){
	$val = $(this).next().val();
	$(this).next().val(++$val);
})
$("#con-c").on("click","#reduce",function(){
	$val = $(this).prev().val();
	if($val == 1){
		stop();
	}else{
		$(this).prev().val(--$val)
	}
})	



window.onload = function(){
	var str = location.href;
	str = str.split("?")[1];
	var arr = str.split("&");
	var cname = arr[0].split("=")[1];
	var pid = arr[1].split("=")[1];
	$.ajax({
		type:"get",
		url : "js/index.json",
		async : true,
		success : function(json){
			var arr = json[cname].list;
 			var str ="";
 			for(var i = 0;i<arr.length;i++){
 					if(pid == arr[i].unique){
 						str = `<div class="con-t">
									<p>运动用品</p><em>></em>
									<p class="p1">运动鞋<i>▼</i></p><em>></em>
									<p class="p1">跑步鞋<i>▼</i></p><em>></em>
									<p class="p1">阿迪达斯<i>▼</i></p><em>></em>
									<p>${arr[i].h5}</p>
								</div>
								<div class="con-c">
									<div id="box">
									<div id="left"><a href="javascript:"><i class=" iconfont icon-you-copy"></i></a></div>
									<div id="right"><a href="javascript:"><i class=" iconfont icon-you"></i></a></div>
									<div id="small" class="small">
										<img src="${arr[i].oul}" alt="" id="mm"/> 
								         <img src="${arr[i].oul1}" alt=""/> 
								         <img src="${arr[i].oul2}" alt=""/> 
								         <img src="${arr[i].oul3}" alt=""/>
								         <img src="${arr[i].oul4}" alt=""/>
								    	 <div id="mask"></div>   
								    </div>
								    <div id="big">
										<img src="${arr[i].oul}" class="bigImage"/>
										<img src="${arr[i].oul1}" class="bigImage"/>
										<img src="${arr[i].oul2}" class="bigImage"/>
										<img src="${arr[i].oul3}" class="bigImage"/>
										<img src="${arr[i].oul4}" class="bigImage"/>
									</div>
									<div id="min">
										<ul id="bot">
									        <li><img src="${arr[i].oul}" alt=""/></li>
									        <li><img src="${arr[i].oul1}" alt=""/></li>
									        <li><img src="${arr[i].oul2}" alt=""/></li>
									        <li><img src="${arr[i].oul3}" alt=""/></li>
									        <li><img src="${arr[i].oul4}" alt="" /></li>
							    		</ul>
									</div>
								</div>
								</div>
								<div class="con-l">
									<div class="box-r">
										<h5> 德国 | adidas 阿迪达斯</h5>
										<h6>${arr[i].h5}</h6>
										<div class="price">
											<h5><i>售价</i><em>${arr[i].i}.00</em><i>参考价：${arr[i].em}.00</i></h5>
										</div>
										<div class="price1"><i>税费</i><em>包税</em><b>商品售价已包含税费，无需另付税费</b></div>
										<div class="price2"><i>运费</i>至<em>北京市/昌平/</em><b>满88包邮</b></div>
										<div class="price3"><i>服务</i><em>本商品由 自营保税仓 发货</em></div>
										<div class="num"><i>数量</i>
											<h4><span id="add">+</span><input type="text" value="1"/><span id="reduce">-</span></h4>
										</div>
										<div class="shop">
											<p class='shop-1'>立即购买</p>
											<p class='shop-2' data-src="${arr[i].oul}" data-name="${arr[i].h5}" data-price="${arr[i].i}" data-id="${arr[i].unique}">加入购物车</p>
										</div>
									</div>
								</div>`;
						break;
 					}
 				}
 			$("#con-c").html(str);
		}
		
	})
	var arr = [];
	$("#con-c").on("click",".shop-2",function(){
		var json = {}
			json = {
				"id" : $(this).data("id"),
				"name" : $(this).data("name"),
				"price" : $(this).data("price"),
				"count" : 1,
				"src" : $(this).data("src")	
			}
		var flag = true;
		
		var cookieInfo = getCookie("shoplist");
//		cookie = document.cookie;
//		console.log( cookie )
		/*if(cookie){
			
			crr = cookie.split("; ");
			
			for( var i = 0 ; i < crr.length ; i++ ){
				item = crr[i].split("=")
				//console.log(item)
				if( item[0] == "shoplist" ){
					brr = item[1]
				}
			}
			console.log(brr)
		}*/
		if(cookieInfo.length != 0){
			arr = cookieInfo;
			for(var i = 0;i < cookieInfo.length;i++){
				if(json.id == cookieInfo[i].id){
					cookieInfo[i].count++;
					
					flag = false;
					break;
				}
			}
		}
		if(flag){
			arr.push(json);
		}
		setCookie("shoplist",JSON.stringify(arr));
		//arr.push(json);
		 
		//setCookie("shoplist",JSON.stringify(arr));
	})
		
	$("#con-c").on("click",".shop-1",function(){
		location.href = "shopCar.html";
	})
}
//购物车





