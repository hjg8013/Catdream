package org.jun.service;

import java.util.ArrayList;

import org.jun.domain.AttachFileDTO;
import org.jun.domain.BoardDTO;
import org.jun.domain.Criteria;
import org.jun.domain.ReplyDTO;

public interface BoardService {
	
	public void write(BoardDTO bdto);
	
	public BoardDTO detail(BoardDTO bdto);
	
	public void modify(BoardDTO bdto);
	
	public ArrayList<BoardDTO> list(Criteria cri);
	
	public int getTotalCount(Criteria cri);
	
	public void remove(BoardDTO bdto);
	
	// 게시물 선택삭제
	public void ajaxRemove(String remove);
	
	public void replyWrite(ReplyDTO rdto);
	
	public ArrayList<ReplyDTO> reply(ReplyDTO rdto);
	
	//게시판 상세페이지에 업로드된 파일 이미지 출력
	public ArrayList<AttachFileDTO> fileList(int bno); 
	
	public void modifyReply(ReplyDTO rdto);
	
	public void deleteReply(ReplyDTO rdto);
}
