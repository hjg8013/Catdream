package org.jun.controller;

import org.jun.domain.BoardDTO;
import org.jun.domain.ReplyDTO;
import org.jun.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("reply")
public class ReplyController {
	
	@Autowired
	private BoardService bservice;
	
	@PostMapping("write/{bno}")
	public String detail(BoardDTO bdto,ReplyDTO rdto,Model model,@PathVariable int bno) {
		model.addAttribute("detail", bservice.detail(bdto));
		bservice.replyWrite(rdto);
		
		return "redirect:/board/boardDetail?bno="+bno;
	}
	
	@PostMapping("modify/{bno}")
	public String modify(BoardDTO bdto,ReplyDTO rdto,Model model,@PathVariable int bno) {
		
		bservice.modifyReply(rdto);
		
		return "redirect:/board/boardDetail?bno="+bno;
	}
	
	@GetMapping("delete/{bno}")
	public String modify(BoardDTO bdto,ReplyDTO rdto,@PathVariable int bno) {
		
		bservice.deleteReply(rdto);
		
		return "redirect:/board/boardDetail?bno="+bno;
	}
}
