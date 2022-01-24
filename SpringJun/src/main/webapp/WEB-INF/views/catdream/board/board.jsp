<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>공지사항</title>
    <link rel="icon" href="resources/img/logo.png" type="resources/img/x-icon">
    <link rel="stylesheet" href="/resources/css/badStyle.css">
    <link rel="stylesheet" href="/resources/css/header.css">
    <link rel="stylesheet" href="/resources/css/footer.css">
</head>
<body>

<div id="wrap">
		<%@ include file="../header.jsp"%>


		<div id="container">
			<div id="containerIn">
				<h1 class="conTitle">공지사항</h1>
				<table class="board">
					<thead>
						<tr>
							<th class="mainNum">게시판 번호</th>
							<th class="mainTitle">제목</th>
							<th class="mainUser">작성자</th>
							<th class="mainDate">작성일</th>
							<th class="mainCheck">조회수</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${list}" var="board">
							<tr>
								<td class="gong">${board.bno}</td>
								<td class="title"><a href="/board/detail?bno=${board.bno}">${board.title}</a></td>
								<td class="user">${board.writer}</td>
								<td class="date">${board.regdate}</td>
								<td class="check">${board.cnt}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>

				<div id="boardWrite">
					<a href="/board/write">글쓰기</a>
				</div>

			</div>
			<!--#containerIn-->
		</div>
		<!--#container-->
		<%@ include file="../footer.jsp"%>
	</div> <!-- #wrap -->
</body>
</html>