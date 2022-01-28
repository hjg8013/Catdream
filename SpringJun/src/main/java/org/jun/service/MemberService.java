package org.jun.service;

import java.util.ArrayList;

import org.jun.domain.MemberDTO;

public interface MemberService {
	public void insert(MemberDTO mdto);
	
	public MemberDTO login(MemberDTO mdto);
	
	public ArrayList<String> getId();
}
