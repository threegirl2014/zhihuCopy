$(document).ready(function() {
	setInterval(function(){
		var top_index = $('#toprefresh').attr("data-top");
		var now=new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds=now.getSeconds();
		var current_time=hours+":"+minutes+":"+seconds;
		console.log(current_time, top_index);
		$.get('/interval/',{top_id:top_index},function(data){
			console.log('refresh',data);
			if(data > 0){
				$('#toprefresh').attr("style","display:block;");
				$('#toprefresh').attr("data-needrefresh",data);
				if(data > 99){
					data = 99;
					$('#toprefresh').text("+"+data+"条新动态");
				}
				else{
					$('#toprefresh').text(data+"条新动态");
				}
			}
		});
	}, 20000);
});