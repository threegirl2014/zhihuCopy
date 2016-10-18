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

	$("#newQuestion").validate();

	var decided_topics = new Object();
	$('#addQuestionTopics').keyup( function(){
		var query;
		query = $(this).val();
		
		$.get('/topic_suggest/', {start:query}, function(data){
			$('#choices').empty();
			// console.log(data.length,typeof(data),data);
			var topics = JSON.parse(data);
			console.log(topics);
			for(var i=0; i<topics['data'].length; i++){
				var name = topics['data'][i]['name'];
				var topic_id = topics['data'][i]['topic_id'];
				$('#choices').append(
					'<a class="label label-primary unchoose" topic_id="'
					+ topic_id + '">' + name + '</a><b>&nbsp;</b>');
			}

			$('.unchoose').click( function(event){
				$(this).attr("class","label label-success unchoose");
				rawValue = $('#decided_topics').val().split(' ');
				// console.log(rawValue, decided_topics);
				for(var topic in decided_topics){
					var flag = false;
					for(var raw in rawValue){
						if(decided_topics[topic] == rawValue[raw]){
							// console.log('true', rawValue[raw], decided_topics[topic]);
							flag = true;
							break;
						}
					}
					if(flag == false){						
						delete decided_topics[topic];
					}
				}
				// console.log(decided_topics);
				// console.log($(this).text());
				var topic_id = $(this).attr("topic_id");
				var name = $(this).text();
				decided_topics[topic_id] = name;
				// console.log(decided_topics);
				var names = "";
				for(var topic in decided_topics){
					names = names + decided_topics[topic] +" ";
					$('#decided_topics').attr('value',names);
					$('#decided_topics').val(names);					
				}
			});	

		});

	});

	$('#messages').click( function(event){
		$('#messagecount').html('');
		$.get('/mark/', function(data){
			
		});
		$.get('/messagelist/', {messageType:"common"}, function(data){
			$('#commonMessage').html(data);
		});
	});

	$('#thanksMessageTab').click( function(event){
		$.get('/messagelist/', {messageType:"thanks"}, function(data){
			// console.log(data);
			$('#thanksMessage').html(data);
		});
	});
	$('#userMessageTab').click( function(event){
		$.get('/messagelist/', {messageType:"user"}, function(data){
			$('#uerMessage').html(data);
		});
	});
	$('#commonMessageTab').click( function(event){
		$.get('/messagelist/', {messageType:"common"}, function(data){
			$('#commonMessage').html(data);
		});
	});

	$('#followpeople').click( function(event){
		var add_or_del;
		var isfollow = $(this).attr("class");
		if(isfollow == 'btn'){
			add_or_del = 'del';
		}else if(isfollow == 'btn btn-success'){
			add_or_del = 'add';
		}
		var followeeid = $(this).attr("data-peopleid");
		$.get('/follow/', {flag:add_or_del,followee_id:followeeid}, function(data){
			if(add_or_del == 'add'){
				$('#followpeople').attr("class", "btn");
				$('#followpeople').html("取消关注");
			}else if(add_or_del == 'del'){
				$('#followpeople').attr("class", "btn btn-success");
				$('#followpeople').html("关注");
			}
		});
	});
});