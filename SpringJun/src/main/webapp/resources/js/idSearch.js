/**
 * 
 */
$(document).ready(function(){
	console.log("idSearch실행");
	
	//addJavascript('./resources/js/email.js'); //경로의 js를 실행한다
	
	console.log("idSearch실행Email");
	Email(); //실행오류 리턴으로 값을 가져오면 제일좋다
	console.log("Email();"+Email());
});

//addJavascript('./resources/js/test.js');
//파일을 그냥 실행시켜버림
function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	console.log(th)
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

