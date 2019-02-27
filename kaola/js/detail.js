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




//获取数据	

window.onload = function(){
	var deff = $.ajax({
			type: "get",
			url : "js/index.json",
			async:true
		});
	deff.done(function(json){
		var title = "";
		var strCon1 = "";
		var strCon2 = "";
		for(var attr in json){
			title += `<div class="core">
						<div class="core-t">
							<h3 cname='${attr}'>${json[attr].name}</h3>
						</div>
						<ul class="core-c">
						</ul>
						</div>`
		    if(attr == "sid1"){
		    	for(var i = 0;i<json[attr].list.length;i++){
				var pro = json[attr].list[i];
				strCon1+= `<li>
							<div>
								<a href="javascript:">
									<img src="${pro.url}"/>
								</a>
								<h5>
									<a href="javascript">${pro.h5}</a>
								</h5>
								<p>${pro.p}</p>
								<h6>
									<i>${pro.i}</i>
									<em>${pro.em}</em>
									<a href="page.html?cname=${attr}&pid=${pro.unique}">立即购买</a>
								</h6>
							</div>
							</li>`;		
				}
		    }
			
		if(attr=="sid2"){
			for(var i = 0;i<json[attr].list.length;i++){
				var pro = json[attr].list[i];
				strCon2+= `<li>
							<div>
								<a href="javascript:">
									<img src="${pro.url}"/>
								</a>
								<h5>
									<a href="javascript">${pro.h5}</a>
								</h5>
								<p>${pro.p}</p>
								<h6>
									<i>${pro.i}</i>
									<em>${pro.em}</em>
									<a href="page.html?cname=${attr}&pid=${pro.unique}">立即购买</a>
								</h6>
							</div>
							</li>`;		
			}
		}
	}
		$("#con-c").html(title);
		$(".core-c").html(strCon1,strCon2);
		
	})
}


$("#con-c").on("mouseenter",".core li",function(){
	$(this).find("div").css({"height":"330px","zIndex":"2","border-color":"red"})
	$(this).find("h5").css({"overflow":"visible","text-overflow":"clip","white-space":"normal","height":"80px"})
})
$("#con-c").on("mouseleave",".core li",function(){
	$(this).find("div").css({"height":"279px","zIndex":"1","border-color":"#333"})
	$(this).find("h5").css({"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap","height":"22px"})
})
//$("#con-c").on("click",".core li",function(){
//	location.href = "page.html";
//})
