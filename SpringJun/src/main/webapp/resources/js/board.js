/**
 * 
 */
$(document).ready(function(){
	var actionForm = $("#actionForm");
	// 현재 페이지 번호를 클릭하면 form태그 안에 있는 search
	$(".paginate_button a").on("click",function(e){
		e.preventDefault();
		actionForm.find("input[name='pageNum']").val($(this).attr("href"));
		actionForm.submit();
	})
	
	$(".AS").on("click",function(){
		actionForm.find("input[name='pageNum']").val("1")
	})
	
	var hjwObj = document.getElementsByName("RowCheck");
	var rowCnt = hjwObj.length;

	$("input[name='allCheck']").click(function() {
		var hjw_listArr = $(hjwObj); 
		for (let i = 0; i < hjw_listArr.length; i++) {
			hjw_listArr[i].checked = this.checked;
		}
	});
	$(hjwObj).click(function() {
		if ($(hjwObj.checked).length == rowCnt) {
			$("input[name='allCheck']")[0].checked = true;
		} else {
			$("input[name='allCheck']")[0].checked = false;
		}
	});
})



function deleteValue() {
	var url = "remove"; // Controller로 보내고자 하는 URL (.dh부분은 자신이 설정한 값으로 변경해야됨)
	var valueArr = new Array();
	var list = $("input[name='RowCheck']");
	
	for (var i = 0; i < list.length; i++) {
		if (list[i].checked) { //선택되어 있으면 배열에 값을 저장함
			valueArr.push(list[i].value);
		}
	}
	
	if (valueArr.length == 0) {
		alert("선택된 글이 없습니다.");
	} else {
		confirm("정말 삭제하시겠습니까?");
		$.ajax({
			url : url, // 전송 URL
			type : 'POST', // GET or POST 방식
			traditional : true,
			data : {
				valueArr : valueArr
			// 보내고자 하는 data 변수 설정
			},
			success : function(data) {
				if (data = 1) {
					alert("삭제 성공");
					location.replace("board")
				} else {
					alert("삭제 실패");
				}
			}
		});
	}
}