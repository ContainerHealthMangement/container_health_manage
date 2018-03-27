package com.bar.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.*;

import com.bar.bean.Bar;
import com.opensymphony.xwork2.ActionSupport;

public class BarDao extends ActionSupport{  
	  
    /** 
     * @author UncleFan  
     *  
     * ��ѯ�������� 
     * @return ����������ݵ����Ա�
     */  
    public ArrayList<Bar> query() {  
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
                barArr.add(bar);  
            }  
            //�ر�����  
            conn.close();  
        } catch (SQLException e) {  
            e.printStackTrace();  
        } catch (ClassNotFoundException e) {  
            e.printStackTrace();  
        }
		return barArr;  
    }  
} 
