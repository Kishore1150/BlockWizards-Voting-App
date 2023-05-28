package com.example.demo.blockchainvoting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.blockchainvoting.entity.BlockchainVotingCanditateCredential;
import com.example.demo.blockchainvoting.entity.BlockchainVotingContent;
import com.example.demo.blockchainvoting.service.CanditateService;
import java.util.*;

@RestController
@RequestMapping("/canditate")
@CrossOrigin("*")
public class CanditateController {
	@Autowired
	private CanditateService canditateService;

	@GetMapping("/")
	public String welcome() {
		return "Hii This is CanditateController";
	}

	@GetMapping("/all")
	public List<BlockchainVotingCanditateCredential> getAllCanditate() {
		return canditateService.getAllCanditate();
	}

	@PostMapping("/addcanditate")
	public String addCandidate(@RequestBody BlockchainVotingCanditateCredential bvcc) {
		return canditateService.addCandidate(bvcc);
	}

	@GetMapping("/getcaditate")
	public BlockchainVotingCanditateCredential getCanditate(@RequestParam String walletaddress) {
		return canditateService.getCanditate(walletaddress);
	}

	@PostMapping("/addmanifesto")
	public BlockchainVotingCanditateCredential addManifesto(@RequestParam String walletaddress,
			@RequestBody BlockchainVotingContent bvc) {
		return canditateService.addManifesto(walletaddress, bvc);
	}

}
