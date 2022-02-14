package org.jun.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	// 주석 시험
	@GetMapping("/subcatdream")
	public String subcatdream() {
		logger.info("catdream 실행됨."); // console 역할

		return "catdream/subindex";
	}

	   
}
