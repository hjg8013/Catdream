package org.jun.service;

import org.jun.domain.BoardDTO;

public interface BoardService {
	
	public void write(BoardDTO bdto);
	
	public BoardDTO detail(BoardDTO bdto);
}
