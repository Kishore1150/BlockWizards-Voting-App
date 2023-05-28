package com.example.demo.blockchainvoting.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.blockchainvoting.entity.BlockchainVotingCanditateCredential;
@Repository
public interface BlockchainVotingCanditateRepoInt extends JpaRepository<BlockchainVotingCanditateCredential, String> {

}
