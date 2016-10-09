$(function(){
	var innerlis = $('.box .inner ul li');
	var out = $('.box .out');
	var outimg = $('.box .out .outbox img');
	var close = $('.box .out .close');
	var btnleft = $('.box .out .btn .btnleft');
	var btnright = $('.box .out .btn .btnright');
	var index = 0;
	var imgsrc;

	innerlis.on('click',function(){
		out.css('display','block');
		imgsrc = innerlis.eq($(this).index()).find('img').attr('src');
		outimg.attr('src',function(){
			return imgsrc;
		});

	});

	close.on('click',function(){
		out.css('display','none');
	});

	btnleft.on('click',function(){
		index--;
		if(index<0) index = innerlis.length-1;
		out.css('display','block');
		imgsrc = innerlis.eq(index).find('img').attr('src');
		outimg.attr('src',function(){
			return imgsrc;
		});
	});

	btnright.on('click',function(){
		index++;
		if(index>innerlis.length) index = 0;
		out.css('display','block');
		imgsrc = innerlis.eq(index).find('img').attr('src');
		outimg.attr('src',function(){
			return imgsrc;
		});
	});

	$(out).on('click',function(e){
		var scrw = $(document).width();
		var scrh = $(document).height();
		var imgl = $(outimg).offset().left;
		var imgt = $(outimg).offset().top;
		var imgw = $(outimg).width();
		var imgh = $(outimg).height();
			if(e.pageX<scrw/2&&e.pageX>imgl&&e.pageY>imgt&&e.pageY<imgt+imgh){
				$(btnleft).trigger('click');
			}else if(e.pageX>scrw/2&&e.pageX<scrw/2+imgw/2&&e.pageY>imgt&&e.pageY<imgt+imgh){
				$(btnright).trigger('click');
			}
			return false;
		});

		$(out).on('click',function(e){
			// console.dir(e.target==out[0]);
			if(e.target==out[0]){
				out.css('display','none');
			}
		});


		// 阻止浏览器默认样式
		$(document).on('mousedown',function(e){
			return false;
			// e.preventDefault();
			// e.stopPropagation();
		});
	
});