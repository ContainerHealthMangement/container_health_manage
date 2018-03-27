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
		// ����DAO
		BarDao barDao = new BarDao();
		// �����ݿ���ȡ����
		ArrayList<Bar> barArr = barDao.query();
		// ���÷�������Ӧʱ��jsp��ʾ�㴫������ޚ�����ʽ
		response.setContentType("text/html; charset=utf-8");
		// ArrayList����ת��ΪJSON����
		JSONArray json = JSONArray.fromObject(barArr);
		// ����̨��ʾJSON
		System.out.print(json.toString());
		// ���ص�JSP,HttpServletResponse����õ�һ֧�ʣ�Ȼ��������øñ�
		// ��ҳ����д�κ�����ʾ������
		PrintWriter writer = response.getWriter();
		// ������ͻ���
		writer.println(json);
		writer.flush();
		// �ر������
		writer.close();
	}

}
