/*
* @Author: chenyi
* @Date:   2019-09-04 15:29:18
* @Last Modified by:   chenyi
* @Last Modified time: 2019-09-04 20:59:58
*/

$(function(){
	//绘图画板
	var ctx = $("#myCanvas").get(0).getContext("2d");
	var offset = $("#myCanvas").offset();
		

	function initColors(){
		var colors = ["#09f","#00ff00","purple","pink","#873721"];
		html = "";

		console.info(colors)
		for(var i = 0; i < colors.length; i++){
			var c = colors[i];
			html = html + "<div class='color' style='background:"+ c +"'></div>"
		}

		$("#colors-box").html(html);

		bindSelect();
	}


	function bindSelect(){
		$("#colors-box .color").click(function(){
			$("#colors-box .color").each(function(){
				$(this).removeClass("active")
			})

			$(this).addClass("active")
			//设置画笔颜色
			var color = $(this).css('backgroundColor');
			//ctx.fillStyle= color
			//ctx.fillRect(0,0,150,200)
			ctx.strokeStyle =color;
			// 设置线的粗细
			ctx.lineWidth = 5;
		})
	}

	$("#myCanvas").mousedown(function(e){
		console.info(offset)
		var x = e.clientX - offset.left;
		var y = e.clientY - offset.top;
		// 开始划线
		ctx.beginPath();
		ctx.moveTo(x,y);
	})


	$("#myCanvas").mousemove(function(e){
		var x = e.clientX - offset.left;
		var y = e.clientY - offset.top;
		ctx.lineTo(x,y)
		// 将路径画出来
		ctx.stroke()
	})


	$("#myCanvas").mouseup(function(e){
		// 开始划线
		// 将路径封闭
		ctx.closePath();
	})

	initColors()
})