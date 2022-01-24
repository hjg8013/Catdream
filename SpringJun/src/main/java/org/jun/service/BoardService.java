package org.jun.service;

import java.util.ArrayList;

import org.jun.domain.BoardDTO;

public interface BoardService {
	
	public void write(BoardDTO bdto);
	
	public BoardDTO detail(BoardDTO bdto);
	
	public void modify(BoardDTO bdto);
	
	public ArrayList<BoardDTO> list();
}
