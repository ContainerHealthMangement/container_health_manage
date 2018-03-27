package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.opensymphony.xwork2.ActionSupport;

import bean.Health;

public class HealthDao extends ActionSupport{

	public ArrayList<Health> query(){
		ArrayList<Health> health = new ArrayList<Health>();
		try {
			//JDBC连接MYSQL数据库
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:3306/struts_tutorial?characterEncoding=utf8", "root", "root");  
			PreparedStatement stmt = conn.prepareStatement("SELECT MAX(DATEDIFF(A.sxdate,A.trdate)) AS dates, A.xhdm, B.locations FROM xlzb A, location B WHERE A.xhdm=B.container_number GROUP BY A.xhdm, B.locations;");  
            ResultSet rs = stmt.executeQuery();
            //将表中日期差取出作为健康公式中的时间
            while(rs.next()) {
            	Health a = new Health();
            	a.setDays(rs.getInt("dates"));
            	a.setXhdm(rs.getString("xhdm"));
            	a.setLocation(rs.getString("locations"));
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
