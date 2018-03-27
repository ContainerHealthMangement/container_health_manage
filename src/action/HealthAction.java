package action;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.collections.map.HashedMap;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSONObject;

public class HealthAction extends ActionSupport implements ServletRequestAware{

	private HttpServletRequest request;
	
	private String location;
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	private String result;
	
	private double health1;
	
	private double health2;
	
	private double health3;
	
	private double health4;
	
	private double health5;
	
	private double health6;
	
	private double health7;
	
	private double health8;
	
	private double health9;
	
	private double health10;
	
	private double health11;
	
	private double health12;
	
	public double getHealth11() {
		return health11;
	}

	public void setHealth11(double health11) {
		this.health11 = health11;
	}

	public double getHealth12() {
		return health12;
	}

	public void setHealth12(double health12) {
		this.health12 = health12;
	}

	public double getHealth2() {
		return health2;
	}

	public void setHealth2(double health2) {
		this.health2 = health2;
	}

	public double getHealth3() {
		return health3;
	}

	public void setHealth3(double health3) {
		this.health3 = health3;
	}

	public double getHealth4() {
		return health4;
	}

	public void setHealth4(double health4) {
		this.health4 = health4;
	}

	public double getHealth5() {
		return health5;
	}

	public void setHealth5(double health5) {
		this.health5 = health5;
	}

	public double getHealth6() {
		return health6;
	}

	public void setHealth6(double health6) {
		this.health6 = health6;
	}

	public double getHealth7() {
		return health7;
	}

	public void setHealth7(double health7) {
		this.health7 = health7;
	}

	public double getHealth8() {
		return health8;
	}

	public void setHealth8(double health8) {
		this.health8 = health8;
	}

	public double getHealth9() {
		return health9;
	}

	public void setHealth9(double health9) {
		this.health9 = health9;
	}

	public double getHealth10() {
		return health10;
	}

	public void setHealth10(double health10) {
		this.health10 = health10;
	}

	public double getHealth1() {
		return health1;
	}

	public void setHealth1(double health1) {
		this.health1 = health1;
	}

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

		Connection conn = null;
		try {
			//获取数据
			String xhdm = request.getParameter("xhdm");
			String URL = "jdbc:mysql://60.205.206.93:3306/container_data";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(URL,"root","root");
			String sql = "SELECT a.XHDM, a.HEALTH_07, a.HEALTH_08, a.HEALTH_09, a.HEALTH_10, a.HEALTH_11, a.HEALTH_12, a.HEALTH_13, a.HEALTH_14, a.HEALTH_15, a.HEALTH_16, a.HEALTH_17, a.HEALTH_18, b.HZZM, b.JSDATE FROM container_health_predict_new a LEFT JOIN jzx_dz_location b ON a.XHDM=b.XHDM WHERE";
			sql += " a.XHDM = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, xhdm);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				xhdm = rs.getString(1);
				health1 = rs.getDouble(2);
				health2 = rs.getDouble(3);
				health3 = rs.getDouble(4);
				health4 = rs.getDouble(5);
				health5 = rs.getDouble(6);
				health6 = rs.getDouble(7);
				health7 = rs.getDouble(8);
				health8 = rs.getDouble(9);
				health9 = rs.getDouble(10);
				health10 = rs.getDouble(11);
				health11 = rs.getDouble(12);
				health12 = rs.getDouble(13);
				location = rs.getString(14);
				System.out.println(xhdm);
				System.out.println(health1);
				System.out.println(health2);
				System.out.println(health3);
				System.out.println(health4);
				System.out.println(health5);
				System.out.println(health6);
				System.out.println(health7);
				System.out.println(health8);
				System.out.println(health9);
				System.out.println(health10);
				System.out.println(health11);
				System.out.println(health12);
				System.out.println(location);
			}
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("xhdm",xhdm);
			map.put("health1",health1);
			map.put("health2",health2);
			map.put("health3",health3);
			map.put("health4",health4);
			map.put("health5",health5);
			map.put("health6",health6);
			map.put("health7",health7);
			map.put("health8",health8);
			map.put("health9",health9);
			map.put("health10",health10);
			map.put("health11",health11);
			map.put("health12",health12);
			map.put("location",location);
			JSONObject json = JSONObject.fromObject(map);
			result = json.toString();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return SUCCESS;
	}
}
