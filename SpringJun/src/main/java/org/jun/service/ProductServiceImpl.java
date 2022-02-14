package org.jun.service;

import java.util.ArrayList;

import org.jun.domain.Criteria;
import org.jun.domain.ProductDTO;
import org.jun.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductMapper pmapper;
	
	public void productWrite(ProductDTO Cdto) {
		
	}
	

}
