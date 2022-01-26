package org.jun.service;

import org.jun.domain.MemberDTO;

public interface MemberService {
	public void insert(MemberDTO mdto);
	
	public MemberDTO login(MemberDTO mdto);
	
}
