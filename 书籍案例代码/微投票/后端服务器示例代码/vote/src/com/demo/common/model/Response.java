package com.demo.common.model;

import java.util.Map;


public class Response {
	
	/**
	 * 成功
	 */
	public static final int SUCCESS = 1;
	/**
	 * 失败
	 */
	public static final int FAIL = 0;
	
	private Map<String,?> data;
	private Integer code = SUCCESS;
	private String message = "";
	
	 
	
	public Response() {
		super();
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Response(Map<String, ?> data) {
		super();
		this.data = data;
	}

	public Map<String, ?> getData() {
		return data;
	}

	public void setData(Map<String, ?> data) {
		this.data = data;
	}



}
