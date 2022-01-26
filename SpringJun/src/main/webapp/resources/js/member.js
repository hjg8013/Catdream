/**
 * 
 */
$(document).ready(function(){
	var userId = document.querySelector("#userId");
	var userPw = document.querySelector("#userPw");
	var userPwCheck = document.querySelector("#userPwCheck");
	var userName = document.querySelector("#userName");
	var userYy = document.querySelector("#userYy");
	var userMm = document.querySelector("#userMm");
	var userDd = document.querySelector("#userDd");
	var userGender = document.querySelector("#userGender");
	var userEmail = document.querySelector("#userEmail");
	var userPhone = document.querySelector("#userPhone");
	
	userId.onchange = checkId;
	userPw.onchange = checkPw;
	userPwCheck.onchange = checkPwCheck;
	
	//아이디 정규식 확인
	function checkId(){
		//console.log(userId.value);
		//console.log(isId(userId.value));
		if(isId(userId.value)){
			//아이디의 규칙을 지켰을때
			var str = "";
		}else{
			//아이디의 규칙을 실패했을때
			var str="영문자로 시작하는 영문자 또는 숫자 6~20자";
		}
		$(".memberBox1 h4").html(str);
	}
	
	//비밀번호 정규식 확인
	function checkPw(){
		if(isPw(userPw.value)){
			//비밀번호의 규칙을 지켰을때
			var str = "";
		}else{
			//비밀번호의 규칙을 실패했을때
			var str="최소 8자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자";
		}
		$(".memberBox2 h4").html(str);
	}
	
	//비밀번호 정규식 확인 아직 오류
	function checkPw(){
		console.log(userPw.value);
		if(isPw(userPw.value)){
			//비밀번호의 규칙을 지켰을때
			var str = "";
		}else{
			//비밀번호의 규칙을 실패했을때
			var str="최소 8자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자";
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
		}else{
			//비밀번호의 규칙을 실패했을때
			var str="비밀번호가 같지 않습니다";
		}
		$(".memberBox3 h4").html(str);
	}
	
	
	
	
	
	//영문자로 시작하는 영문자 또는 숫자 6~20자
	function isId(asValue){
		var regExp = /^[A-Za-z]{1}[A-Za-z0-9]{6,19}$/;
		return regExp.test(asValue);
	}
	//최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 아직오류
	function isPw(asValue){
		var regExp = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
		return regExp.test(asValue);
	}
	
	
})

/*
let userId = document.querySelector('#user-id');
    let pw1 = document.querySelector('#user-pw1');
    let pw2 = document.querySelector('#user-pw2');
    let number = document.querySelector('#user-number');
    let bt = document.querySelector('#user-bt');
    let userId1 = document.querySelector('#user-id1');
//커서가 넘어오는 순간
    userId.onchange = checkId;
    pw1.onchange = checkPw;
    pw2.onchange = comparePw;
    number.onchange = compareNumber;
    function checkId(){
      //userId의 길이가 4~15글자가 아닐때
      //alert 메세지 표시

      if(userId){
        if(userId.value.length <4 || userId.value.length > 15){
          alert("4~15자리의 영문과 숫자를 입력하세요")
          userId1.innerHTML = "잘못입력했습니다";
          //select() : 사용자가 기존에 입력한 값을 선택
          userId.select();
        }
      }
    }

    function checkPw(){
      if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상 입력하세요")
        pw1.value=""; //type이 비밀번호면 따로 설정할 필요없음
        pw1.focus();
      }
    }

    function comparePw(){
      if(pw1.value != pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요");
        pw2.value="";
        pw2.focus();
      }
    }

    bt.addEventListener("click", function(){
      //alert("번호전송중");
      number.value = Math.floor(Math.random()*8999)+1000;

    })



*/