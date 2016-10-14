$(document).ready(function() {
	$(':button').click(function(event){			
		if($(this).attr("flag") == "up"){
			var replyid;
			replyid = $(this).attr("data-replyid");
			var upclass, downclass;
			upid = '#up'+replyid;
			downid = '#down'+replyid;				
			$.get('/reply/upvote/', {reply_id:replyid}, function(data){
				$('#votecount_'+replyid).html(data);
				$('#votecount_2_'+replyid).html(data);
				var isup, isdown;
				isup = $(upid).attr('class');
				isdown = $(downid).attr('class');
				if(isup=='btn btn-success btn-xs'){
					$(upid).attr("class", "btn btn-default btn-xs");
				}else if(isdown=='btn btn-success btn-xs'){
					$(upid).attr("class", "btn btn-success btn-xs");
					$(downid).attr("class", "btn btn-default btn-xs");
				}else{
					$(upid).attr("class", "btn btn-success btn-xs");
				}				
			});
		}
		else if($(this).attr("flag") == "down"){
			var replyid;
			replyid = $(this).attr("data-replyid");
			var upclass, downclass;
			upid = '#up'+replyid;
			downid = '#down'+replyid;				
			$.get('/reply/downvote/', {reply_id:replyid}, function(data){
				$('#votecount_'+replyid).html(data);
				$('#votecount_2_'+replyid).html(data);
				var isup, isdown;
				isup = $(upid).attr('class');
				isdown = $(downid).attr('class');
				if(isdown=='btn btn-success btn-xs'){
					$(downid).attr("class","btn btn-default btn-xs");
				}else if(isup=='btn btn-success btn-xs'){
					$(upid).attr("class","btn btn-default btn-xs");
					$(downid).attr("class","btn btn-success btn-xs");
				}else{
					$(downid).attr("class","btn btn-success btn-xs");
				}				
			});
		}
	});

	$("#interested").click( function(event) {
		var questionid;
		questionid = $(this).attr("data-questionid");
		$.get('/question/follow/', {question_id:questionid}, function(data){
			$('#followerscount').html(data);
			var isfollow;
			isfollow = $('#interested').attr('class');
			if(isfollow=="btn btn-success"){
				$('#interested').attr("class","btn");
				$('#interested').html("取消关注");
			}else{
				$('#interested').attr("class","btn btn-success");
				$('#interested').html("关注问题");
			}
		});
	});
});