package action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionSupport;

public class Test extends ActionSupport{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private static double health1;
	
	private String xhdm;
	
	public double getHealth1() {
		return health1;
	}

	public void setHealth1(double health1) {
		Test.health1 = health1;
	}

	public String getXhdm() {
		return xhdm;
	}

	public void setXhdm(String xhdm) {
		this.xhdm = xhdm;
	}

	//处理ajax请求
	public String executeAjax() {
		String ret = ERROR;
		Connection conn = null;
		try {
			//获取数据
			
		//	String xhdm = request.getParameter("xhdm");//箱号代码是前端传递过来的值
		//	System.out.println(xhdm);
			String xhdm = "6191846";
			String URL = "jdbc:mysql://39.106.33.182/container_data";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(URL,"root","root");
			String sql = "SELECT XHDM, HEALTH_07 FROM container_health WHERE";
			sql += " XHDM = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, xhdm);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				xhdm = rs.getString(1);
				health1 = rs.getDouble(2);
				System.out.println(xhdm);
				System.out.println(health1);
				ret = SUCCESS;
			}
		}catch (Exception e) {
			// TODO: handle exception
			ret = ERROR;
		}finally {
			if(conn != null) {
				try {
					conn.close();
				} catch (Exception e) {
					// TODO: handle exception
				}
			}
		}
		return ret;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	//'	String ret = ERROR;
		Connection conn = null;
		try {
			//获取数据
			
		//	String xhdm = request.getParameter("xhdm");//箱号代码是前端传递过来的值
		//	System.out.println(xhdm);
			String xhdm = "6191846";
			String URL = "jdbc:mysql://39.106.33.182/container_data";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(URL,"root","root");
			String sql = "SELECT XHDM, HEALTH_07 FROM container_health WHERE";
			sql += " XHDM = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, xhdm);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				xhdm = rs.getString(1);
				health1 = rs.getDouble(2);
				System.out.println(xhdm);
				System.out.println(health1);
			//	ret = SUCCESS;
			}
		}catch (Exception e) {
			// TODO: handle exception
		//	ret = ERROR;
		}finally {
			if(conn != null) {
				try {
					conn.close();
				} catch (Exception e) {
					// TODO: handle exception
				}
			}
		}
		
	}


}
