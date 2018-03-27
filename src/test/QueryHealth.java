package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.opensymphony.xwork2.ActionSupport;

public class QueryHealth extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String location;

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
	
	private String xhdm;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getHealth1() {
		return health1;
	}

	public void setHealth1(double health1) {
		this.health1 = health1;
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

	public String getXhdm() {
		return xhdm;
	}

	public void setXhdm(String xhdm) {
		this.xhdm = xhdm;
	}

	

	public String execute() {
		String ret = ERROR;
		Connection conn = null;
		
		try {
			String URL = "jdbc:mysql://localhost/container_data";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(URL,"root","root");
			String sql = "SELECT a.*, b.JSDATE, b.HZZM FROM container_health a LEFT JOIN jzx_dz_location b ON a.XHDM=b.XHDM WHERE";
			sql += " XHDM = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, xhdm);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				xhdm = rs.getString(1);
				health1 = rs.getDouble(2);
				
				ret = SUCCESS;
			}
		}catch (Exception e) {
			// TODO: handle exception
			ret = ERROR;
		}finally {
			if(conn != null) {
				try {
					conn.close();
				}catch (Exception e) {
					// TODO: handle exception
				}
			}
		}
		
		return ret;
	}

}
