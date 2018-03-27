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
			//JDBC方式连接MySQL数据库  
            Class.forName("com.mysql.jdbc.Driver");  
            Connection conn = DriverManager.getConnection(  
                    "jdbc:mysql://localhost:3306/struts_tutorial?characterEncoding=utf8", "root", "root");  
            PreparedStatement stmt = conn.prepareStatement("SELECT * FROM bar");  
            ResultSet rs = stmt.executeQuery();  
            //将test表中的数据存储到线性表中  
            while(rs.next()) {  
                Bar bar = new Bar();  
                bar.setName(rs.getString("name"));  
                bar.setNum(rs.getInt("num"));
                System.out.println(bar);
                System.out.println(rs);
                barArr.add(bar);  
            }  
            //关闭连接  
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
