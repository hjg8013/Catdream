<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h1>아이디 찾기 결과</h1>
	</div>
	<div>
		<c:forEach items="${ids}" var="id">
			<input type="text" value="${id.id}">
		</c:forEach>
	</div>
</body>
</html>