/**
 * 
 */
$(document).ready(function(){
	let userId = document.querySelector("#userId");
	let userPw = document.querySelector("#userPw");
	let userPwCheck = document.querySelector("userPwCheck");
	let userName = document.querySelector("userName");
	let userYy = document.querySelector("userYy");
	let userMm = document.querySelector("userMm");
	let userDd = document.querySelector("userDd");
	let userGender = document.querySelector("userGender");
	let userEmail = document.querySelector("userEmail");
	let userPhone = document.querySelector("userPhone");
	
	userId.onchange = checkId;
	
	function checkId(){
		console.log(userId.html);
		console.log(isId(userId.html));
		
		if(isId(userId.html)){
			//아이디의 규칙을 지켰을때
			
			
			
			
			
			
		}
	}
	
	//영문자로 시작하는 영문자 또는 숫자 6~20자
	function isId(asValue){
		var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
		
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