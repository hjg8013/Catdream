package org.jun.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CatdreamController {
	private static final Logger logger = LoggerFactory.getLogger(CatdreamController.class);
	@RequestMapping(value = "/catdream", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String catdream() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/index";
	}
	
	@RequestMapping(value = "/subcatdream", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String subcatdream() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/subindex";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String login() {
	   logger.info("login 실행됨."); // console 역할
    return "catdream/login";
	}
	   
	@RequestMapping(value = "/member", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할	
	public String member() {
		logger.info("member 실행됨."); // console 역할
		return "catdream/member";
	}
	   
	@RequestMapping(value = "/board", method = RequestMethod.GET)
	public String board() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/board";
	}
	   
	@RequestMapping(value = "/boardDetail", method = RequestMethod.GET) 
	public String boardDetail() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/boardDetail";
	}
	   
	   
}
