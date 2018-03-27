package bean;

public class Health {

	private int days;//出厂日期与修理时间之差
	
	private String xhdm;//集装箱箱号代码
	
//	private double HealthValue;//集装箱健康度
	
	private String location;//集装箱所在地点

	public int getDays() {
		return days;
	}

	public void setDays(int days) {
		this.days = days;
	}

	public String getXhdm() {
		return xhdm;
	}

	public void setXhdm(String xhdm) {
		this.xhdm = xhdm;
	}

/*	public double getHealthValue() {
		return HealthValue;
	}

	public void setHealthValue(double healthValue) {
		HealthValue = healthValue;
	}*/

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	
	
	
}
