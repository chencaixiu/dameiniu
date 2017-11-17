window.onload = function(){
		lunbo();//banner轮播图
		donghua();//six 动画
		yundong();//seven 动画
		essay();//文章轮播图
		asides();//侧边效果
		floor();//楼梯
}	
//轮播图	
function lunbo(){
	var index = 1;
	var arr=["#ad221b","#0e0002","#6a4a4b","#ad221b","#010101","#eae2b1","#999cad","#202038","#d2dbe4","#ad221b","#660303"]
	$timer = setInterval(function(){//轮播图
		index++;
		$("#bannerbox").css("background",arr[index])
		$(".ten span").eq(index==10?-1:index)
						      .css("background","#ffffff")
						      .siblings()
						      .css("background","gray")
		$(".all").animate({"left":-index*1200},1000,function(){
			if(index==10){
				$(".all").css("left",0);
				index=0;
			}				
		})
	},5000)
	
	$(".ten span").click(function(){//点击底部按钮显示对应图片
		index=$(this).index()+1;
		$("#bannerbox").css("background",arr[index])
		$(this).css("background","#ffffff")
			   .siblings()
			   .css("background","gray")
		$(".all").animate({"left":-index*1200},1000)
	})
	
	$(".main").mouseenter(function(){//鼠标移入图标显示
		$(".btn1").css("display","block");
	})
	
	$(".btn1").click(function(){
		index--;
		$("#bannerbox").css("background",arr[index])
		if(index==-1){
			index=9;
			$(".all").css("left",-12000)
		}
		$(".ten span").eq(index-1)
					  .css("background","#ffffff")
					  .siblings()
					  .css("background","gray");
		$(".all").animate({"left":-index*1200},1000)
		
		})
	$(".main").mouseenter(function(){//鼠标移入图标显示
		$(".btn2").css("display","block");
	})
	
	$(".btn2").click(function(){
		index++;
		if(index==10){
			index=0;
			$(".all").css("left",-1200)
		}
		$("#bannerbox").css("background",arr[index])
		$(".ten span").eq(index-1)
					  .css("background","#ffffff")
					  .siblings()
					  .css("background","gray");
		$(".all").animate({"left":-index*1200},1000)
		
		})
	$(".main").mouseleave(function(){
		$(".btn1").css("display","none");
		$(".btn2").css("display","none");
	})
}
//six 鼠标移入移出动画效果
function donghua(){
	$(".dwbig").mouseenter(function(){
		$(this).find(".dwsmall")
			   .animate({"height":"100%"},100)
			   .find("p")
			   .css("display","block")
	})
	$(".dwbig").mouseleave(function(){
		$(this).find(".dwsmall")
			   .animate({"height":0},100)
			   .find("p")
			   .css("display","none")
	})
}
//seven 动画 鼠标移入 通过改变高度值显示出来
function yundong(){
	$(".dw").mouseenter(function(){
		$(this).find(".smal")
			   .animate({"height":65},300)
			   .css({"display":"block","opacity":0.9});
			   
	})
	$(".dw").mouseleave(function(){
		$(this).find(".smal")
			   .animate({"height":0},300,function(){
				 $(".smal").css({"display":"none","opacity":1});
		   })
	})
}
//文章轮播图
function essay(){
	var index = 0;
	$timer=setInterval(xx,2000);
	$(".yuan span").mouseenter(function(){
		clearInterval($timer);
		index = $(this).index()
	    $(this).css("background","red")
			   .siblings()
			   .css("background","#ebebeb")
		$(".uls").animate({"left":-index*584},1000)
		
	})
	$(".yuan span").mouseleave(function(){
		$timer=setInterval(xx,2000);
	})
	
	function xx(){
		index++;
		$(".uls").animate({"left":-index*584},1000,function(){
			if(index==3){
				index=0;
				$(".uls").css("left",0)
			}
		})
		$(".yuan span").eq(index==3?0:index)
					  .css("background","red")
					  .siblings()
					  .css("background","#ebebeb")
	}
}
//主页侧边效果
function asides(){
	$(".erji").mouseenter(function(){
		$(this).css("background","#ea7014");
		$(this).find("div")
			   .css("display","block")
			   .animate({"left":-$(this).find("div").width()},300)
			  
		
	})
	$(".erji").mouseleave(function(){
		$(this).css("background","#fff");
		$(this).find("div")
			   .css("display","none")
			   .animate({"left":0},300)
	})
	$(".erji:last").click(function(){
		 $("html,body").animate({"scrollTop":0},600)
	})
}
//楼梯
function floor(){
	
}
