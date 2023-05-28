package com.example.demo.blockchainvoting.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.blockchainvoting.entity.VoterIdEntity;

@Repository
public interface VoterIdRepoInt extends JpaRepository<VoterIdEntity, Integer> {
	public boolean existsByVoterid(String voterid);
}