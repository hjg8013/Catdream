package org.jun.mapper;

import java.util.ArrayList;

import org.jun.domain.BoardDTO;
import org.jun.domain.Criteria;
import org.jun.domain.ReplyDTO;

public interface BoardMapper {
	public void write(BoardDTO bdto);
	
	public void insertSelectKey(BoardDTO board);
	
	public BoardDTO detail(BoardDTO bdto);
	
	public void cntupdate(BoardDTO board);
	
	public void modify(BoardDTO bdto);
	
	public ArrayList<BoardDTO> list(Criteria cri);
	
	public int getTotalCount(Criteria cri);
	
	public void remove(BoardDTO bdto);
	
	//댓글 쓰기
	public void replyWrite(ReplyDTO rdto);
	
	public ArrayList<ReplyDTO> reply(ReplyDTO rdto);
	
	//댓글 수정
	public void modifyReply(ReplyDTO rdto);
	
	//댓글 삭제
	public void deleteReply(ReplyDTO rdto);

}
