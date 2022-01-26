$(document).ready(function(){
	
	//bno값 출력하기
	var bno=$("#bno").html();
	
	// 상세페이지가 시작되자마자 이미지를 출력하가 위한 ajax
	$.getJSON(				//.json을통해 json타입으로 맞춰야한다.
							//또는 .json지우고 {bno:bno}?
			"/board/fileList/"+bno+".json",
			function(data){		//BoardController에 있는 fileList를
								//통해 얻어진 select 결과를 데이터에 저장하고 detail.jsp에 올리기
				//data는 select된 결과이므로 배열이다. 따라서 each를 통해 풀어냄
				console.log(data)
				var str="";
				
				$(data).each(function(i,obj){
					
					 var fileCallPath = encodeURIComponent(obj.uploadPath + "/" + obj.uuid + "_" + obj.fileName)
				     var fileCallPath2 = encodeURIComponent(obj.uploadPath + "/s_" + obj.uuid + "_" + obj.fileName)
					 if(!obj.image){
				         //사용자가 업로드 한 파일의 타입이 이미지가 아니면(excel문서파일,ppt파일),
				         
				         str+="<li data-path='" + obj.uploadPath + "' data-uuid='" + obj.uuid + "' data-fileName='" + obj.fileName + "' data-type='" + obj.image + "'>"
				         str+="<a href='/download?fileName="+ fileCallPath +"'>"+obj.fileName+"</a></li>"
				      }else{
				         //var fileCallPath = encodeURIComponent(obj.uploadPath + "/" + obj.uuid + "_" + obj.fileName)
				         // 사용자가 업로드 한 파일의 타입이 이미지이면 (.jpg,.png,.gif)
				         // img태그를 사용해서 웹브라우저 이미지 출력
				         console.log(fileCallPath);
				         str+="<li data-path='" + obj.uploadPath + "' data-uuid='" + obj.uuid + "' data-fileName='" + obj.fileName + "' data-type='" + obj.image + "'>"
				         str+="<img src='/display?fileName=" + fileCallPath2 + "'></li>"
				      }
				})
				
				$("#uploadResult ul").html(str);
				
				
			}	
	)
	
	
	$(".hbgBtn").on("click",function(e){
		e.stopPropagation();
		$(this).children(".replyMenu").toggle();
		
	})
	
	$(document).click(function(){
	    $('.replyMenu').hide();
	});
	
	
	$("#replyMode").on("click",function(){
		$(this).parents('.replyBoxing').children(".replyBox").hide();
		$(this).parents('.replyBoxing').children("#modeComment").css('display','block');
	})
})   //$(document).ready(function(){ 끝

















