package org.jun.mapper;

import java.util.ArrayList;

import org.jun.domain.MemberDTO;

public interface MemberMapper {
	
	public void insert(MemberDTO mdto);
	
	public MemberDTO login(MemberDTO mdto);
	
	public ArrayList<String> getId();
	
	public int idChk(MemberDTO mdto);
}
