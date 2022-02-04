/**
 * 
 */
	var boolarr = [false,false,false,false,false,false,false];
	var booltrue = false;
	var idbool = [false,false];
	
$(document).ready(function(){
	var userId = document.querySelector("#userId");
	var userPw = document.querySelector("#userPw");
	var userPwCheck = document.querySelector("#userPwCheck");
	var userName = document.querySelector("#userName");
	var userYy = document.querySelector("#userYy");
	var userMm = document.querySelector("#userMm");
	var userDd = document.querySelector("#userDd");
	var userBirth = document.querySelector("#userBirth");
	var userGender = document.querySelector("#userGender");
	var userEmail = document.querySelector("#userEmail");
	var userPhone = document.querySelector("#userPhone");
	
	console.log(boolarr[0]);
	console.log(boolarr[1]);
	console.log(boolarr[2]);
	console.log(boolarr[3]);
	console.log(boolarr[4]);
	console.log(boolarr[5]);
	console.log(boolarr[6]);
	
	userId.onchange = checkId;
	userPw.onchange = checkPw;
	userPwCheck.onchange = checkPwCheck;
	userName.onchange = checkName;
	userYy.onchange = chaeckBirth;
	userMm.onchange = chaeckBirth;
	userDd.onchange = chaeckBirth;
	userGender.onchange = chaeckGender;
	userEmail.onchange = chaeckEmail;
	userPhone.onchange = chaeckPhone;
	

	
})

//모든 조건을 충족했는지 확인하는 함수
function boolarrcheck(){
	console.log("boolarrcheck실행");
	console.log(boolarr[0]);
	console.log(boolarr[1]);
	console.log(boolarr[2]);
	console.log(boolarr[3]);
	console.log(boolarr[4]);
	console.log(boolarr[5]);
	console.log(boolarr[6]);
	
	var count =0;
	for(var i=0;i<boolarr.length;i++){
		console.log("반복문");
		if(boolarr[i]){
			count++;
		}
		console.log("count="+count);
		if(count == 7){
			booltrue=true;			
		}
	}
	if(booltrue){
		//실행
		$(".memberButton").prop('disabled', false);
		//console.log("정상실행");
	}else{
		//종료
		$(".memberButton").prop('disabled', true);
		//console.log("비정상");
	}
}
//아이디 정규식 확인
function checkId(){
	//console.log(userId.value);
	//console.log(isId(userId.value));
	/*
	1.type은 get이나 post 같은 http method를 나타낸다.
	2.url는 데이터를 받아올 페이지다.
	3.data는 요청시에 함께 보낼 파라미터들이다.  데이터베이스 DTO의 이름 : html에 작성되어있는 id.val
	4.dataType은 받아올 데이터의 형식인데,      success가 작동된다  result 값을 data로 가져온다
	5.success는 성공시에 수행할 핸들러를 받는다.
	6.error는 실패시에 수행할 핸들러를 받는다.
	 * */

	$.ajax({
        type:"post",
        url: "/idChk",
        data: {'id':$("#userId").val()},
        dataType: "json",
        success : function(data) {
        	if(data == 1){
        		//alert("중복된 아이디입니다.");
        		idbool[0] = false;
        		//console.log("중복된아이디0"+idbool[0]);
        		return false;
        	}else if(data == 0 ){
        		//alert("사용가능한 아이디입니다.");
        		idbool[0] = true;
        		//console.log("사용가능한 아이디0"+idbool[0]);
        	}
        }
		, error : function() {
			alert('서버 통신 실패');
		}
    });
	
	if(isId(userId.value)){
		//아이디의 규칙을 지켰을때
		var str = "";
		idbool[1] = true;
		//console.log("규칙을지킨아이디1"+idbool[1]);
	}else{
		//아이디의 규칙을 실패했을때
		var str="영문자로 시작하는 영문자 또는 숫자 7~20자";
		idbool[1] = false;
		//console.log("규칙을안지킨아이디1"+idbool[1]);

	}
	//아이디의 규칙을 지키고 데이터베이스에 중복이 안되었을때
	if(idbool[0] == true && idbool[1] == true){
		boolarr[0] = true;	
		boolarrcheck();
	}else{
		boolarr[0] = false;	
	}
	//오류창을 띄운다
	$(".memberBox1 h4").html(str);
}

//비밀번호 정규식 확인
function checkPw(){
	console.log(userPw.value);
	console.log(isPw(userPw.value));
	if(isPw(userPw.value)){
		//비밀번호의 규칙을 지켰을때
		var str = "";
		boolarr[1] = true;
		boolarrcheck();
	}else{
		//비밀번호의 규칙을 실패했을때
		var str="숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상";
		boolarr[1] = false;
		boolarrcheck();
	}
	$(".memberBox2 h4").html(str);
}

//비밀번호가 같은지 확인하기
function checkPwCheck(){
	console.log(userPw.value);
	console.log(userPwCheck.value);
	if(userPw.value==userPwCheck.value){
		//비밀번호가 같습니다
		var str = "";
		boolarr[2] = true;
		boolarrcheck();
	}else{
		//비밀번호의 규칙을 실패했을때
		var str="비밀번호가 같지 않습니다";
		boolarr[2] = false;
		boolarrcheck();
	}
	$(".memberBox3 h4").html(str);
}

//이름이 비어있다면
function checkName(){
	if(userName.value!=""){
		//이름을 적었다면
		var str = "";
		boolarr[3] = true;
		boolarrcheck();
	}else{
		//이름이 비어있다면
		var str = "이름을 적지 않았습니다";
		boolarr[3] = false;
		boolarrcheck();
	}
	$(".memberBox4 h4").html(str);
}
//날짜를 입력
function chaeckBirth(){
	userBirth.value = userYy.value+userMm.value+userDd.value;
}
// 성별을 확인
function chaeckGender(){
	if(userGender.value != "none"){
		//성별을 선택했을때
		var str = "";
		boolarr[4] = true;
		boolarrcheck();
	}else{
		//성별을 선택을 안했을때
		var str="성별을 선택해주세요";
		boolarr[4] = false;
		boolarrcheck();
	}
	$(".memberBox6 h4").html(str);
}
//이메일 확인
function chaeckEmail(){
	if(isEmail(userEmail.value)){
		//이메일을 정상
		var str = "";
		boolarr[5] = true;
		boolarrcheck();
	}else{
		//이메일의 형식이 아닐때
		var str="정상적인 이메일의 형식이 아닙니다";
		boolarr[5] = false;
		boolarrcheck();
	}
	$(".memberBox7 h4").html(str);
}
//휴대폰 확인
function chaeckPhone(){
	if(isPhone(userPhone.value)){
		//휴대폰 정상
		var str = "";
		boolarr[6] = true;
		boolarrcheck();
	}else{
		//휴대폰 형식이 아닐때
		var str="정상적인 휴대폰번호가 아닙니다";
		boolarr[6] = false;
		boolarrcheck();
	}
	$(".memberBox8 h4").html(str);
}



//정규식 처리

//영문자로 시작하는 영문자 또는 숫자 6~20자 6자는 오류
function isId(asValue){
	var regExp = /^[A-Za-z]{1}[A-Za-z0-9]{6,19}$/;
	return regExp.test(asValue);
}
//숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
function isPw(asValue){
	var regExp = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{7,}$/;
	return regExp.test(asValue);
}
//이메일 형식 확인
function isEmail(asValue){
	var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue);
}
//휴대폰 정규식
function isPhone(asValue){
	var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
	return regExp.test(asValue);
}


