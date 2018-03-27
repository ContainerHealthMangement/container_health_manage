package action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.bar.bean.Bar;
import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSONArray;

public class BarAction extends ActionSupport {

	private JSONArray json;
	
	ArrayList<Bar> barArr = new ArrayList<Bar>();

	public String query() {
System.out.println("gdfgrg");
		try {
			// JDBC方式连接MySQL数据库
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(
					"jdbc:mysql://60.205.206.93:3306/struts_tutorial?characterEncoding=utf8", "root", "root");
			PreparedStatement stmt = conn.prepareStatement("SELECT * FROM bar");
			ResultSet rs = stmt.executeQuery();
			// 将test表中的数据存储到线性表中
			while (rs.next()) {
				Bar bar = new Bar();
				bar.setName(rs.getString("name"));
				bar.setNum(rs.getInt("num"));
				barArr.add(bar);
			}
			json = JSONArray.fromObject(barArr);
		//	result = json.toString();
			// 关闭连接
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return "success";
	}

	public JSONArray getJson() {
		return json;
	}

	public void setJson(JSONArray json) {
		this.json = json;
	}
	
	

	
	
}
