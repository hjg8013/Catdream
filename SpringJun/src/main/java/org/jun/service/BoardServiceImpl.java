package org.jun.service;

import org.jun.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardMapper bmapper;
	
	
}
