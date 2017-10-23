package simple.ad.campaign;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Campaign {
@Id
private String id;
private String duration;
private String ad_content;
private long create_time;
private long time_left;
private String end_time;
public Campaign(){
	
}
public Campaign(String id, String duration, String ad_content) {
	super();
	this.id = id;
	this.duration = duration;
	this.ad_content = ad_content;
	this.create_time=System.currentTimeMillis();
	Date d=new Date(this.create_time+Long.parseLong(this.duration)*60*1000);
	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	this.end_time=sdf.format(d);
	
	this.time_left=(this.create_time+(Long.parseLong(this.duration)*60*1000)-System.currentTimeMillis())/1000;
}
public String getEnd_time() {

	return end_time;
}
public void setEnd_time(String end_time) {
	this.end_time = end_time;
}
public String getId() {
	return id;
}
public String getDuration() {
	return duration;
}
public void setDuration(String duration) {
	this.duration = duration;
}
public String getAd_content() {
	return ad_content;
}
public long getCreate_time() {
	return create_time;
}
public long getTime_left() {
	return time_left;
}
public void setTime_left(long time_left) {
	this.time_left = time_left;
}
public void setCreate_time(long create_time) {
	this.create_time = create_time;
}
public void setAd_content(String ad_content) {
	this.ad_content = ad_content;
}
public void setId(String id) {
	this.id = id;
}

@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return this.id.equals(((Campaign)obj).getId());
	}
}
