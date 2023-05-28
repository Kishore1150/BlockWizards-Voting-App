package com.example.demo.blockchainvoting.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "blockchainvotingcanditatecredential")
public class BlockchainVotingCanditateCredential {
	@Id
	private String walletaddress;
	private String name;
	private String imgurl;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_cid", referencedColumnName = "walletaddress")
	private List<BlockchainVotingContent> contents = new ArrayList<>();

	public BlockchainVotingCanditateCredential() {
		super();
	}

	public BlockchainVotingCanditateCredential(String name, String imgurl, String walletaddress,
			List<BlockchainVotingContent> contents) {
		this.name = name;
		this.imgurl = imgurl;
		this.walletaddress = walletaddress;
		this.contents = contents;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public String getWalletaddress() {
		return walletaddress;
	}

	public void setWalletaddress(String walletaddress) {
		this.walletaddress = walletaddress;
	}

	public List<BlockchainVotingContent> getContents() {
		return contents;
	}

	public void setContents(List<BlockchainVotingContent> contents) {
		this.contents = contents;
	}

}
