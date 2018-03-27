package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.bar.bean.Bar;
import com.opensymphony.xwork2.ActionSupport;

import net.sf.json.JSON;
import net.sf.json.JSONArray;

public class testmysql extends ActionSupport{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Bar> barArr = new ArrayList<Bar>();
		try {
			//JDBC��ʽ����MySQL���ݿ�  
            Class.forName("com.mysql.jdbc.Driver");  
            Connection conn = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:3306/struts_tutorial?characterEncoding=utf8", "root", "root");  
            PreparedStatement stmt = conn.prepareStatement("SELECT * FROM bar");  
            ResultSet rs = stmt.executeQuery();  
            //��test���е����ݴ洢�����Ա���  
            while(rs.next()) {  
                Bar bar = new Bar();  
                bar.setName(rs.getString("name"));  
                bar.setNum(rs.getInt("num"));
                System.out.println(bar);
                System.out.println(rs);
                barArr.add(bar);  
            }  
            //�ر�����  
    		JSONArray json = JSONArray.fromObject(barArr);
    		System.out.println(json.toString());
            conn.close(); 
		}catch (SQLException e) {  
            e.printStackTrace();  
        } catch (ClassNotFoundException e) {  
            e.printStackTrace();  
        }
	}

}
