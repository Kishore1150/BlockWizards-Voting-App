package com.example.demo.blockchainvoting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "blockchainvotingcontent")
public class BlockchainVotingContent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String imgurl;
	private String description;

	public BlockchainVotingContent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BlockchainVotingContent(int id, String title, String imgurl, String description) {
		super();
		this.id = id;
		this.title = title;
		this.imgurl = imgurl;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
