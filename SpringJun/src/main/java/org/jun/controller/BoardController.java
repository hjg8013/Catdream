package org.jun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("board")
public class BoardController {

	//게시판 목록 리스트
	@GetMapping("board")
	public String list() {
		return "catdream/board/board";
	}
	
	//글쓰기 화면으로
	@GetMapping("write")
	public String write() {
		System.out.println("board/write");
		
		return "catdream/board/write";
	}
	
	@PostMapping("write")
	public String writePost() {
		
		return "redirect:/board/board";
	}
	
	
	//게시판 목록 리스트에서 제목을 클릭하면
	@GetMapping("boardDetail")
	public String detail() {
		return "catdream/board/boardDetail";
	}

	//글수정 화면
	@GetMapping("modify")
	public String modify() {
		
		return "catdream/board/modify";
	}
	
	
}
