package com.example.demo.blockchainvoting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.blockchainvoting.entity.BlockchainVotingSignupEntity;
import com.example.demo.blockchainvoting.repo.BlockchainVotingSignupRepoInt;

@Service
public class BlockchainVotingSignupService implements BlockchainVotingSignupServiceInt {

	@Autowired
	private BlockchainVotingSignupRepoInt bvs;

	@Override
	public List<BlockchainVotingSignupEntity> getData() {
		return bvs.findAll();
	}

	@Override
	public void saveData(BlockchainVotingSignupEntity se) {
		bvs.save(se);

	}

	@Override
	public void deleteData(int id) {
		bvs.deleteById(id);

	}

	@Override
	public boolean existsByEmail(String email) {
		return bvs.existsByEmail(email);
	}

	@Override
	public boolean existsByVoterid(String voterid) {
		return bvs.existsByVoterid(voterid);
	}

	@Override
	public boolean existsByWalletaddress(String walletaddress) {
		// TODO Auto-generated method stub
		return bvs.existsByWalletaddress(walletaddress);
	}

	public boolean existsByEmailAndWalletaddress(String email, String wallet) {
		return bvs.existsByEmailAndWalletaddress(email, wallet);
	}

	@Override
	public BlockchainVotingSignupEntity findByEmail(String email) {
		return bvs.findByEmail(email);
	}

	public List<BlockchainVotingSignupEntity> getAllFalse() {
		return bvs.findAllByVerified(false);
	}

	public void approve(int id) {
		BlockchainVotingSignupEntity bse = bvs.findById(id).get();
		bse.setVerified(true);
		bvs.save(bse);
	}

	public List<BlockchainVotingSignupEntity> getAllTrue() {
		return bvs.findAllByVerified(true);
	}

	public void reject(int id) {
		bvs.deleteById(id);
	}
}
