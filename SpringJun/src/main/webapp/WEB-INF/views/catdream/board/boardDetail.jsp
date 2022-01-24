<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../resources/css/footer.css">
<link rel="stylesheet" type="text/css" href="../resources/css/header.css">
<link rel="stylesheet" type="text/css" href="../resources/css/boardDetail.css">
<title>상세페이지</title>
<link rel="icon" href="resources/img/logo.png" type="resources/img/x-icon">
</head>
<body>
	<div id="wrap">
		<%@ include file="../header.jsp" %>
		<div class="container">
		    <h2 class="notice">공지사항</h2>
		    <div class="board">
		        <div class="top">
		            <h3 class="title">${detail.title}</h3>
		            <span class="writer">캣드림</span>
		        </div>
		        <div class="center">
		            <p class="regdate">Posted at ${detail.regdate}</p>
		            <p class="content">
		                ${detail.content}
		            </p>
		        </div>
		        <div class="bottom">
		            <a href="/board" class="btn" id="btnList">목록보기</a>
		            <a href="/board/modify?bno=${detail.bno}" class="btn" id="btnWrite">글 수정</a>
		            <a href="/board/remove?bno=${detail.bno}" class="btn" id="btnDelete">글 삭제</a>
		        </div>
		    </div>
		</div> <!-- wrap 끝 -->
		<%@ include file="../footer.jsp" %>
	</div>
</body>
</html>