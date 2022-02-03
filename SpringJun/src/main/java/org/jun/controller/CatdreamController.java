package org.jun.controller;

import javax.servlet.http.HttpSession;

import org.jun.domain.MemberDTO;
import org.jun.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CatdreamController {
	private static final Logger logger = LoggerFactory.getLogger(CatdreamController.class);
	@Autowired
	private MemberService mservice;
	
	@RequestMapping(value = "/catdream", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String catdream() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/index";
	}
	
	// 주석 시험
	@RequestMapping(value = "/subcatdream", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String subcatdream() {
		logger.info("catdream 실행됨."); // console 역할
		return "catdream/subindex";
	}

	// 주석 시험
	@RequestMapping(value = "/login", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String login() {
		logger.info("login 실행됨."); // console 역할
		return "catdream/login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)  // 웹브라우저를 분석해주는 역할
	public String login(MemberDTO mdto,HttpSession session) {
	   logger.info("post-login 실행됨."); // console 역할
	   
	   MemberDTO login= mservice.login(mdto);
	   logger.info("MemberDTO안의 데이터 출력"+login);
	   
		session.setAttribute("login", login); //로그아웃이나 웹브라우저를 닫지않는이상 데이터가 사라지지 않는다

		if(session.getAttribute("login")!=null) {
			//main페이지로 이동
			return "redirect:/catdream";
			
		}else { //session영역에 login이라는 변수에 값이 없으면(null)
			//다시 로그인 할 수 있게 로그인 페이지로 이동
			return "redirect:/login";
		}
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할
	public String logout(HttpSession session) {
	   logger.info("get-logout 실행됨."); // console 역할
	   session.invalidate();
	   return "redirect:/catdream";
	   
	   
	}
	
	//,produces={MediaType.APPLICATION_JSON_UTF8_VALUE}
	@RequestMapping(value = "/member", method = RequestMethod.GET)  // 웹브라우저를 분석해주는 역할	
	public String member() {
		logger.info("get-member 실행됨."); // console 역할
		//logger.info("mservice.getId()를 실행함."+mservice.getId()); //아이디의 값을 잘 가져온다
		return "catdream/member";
	}
	
	@RequestMapping(value = "/member", method = RequestMethod.POST)  // 웹브라우저를 분석해주는 역할	
	public String member(MemberDTO mdto) {
		logger.info("post-member 실행됨."); // console 역할

		//if(mdto.getId()==mservice.getId()) {
		//	//여기서 비교는 가능한데 원하는 방법은아니다
		//}
		mservice.insert(mdto);			

		return "redirect:/catdream";
	}
	   
	
	
	
	//보이나?
	// 나도 한거같아
	//이런식으로 수정하는거임
	   
}
