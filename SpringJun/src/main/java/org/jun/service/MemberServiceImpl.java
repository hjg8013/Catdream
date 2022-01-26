package org.jun.service;

import org.jun.domain.MemberDTO;
import org.jun.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberMapper mmapper;
	
	public void insert(MemberDTO mdto) {
		
		mdto.setbirthyymmdd(mdto.getYy(),mdto.getMm(),mdto.getDd());
		
		mmapper.insert(mdto);
	}
}
