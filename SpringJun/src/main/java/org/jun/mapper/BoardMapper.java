package org.jun.mapper;

import org.jun.domain.BoardDTO;

public interface BoardMapper {
	public void write(BoardDTO bdto);
	
	public BoardDTO detail(BoardDTO bdto);
	
	public void modify(BoardDTO bdto);
}
