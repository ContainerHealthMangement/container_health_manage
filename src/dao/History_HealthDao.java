package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.opensymphony.xwork2.ActionSupport;

import bean.Health;
import bean.History_Health;

public class History_HealthDao extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ArrayList<History_Health> query(){
		ArrayList<History_Health> health = new ArrayList<History_Health>();
		try {
			//JDBC连接MYSQL数据库
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:3306/container_data?characterEncoding=utf8", "root", "root");  
			PreparedStatement stmt = conn.prepareStatement("SELECT a.*, b.JSDATE, b.HZZM, b.FSHPID FROM container_health a LEFT JOIN jzx_dz_location b ON a.xhdm=b.xhdm");  
            ResultSet rs = stmt.executeQuery();
            //将表中日期差取出作为健康公式中的时间
            while(rs.next()) {
            	History_Health a = new History_Health();
            	a.setXhdm(rs.getString("xhdm"));
            	a.setHealth1(rs.getDouble("health_07"));
            	a.setHealth2(rs.getDouble("health_08"));
            	a.setHealth3(rs.getDouble("health_09"));
            	a.setHealth4(rs.getDouble("health_10"));
            	a.setHealth5(rs.getDouble("health_11"));
            	a.setHealth6(rs.getDouble("health_12"));
            	a.setHealth7(rs.getDouble("health_13"));
            	a.setHealth8(rs.getDouble("health_14"));
            	a.setHealth9(rs.getDouble("health_15"));
            	a.setHealth10(rs.getDouble("health_16"));
            	a.setLocation(rs.getString("hzzm"));
            	health.add(a);
            }
            //关闭连接
            conn.close();
		}catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return health;
	}
	
	
}
