
$(document).ready(function(){
   //파일의 크기와 확장자를 검사하는 함수 선언
   //서버에서 설정해 놓은 파일크기 설정
   var maxSize=5242880; //5MB
   //서버에서 허용 가능한 확장자 설정(정규식)
   var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
   
                         //파일크기 , 확장자
   function checkExtension(fileSize,fileName){
      //사용자가 선택한 파일의 크기가 서버에서 설정해 놓은 파일의 크기보다 이상이면
      if(fileSize>=maxSize){
         alert("파일 사이즈 초과");
         return false;
      }
      //사용자가 선택한 파일의  확장자가 서버에서 설정해 놓은 파일의 확장자와 일치하지 않으면
      if(regex.test(fileName)){
         alert("해당 종류의 파일은 업로드 할 수 없습니다.");
         return false;
      }
      return true;
   }
   
   
   var formObj = $("form[role='form']")
   // 글쓰기 버튼을 클릭하면
   $("input[type='submit']").on("click",function(e){
      e.preventDefault();
      var str="";
      // li태그에 있는 data선택자를 이용하여 input태그의 value값으로 세팅
      $("#pimage ul li").each(function(i,obj){
         console.log(obj);
         // data선택자를 이용하여 input태그의 value값으로 셋팅
         /*
          * data함수
          * <span>
          * $("span").data("age,13") => <span data-age="13"> data함수 괄호안에 매개변수가 두개면 setter
          * <span data-age="13">
          * $("span").data("age") => 13 data함수 괄호안에 매개변수가 하나면 getter data-type같이 속성에서 가져옴
          * $
          * */
         str+="<input type='text' name='pname' value='"+$(obj).data("pname")+"'>"
         str+="<input type='text' name='puuid' value='"+$(obj).data("puuid")+"'>"
         str+="<input type='text' name='puploadpath' value='"+$(obj).data("puploadpath")+"'>"
         str+="<input type='text' name='pimage' value='"+$(obj).data("pimage")+"'>"
      })
    
      formObj.append(str).submit();// html은 덮어쓰기가 되는 것이니 append 사용
      
   })
   
   
   // 파일 선택의 내용이 변경되면
   $("input[type='file']").on("change",function(e){
      //가상의 form태그
      var formData = new FormData();
      var inputFile = $("input[name='uploadFile']");
      var files = inputFile[0].files;
   
      
      for(var i=0;i<files.length;i++){
         //console.log("aaaa");
         //파일의 크기가 이상이면 밑에 있는거 하지마라!
         if(!checkExtension(files[i].size,files[i].name)){
            return false;
         }
         formData.append("uploadFile",files[i]);
         
      }
      
      //ajax를 이용해서.......
      //formData 자체를 데이터로 전송하고 formData를 데이터로 전송할 때에는
      //processData,contentType는 false로해야함
      $.ajax({
         url:"/product/productWriteAction",
         type:"post",
         data:formData,
         processData:false, 
         contentType:false,
         success:function(result){ //사용자가 선택한 파일을 원하는 경로에 성공적으로 업로드 한 후
            // showUploadedFile함수 호출
            showUploadedFile(result);
         }
      })//$.ajax 끝
   })
})// $(document).ready 끝
//사용자가 선택한 파일을 원하는 경로에 성공적으로 업로드 한 후 웹브라우저에 파일을 띄워라에 대한 함수 선언(showUploadedFile)
function showUploadedFile(uploadResultArr){
   
   var str="";                    //번째,값
   
   $(uploadResultArr).each(function(i,obj){ //each jquery의 반복문
      console.log(obj);
      
      var fileCallPath = encodeURIComponent(obj.puploadpath + "/" + obj.puuid + "_" + obj.pname)
      var fileCallPath2 = encodeURIComponent(obj.puploadpath + "/s_" + obj.puuid + "_" + obj.pname)
      if(!obj.pimage){
         //사용자가 업로드 한 파일의 타입이 이미지가 아니면(excel문서파일,ppt파일),
         console.log("이미지 파일 아님");
         str+="<li data-path='" + obj.puploadpath + "' data-puuid='" + obj.puuid + "' data-pname='" + obj.pname + "' data-type='" + obj.pimage + "'>"
         str+="<a href='/product/download?pname="+ fileCallPath +"'>"+obj.pname+"</a></li>"
      }else{
         //var fileCallPath = encodeURIComponent(obj.uploadPath + "/" + obj.uuid + "_" + obj.fileName)
         // 사용자가 업로드 한 파일의 타입이 이미지이면 (.jpg,.png,.gif)
         // img태그를 사용해서 웹브라우저 이미지 출력
         console.log(fileCallPath);
         console.log(fileCallPath2);
         str+="<li data-path='" + obj.puploadpath + "' data-puuid='" + obj.puuid + "' data-pname='" + obj.pname + "' data-type='" + obj.pimage + "'>"
         str+="<img src='/product/display?pname=" + fileCallPath2 + "'></li>"
      }
    })
    
   $("#pimage ul").html(str);
}
