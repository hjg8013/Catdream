package org.jun.mapper;

import java.util.ArrayList;

import org.jun.domain.BoardDTO;

public interface BoardMapper {
	public void write(BoardDTO bdto);
	
	public BoardDTO detail(BoardDTO bdto);
	
	public void cntupdate(BoardDTO board);
	
	public void modify(BoardDTO bdto);
	
	public ArrayList<BoardDTO> list();
}
