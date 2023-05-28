package com.example.demo.blockchainvoting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="votingidlist")
public class VoterIdEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String voterid;
	public VoterIdEntity() {
		super();
	}
	public VoterIdEntity(int id, String voterid) {
		super();
		this.id = id;
		this.voterid = voterid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getVoterid() {
		return voterid;
	}
	public void setVoterid(String voterid) {
		this.voterid = voterid;
	}
}
