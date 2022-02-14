package org.jun.controller;

import org.jun.domain.ProductDTO;
import org.jun.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("product")
public class ProductController {
	
	@Autowired
	private ProductService pservice;
	
	// 상품올리기
	@GetMapping("productWrite")
	public String productWrite() {
		System.out.println("productWrite");
		
		return "catdream/productWrite";
	}
	
	@PostMapping("productWrite")
	public String productWritePost(ProductDTO pdto) {
		
		pservice.productWrite(pdto);
		System.out.println();
		return "redirect:/catdream/subindex";
	}
}
