<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../resources/css/footer.css">
<link rel="stylesheet" type="text/css" href="../resources/css/header.css">
<link rel="icon" href="/resources/img/logo.png" type="image/x-icon">
<script type="text/javascript" src="//code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="../resources/js/productAjax.js"></script>
<title>상품올리기</title>
</head>
<body>
	<div id="wrap">
		<%@ include file="./header.jsp" %>
		<div id="container">
        	<h2 class="notice">상품 올리기</h2>
        	<div class="term"><hr></div>
        	
	        <div class="product">
	            <form id="productForm" role="form" action="/product/productWrite" method="post">
	            	 <div class="pname">
	            	 	<label for="pname">상품 이름</label>
	            	 	<div>
			            	<input type="text" name="panme">
	            	 	</div>
	            	 </div>
	            	 
	            	 <div id="pimage">
	            	 	<label>상품 이미지</label>
	            	 	<ul></ul>
	            	 </div>
	            	 
	            	 <div id="pprice">
	            	 	<label>상품 가격</label>
	            	 	<ul></ul>
	            	 </div>
	            	 
	            	 <div id="pbutton">
	            	 	<input type="file" name="uploadFile" value="파일변경">
	                 	<input type="submit" class="pbtn" value="등록">
	                 </div>
	            </form>
	        </div>
    	</div>
		<%@ include file="./footer.jsp" %>
	</div>
</body>
</html>