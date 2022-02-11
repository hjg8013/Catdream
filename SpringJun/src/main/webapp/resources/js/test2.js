/**
 * 
 */
$(document).ready(function(){
	
	console.log("test2실행");
	
	addJavascript('./resources/js/test.js');
	
	//Email();
	
});

//addJavascript('./resources/js/test.js');
//파일을 그냥 실행시켜버림
function addJavascript(jsname) {

	var th = document.getElementsByTagName('head')[0];

	var s = document.createElement('script');

	s.setAttribute('type','text/javascript');

	s.setAttribute('src',jsname);
	

	th.appendChild(s);

}

