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
//轮播图
$(function(){
		var timer = setInterval(auto,1000)
		var index = 0;
		function auto(){
			index++
			if(index == $(".ban-s li").size()){
				index = 0;
			}
			$(".ban-s li").eq(index).addClass("current").siblings().removeClass("current");
			$(".ban li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		}
		$(".ban-s li").mouseenter(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			auto();
		})
		$(".ban-s li").mouseleave(function(){
			timer = setInterval(auto,1000)
		})
		$("#ban-c").hover(function(){
			$(this).find("div").show();
		},function(){
			$(this).find("div").hide();
		})
		//var flag = true;
		$("#left1").click(function(){
			//if(flag){
				//flag = false;
				clearInterval(timer);
				index--
				if(index == -1){
					index = $(".ban-s li").size();
				}
				$(".ban-s li").eq(index).addClass("current").siblings().removeClass("current");
				$(".ban li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			//	flag = true;
			//}
			
		},)
		$("#right1").click(function(){
			//if(flag){
				clearInterval(timer);
				auto();
				//flag = true
			//}
			
		})
		
	})

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



//获取数据
window.onload = function(){
	var deff = $.ajax({
			type: "get",
			url : "js/data.json",
			async:true
		});
	deff.done(function(json){
		var strCon = "";
		for(var attr in json){
		var pro = json[attr].name[0];
		var prr = json[attr].list[0];
		var poo = json[attr].list2[0];
		var ppp = json[attr].pic[0];
		strCon += `<div class="core">
					<div class="core-t">
						<div class="core-t1">
							<h4>${pro.name}</h4>
							<p>热搜词:</p>
							<a href="javascript:">${pro.a1}</a>
							<a href="javascript:">${pro.a2}</a>
							<a href="javascript:">${pro.a3}</a>
							<a href="javascript:">${pro.a4}</a>
						</div>
						<div class="core-t2">
							查看更多<i class="iconfont icon-you"></i>
						</div>
					</div>
					<div class="core-c">
						<div class="core-c1">
							<a href="javascript"><img src="images/show${prr.src}"/></a>
							<ul>
								<li><a href="javascript:">${prr.a1}</a></li>
								<li><a href="javascript:">${prr.a2}</a></li>
								<li><a href="javascript:">${prr.a3}</a></li>
								<li><a href="javascript:">${prr.a4}</a></li>
								<li><a href="javascript:">${prr.a5}</a></li>
								<li><a href="javascript:">${prr.a6}</a></li>
							</ul>
						</div>
						<div class="core-c2">
							<div class="core-c2t">
								<h5>${poo.h1}</h5>
								<p>${poo.p1}</p>
								<img src="images/show${poo.src1}"/>
							</div>
							<div class="core-c2b">
								<h5>${poo.h2}</h5>
								<p>${poo.p2}</p>
								<img src="images/show${poo.src2}"/>
							</div>
						</div>
						<div class="core-c3">
							<div class="core-c3t">
								<h5>${poo.h3}</h5>
								<p>${poo.p3}</p>
								<img src="images/show${poo.src3}"/>
							</div>
							<div class="core-c3t">
								<h5>${poo.h4}</h5>
								<p>${poo.p4}</p>
								<img src="images/show${poo.src4}"/>
							</div>
						</div>
						<div class="core-c4">
							<h4>最近热卖</h4>
							<div class="core-c4b">
								<dl>
									<dt><img src="images/show${poo.dt1}"/></dt>
									<dd>
										<a href="javascript:">${poo.dd1}</a>
										<p>${poo.d1}
											<em>${poo.da1}</em>
										</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="images/show${poo.dt2}"/></dt>
									<dd>
										<a href="javascript:">${poo.dd2}</a>
										<p>${poo.d2}
											<em>${poo.da2}</em>
										</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="images/show${poo.dt3}"/></dt>
									<dd>
										<a href="javascript:">${poo.dd3}</a>
										<p>${poo.d3}
											<em>${poo.da3}</em>
										</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="images/show${poo.dt4}"/></dt>
									<dd>
										<a href="javascript:">${poo.dd4}</a>
										<p>${poo.d4}
											<em>${poo.da4}</em>
										</p>
									</dd>
								</dl>
							</div>
						</div>
					</div>
					<div class="core-b">
						<div class="core-b1"><i class="icon-love
"></i><img src="images/${ppp.src1}"/></div>
						<div class="core-b1"><i class="icon-love
"></i><img src="images/${ppp.src2}"/></div>
						<div class="core-b1"><i class="icon-love
"></i><img src="images/${ppp.src3}"/></div>
						<div class="core-b1"><i class="icon-love
"></i><img src="images/${ppp.src4}"/></div>
						<div class="core-b1"><i class="icon-love
"></i><img src="images/${ppp.src5}"/></div>
					</div>
				</div>`;
		}
		$("#core").html(strCon);
	})
}
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop > 700){
		$(".shopcart").hide()
		$(".t-t").css({"top":0,"width":"100%","background":"#FFF","heigth":"50%","position":"fixed"});
		$(".louti").css({"position":"fixed","top":"100px"});
		$(".top").css({"position":"fixed","top":"100px"});
	}else{
		$(".shopcart").show()
		$(".t-t").css("position","static");
		$(".louti").css({"position":"absolute"});
		$(".top").css({"position":"absolute"});
	}
	
})

$(function(){
		var time = setInterval(autoPlay,2000)
		var index = 0;
		function autoPlay(){
			index++
			if(index == $(".brand-bl2 li").size()){
				index = 0;
			}
			$(".brand-bl2 li").eq(index).addClass("acti").siblings().removeClass("acti");
			$(".brand-bl1 li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		}
	})

$(".brand-br1").hover(function(){
	$(this).find("img").css({"width":"30%","heigth":"30%"});
	$(this).find(".p1").hide();
	$(this).find(".brand-br1c").show();
},function(){
	$(this).find("img").css({"width":"120px","heigth":"120px"});
	$(this).find(".p1").show();
	$(this).find(".brand-br1c").hide();
})


$("#a1").click(function(){
	$(".brand-br1t").animate( {"width":0,"left":106},1000,function(){
			//运动完成后   span 高度变为75  top变成0
			$(this).hide();
			$(".brand-br1b").show().animate( { "width":213 , "left" : 0 },1000 )
	})
	
}).stop()

//楼梯
var flag = true;//开关边框控制滚动条是否被触发  假设值为true时  可以触发滚动条
	//点击左侧楼层号  除了 top
	$(".louti li").click(function(){
		flag = false;	   
		//根据当前操作的楼层号的下标  找到对应楼层距离文档顶部的 距离 
		var topHeight = $(".core").eq( $(this).index()-1 ).offset().top;
		
		//设置滚动条滚走的距离 为  topHeight
		$("body,html").stop().animate({"scrollTop":topHeight},1000,function(){
			flag = true; //点击事件动画完成后，将开关变量改变成true，让scroll滚动条事件可以继续执行
		})
	})
	
	//点击楼层号的最后一个按钮   滚动条回到顶部
	//操作滚动条
	$(".top li:last").click(function(){
		flag = false;
		$("body,html").animate({"scrollTop":0},1000,function(){
			flag = true;
		});
		$("#LoutiNav li:not(:last)").removeClass("active");
	})