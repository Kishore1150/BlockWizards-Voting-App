package com.example.demo.blockchainvoting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.blockchainvoting.repo.VoterIdRepoInt;

@Service
public class VoterIdService implements VoterIdServiceInt {

	@Autowired
	private VoterIdRepoInt vri;
	
	@Override
	public boolean existsByVoterid(String voterid) {
		boolean check = vri.existsByVoterid(voterid);
		if(check)
			return true;
		else
			return false;
	}

}
