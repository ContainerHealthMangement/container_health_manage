package action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.collections.map.HashedMap;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSONObject;

public class JsonAction extends ActionSupport implements ServletRequestAware{

	private HttpServletRequest request;
	
	private String result;
	
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	//处理ajax请求
	public String executeAjax() {
		try {
			//获取数据
			String name = request.getParameter("name");
			int age = Integer.parseInt(request.getParameter("age"));
			String position = request.getParameter("position");
			System.out.println(name);
			System.out.println(age);
			System.out.println(position);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("name",name);
			map.put("age",age);
			map.put("position",position);
			JSONObject json = JSONObject.fromObject(map);
			result = json.toString();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return SUCCESS;
	}
}
