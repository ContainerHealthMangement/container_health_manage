package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.History_Health;
import dao.History_HealthDao;
import net.sf.json.JSONArray;

/**
 * Servlet implementation class History_HealthServlet
 */
@WebServlet("/History_HealthServlet")
public class History_HealthServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		History_HealthDao healthdao = new History_HealthDao();
		
		ArrayList<History_Health> healthArr = healthdao.query();
		
		response.setContentType("text/html; charset=utf-8");
		
		JSONArray json = JSONArray.fromObject(healthArr);
		
		PrintWriter writer = response.getWriter();
		
		writer.println(json);
		
		writer.flush();
		
		writer.close();
	}

}
