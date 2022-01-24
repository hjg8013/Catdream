package org.jun.service;

import java.util.ArrayList;

import org.jun.domain.BoardDTO;
import org.jun.domain.Criteria;
import org.jun.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardMapper bmapper;
	
	@Transactional
	public void write(BoardDTO bdto) {
		bmapper.write(bdto);
	}
	
	public BoardDTO detail(BoardDTO bdto) {
		
		return bmapper.detail(bdto);
	}
	
	public void modify(BoardDTO bdto) {
		bmapper.modify(bdto);
	}
	public ArrayList<BoardDTO> list(Criteria cri) {
		return bmapper.list(cri);
	
	}
	public int getTotalCount(Criteria cri) {
		return bmapper.getTotalCount(cri);
	}
}
