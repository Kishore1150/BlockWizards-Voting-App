package com.example.demo.blockchainvoting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="blockchainvotingsignup")
public class BlockchainVotingSignupEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String image;
	private String voterid;
	private String walletaddress;
	private boolean checkbox;
	private boolean verified;
	public BlockchainVotingSignupEntity() {
		super();
	}

	public boolean isVerified() {
		return verified;
	}

	public void setVerified(boolean verified) {
		this.verified = verified;
	}

	public BlockchainVotingSignupEntity(int id, String name, String email, String voterid,String image,
			String walletaddress, boolean checkbox, boolean verified) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.voterid = voterid;
		this.walletaddress = walletaddress;
		this.checkbox = checkbox;
		this.verified = verified;
		this.image = image;

	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getVoterid() {
		return voterid;
	}
	public void setVoterid(String voterid) {
		this.voterid = voterid;
	}
	public String getWalletaddress() {
		return walletaddress;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getImage() {
		return image;
	}
	public void setWalletaddress(String walletaddress) {
		this.walletaddress = walletaddress;
	}
	public boolean isCheckbox() {
		return checkbox;
	}
	public void setCheckbox(boolean checkbox) {
		this.checkbox = checkbox;
	}
}
