package com.example.demo.blockchainvoting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="blockchainvotingsignup")
public class BlockchainVotingLoginEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String voterid;
	private String password;
	private String walletaddress;
	private boolean checkbox;
	private boolean verified;
	public BlockchainVotingLoginEntity() {
		super();
	}
	
	public boolean isVerified() {
		return verified;
	}

	public void setVerified(boolean verified) {
		this.verified = verified;
	}

	public BlockchainVotingLoginEntity(int id, String name, String email, String voterid, String password,
			String walletaddress, boolean checkbox, boolean verified) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.voterid = voterid;
		this.password = password;
		this.walletaddress = walletaddress;
		this.checkbox = checkbox;
		this.verified = verified;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getWalletaddress() {
		return walletaddress;
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
