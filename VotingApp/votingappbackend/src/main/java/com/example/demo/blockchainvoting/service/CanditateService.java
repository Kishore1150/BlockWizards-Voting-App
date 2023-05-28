package com.example.demo.blockchainvoting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.blockchainvoting.entity.BlockchainVotingCanditateCredential;
import com.example.demo.blockchainvoting.entity.BlockchainVotingContent;
import com.example.demo.blockchainvoting.repo.BlockchainVotingCanditateRepoInt;

@Service
public class CanditateService {
    @Autowired
    private BlockchainVotingCanditateRepoInt bcvcr;

    public BlockchainVotingCanditateCredential getCanditate(String walletaddress) {
        BlockchainVotingCanditateCredential bvcc = bcvcr.findById(walletaddress).get();
        if (bvcc == null)
            return null;
        return bvcc;
    }

    public BlockchainVotingCanditateCredential addManifesto(String walletaddress, BlockchainVotingContent bvc) {
        BlockchainVotingCanditateCredential bvcc = bcvcr.findById(walletaddress).get();
        bvcc.getContents().add(bvc);
        return bcvcr.save(bvcc);
    }

    public String addCandidate(BlockchainVotingCanditateCredential bvcc) {
        String walletaddress = bvcc.getWalletaddress();
        Optional<BlockchainVotingCanditateCredential> bvcc1 = bcvcr.findById(walletaddress);
        if (bvcc1.isEmpty()) {
            bcvcr.save(bvcc);
            return "Candiate Added";
        }
        return "Candidate already Exists";
    }

    public List<BlockchainVotingCanditateCredential> getAllCanditate() {
        return bcvcr.findAll();
    }

}