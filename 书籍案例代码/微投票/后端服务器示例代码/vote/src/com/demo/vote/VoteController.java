package com.demo.vote;

import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.demo.common.model.Response;
import com.demo.common.model.Vote;
import com.demo.common.model.VoteItem;
import com.demo.common.model.VoteResult;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

/**
 * 本 demo 仅表达最为粗浅的 jfinal 用法，更为有价值的实用的企业级用法
 * 详见 JFinal 俱乐部: http://jfinal.com/club
 * 
 * VoteController
 * 所有 sql 与业务逻辑写在 Model 或 Service 中，不要写在 Controller 中，养成好习惯，有利于大型项目的开发与维护
 */
public class VoteController extends Controller {
	public void index() {
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}
	
	public void result() {
		String voteId = getPara("voteid");
		Vote vote = Vote.dao.findById(voteId);
		List<Record> results = new ArrayList<Record>();
		List<Record> VoteItems = VoteItem.dao.getList(voteId);
		List<Record> VoteResults = VoteResult.dao.getResults(voteId);
		for(Record item : VoteItems){
			for(Record result : VoteResults){
				if(item.get("id") == result.getLong("vote_item_id")){
					item.set("counts", result.getLong("cnt"));
					break;
				}
			}
			results.add(item);
		}
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("vote",vote);
		data.put("results",results);
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}	
	public void list() {
		String openId = getPara("openid");
		List<Vote> votes = Vote.dao.getList(openId, 1, 10).getList();
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("votes",votes);
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}

	public void detail() {
		String voteId = getPara("voteid");
		Vote vote = Vote.dao.findById(voteId);
		List<VoteItem> VoteItems = VoteItem.dao.findVoteItemByVoteId(voteId);
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("vote",vote);
		data.put("voteItems",VoteItems);
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}	
		
	public void add() {
		Vote vote = new Vote();
		vote.setTitle(getPara("title"));
		vote.setOpenid(getPara("openid"));
		vote.setSingleSelect(getParaToInt("single"));
		vote.setCreateTime(new Date());
		vote.save();
		Long id = vote.getId();
		Enumeration<String> paras = getParaNames();
		while(paras.hasMoreElements()) {
			String p = paras.nextElement();
			if(p.startsWith("item"))
				new VoteItem().setItem(getPara(p)).setVoteId(id).setCreateTime(new Date()).save();
		}
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("提交成功");
		response.setData(data);
		renderJson(response);
	}
	
	
	public void vote() {

		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("提交成功");

		Long voteId= getParaToLong("voteid");
		String openId = getPara("openid");

		Vote vote = Vote.dao.findById(voteId);
		if(vote == null ){
			response.setCode(Response.FAIL);
			response.setMessage("投票的主题不存在，id="+voteId);
			renderJson(response);
			return;
		}
		if(vote.getSingleSelect()==1){
			List<VoteResult> voteResults = VoteResult.dao.findResultByVoteIdAndOepnId(voteId, openId);
			if(voteResults!=null && voteResults.size()>=1){
				response.setCode(Response.FAIL);
				response.setMessage("你已经投过票了！");
				renderJson(response);
				return;
			}
		}
		
		Enumeration<String> paras = getParaNames();
		while(paras.hasMoreElements()) {
			String p = paras.nextElement();
			if(p.startsWith("vote_item_id")){
				VoteResult voteResult = new VoteResult();
				voteResult.setOpenid(openId).setVoteId(voteId).setVoteItemId(getParaToLong(p)).setCreateTime(new Date()).save();
			}
		}
		
		response.setCode(Response.SUCCESS);
		response.setMessage("投票成功了！");
		response.setData(data);
		renderJson(response);
	}	
	
	
//======================================	
	
	public void save() {
//		getModel(Vote.class).save();
//		redirect("/vote");
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}
	
	public void edit() {
//		setAttr("vote", Vote.dao.findById(getParaToInt()));
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("查询成功");
		response.setData(data);
		renderJson(response);
	}
	
	public void update() {
//		getModel(Vote.class).update();
//		redirect("/vote");
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("修改成功");
		response.setData(data);
		renderJson(response);
	}
	
	public void delete() {
//		Vote.dao.deleteById(getParaToInt());
//		redirect("/vote");
		Response response = new Response();
		Map<String, Object> data = new HashMap<String, Object>();
		response.setCode(Response.SUCCESS);
		response.setMessage("删除成功");
		response.setData(data);
		renderJson(response);
	}
	

}


