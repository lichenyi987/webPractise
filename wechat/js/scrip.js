/*
* @Author: chenyi
* @Date:   2019-09-04 14:16:28
* @Last Modified by:   chenyi
* @Last Modified time: 2019-09-04 14:32:07
*/

$(function(){
	$(".page-footer div.nav-btn").click(function() {
		/* Act on the event */
		$(".page-footer div.nav-btn").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
	})

	
})


