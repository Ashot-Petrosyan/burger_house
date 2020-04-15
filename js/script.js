jQuery(document).ready(function($) {
	$(window).scroll(function(event) {
		if($(this).scrollTop()>1){
			$('header nav').css({
				backgroundColor : 'white',
				border: '2px solid black',
			});
			$('header li').css({
				borderColor:'red'
			});
			$('header a').css('color','red');
			$('.brg').css('color','black');

		}
		if($(this).scrollTop()>350){
			$('.mek').css({
				animationName:'arajinmek'
			})
			$('.erku').css({
				animationName:'arajinmek'
			})
			$('.ereq').css({
				animationName:'arajinerku'
			})
			$('.chors').css({
				animationName:'arajinerku'
			})
			$('.hing').css({
				animationName:'erkrordmek'
			})
			$('.vec').css({
				animationName:'erkrordmek'
			})
			$('.yot').css({
				animationName:'erkrordmek'
			})
			$('.ut').css({
				animationName:'erkrorderku'
			})
			$('.iny').css({
				animationName:'erkrorderku'
			})



		}
		else{
			$('header nav').css({
				backgroundColor : 'transparent',
				border: '0px',
			});
			$('header li').css({
				borderColor:'white'
			});
			$('header a').css('color','white');
			$('header h1').css('color','white');
			$('.mek').css({
				animationName:''
			})
			$('.erku').css({
				animationName:''
			})
			$('.ereq').css({
				animationName:''
			})
			$('.chors').css({
				animationName:''
			})
			$('.hing').css({
				animationName:''
			})
			$('.vec').css({
				animationName:''
			})
			$('.yot').css({
				animationName:''
			})
			$('.ut').css({
				animationName:''
			})
			$('.iny').css({
				animationName:''
			})
		}

	});
})