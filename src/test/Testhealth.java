package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import bean.Health;
import net.sf.json.JSONArray;

public class Testhealth {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Health> health = new ArrayList<Health>();
		try {
			//JDBC����MYSQL���ݿ�
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:3306/struts_tutorial?characterEncoding=utf8", "root", "root");  
			PreparedStatement stmt = conn.prepareStatement("SELECT MAX(DATEDIFF(A.sxdate,A.trdate)) AS dates, A.xhdm, B.locations FROM xlzb A, location B WHERE A.xhdm=B.container_number GROUP BY A.xhdm, B.locations;");  
            ResultSet rs = stmt.executeQuery();
            //���������ڲ�ȡ����Ϊ������ʽ�е�ʱ��
            while(rs.next()) {
            	Health a = new Health();
            	a.setDays(rs.getInt("dates"));
            	a.setXhdm(rs.getString("xhdm"));
            	a.setLocation(rs.getString("locations"));
            	health.add(a);
            }
            //�ر�����
            JSONArray json = JSONArray.fromObject(health);
            System.out.println(json.toString());
            conn.close();
		}catch (SQLException e) {
			// TODO: handle exception
			e.printStackTrace();
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}
