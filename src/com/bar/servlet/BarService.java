package com.bar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bar.bean.Bar;
import com.bar.dao.BarDao;

import net.sf.json.JSONArray;

/**
 * Servlet implementation class BarService
 */
@WebServlet("/BarService")
public class BarService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponseivate 
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 创建DAO
		BarDao barDao = new BarDao();
		// 从数据库中取数据
		ArrayList<Bar> barArr = barDao.query();
		// 设置服务器响应时向jsp表示层传输数据逇编码格式
		response.setContentType("text/html; charset=utf-8");
		// ArrayList对象转换为JSON对象
		JSONArray json = JSONArray.fromObject(barArr);
		// 控制台显示JSON
		System.out.print(json.toString());
		// 返回到JSP,HttpServletResponse对象得到一支笔，然后可以利用该笔
		// 在页面上写任何想显示的内容
		PrintWriter writer = response.getWriter();
		// 输出到客户端
		writer.println(json);
		writer.flush();
		// 关闭输出流
		writer.close();
	}

}
