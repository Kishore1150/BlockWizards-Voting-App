package com.example.demo.blockchainvoting.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.blockchainvoting.entity.BlockchainVotingSignupEntity;
import java.util.List;
@Repository
public interface BlockchainVotingSignupRepoInt extends JpaRepository<BlockchainVotingSignupEntity, Integer> {

	public boolean existsByEmail(String email);
	public boolean existsByVoterid(String voterid);
	public boolean existsByWalletaddress(String walletaddress);
	public boolean existsByEmailAndWalletaddress(String email,String wallet);
	public BlockchainVotingSignupEntity findByEmail(String email);
	public List<BlockchainVotingSignupEntity> findAllByVerified(boolean verified);
}
