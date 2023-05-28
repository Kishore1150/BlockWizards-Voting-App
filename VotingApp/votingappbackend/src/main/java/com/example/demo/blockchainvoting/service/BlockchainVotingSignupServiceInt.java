package com.example.demo.blockchainvoting.service;

import java.util.List;

import com.example.demo.blockchainvoting.entity.BlockchainVotingSignupEntity;

public interface BlockchainVotingSignupServiceInt {
	public List<BlockchainVotingSignupEntity> getData();
	public void saveData(BlockchainVotingSignupEntity se);
	public void deleteData(int id);
	public boolean existsByEmail(String email);
	public boolean existsByVoterid(String voterid);
	public boolean existsByWalletaddress(String walletaddress);
	public BlockchainVotingSignupEntity findByEmail(String email);
}
