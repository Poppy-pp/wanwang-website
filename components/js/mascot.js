// 吉祥物
$(".mascot").hover(
	function() {  
	    $( this ).attr('src','./img/mascots/mascot2.gif');
	}, function() {  
	    $( this ).attr('src','./img/mascots/mascot3.gif');
	}  
);
$(".mascot").click(
	function() {
		$( this ).attr('src','./img/mascots/mascot4.gif');
	}
);