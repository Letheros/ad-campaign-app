package simple.ad.campaign;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CampaignService {
	@Autowired	
	private CampaignRepository campaignRepository;		
	
private List<Campaign> campaigns=new ArrayList<Campaign>(Arrays.asList(new Campaign("1", "2",
		"LOL "), new Campaign("2", "2",
		"PUBG "), new Campaign("3", "3",
		"WARCARFT")));


public List<Campaign> getAllCampaigns(){

	
	campaignRepository.findAll().forEach(campaigns::add);

	List<Campaign> campaigns=(List<Campaign>) campaignRepository.findAll();
	
	for(int i=0;i<campaigns.size();i++) {;
	long time_left=campaigns.get(i).getCreate_time()+(Long.parseLong(campaigns.get(i).getDuration())*60*1000)-System.currentTimeMillis();
    if(time_left<=0) {
    	deleteCampaign(campaigns.get(i).getId());
    }else {
    	campaigns.get(i).setTime_left(time_left/1000);
    	updateCampaign(campaigns.get(i).getId(), campaigns.get(i));
    }
}
	return campaigns;
}

public Campaign getCampaign(String id){

	Campaign campaign=campaignRepository.findOne(id);
	long time_left=campaign.getCreate_time()+(Long.parseLong(campaign.getDuration())*60*1000)-System.currentTimeMillis();
    if(time_left>0) {
    	campaign.setTime_left(time_left/1000);
    	return campaign;
    } 
	return null;
	
}

public boolean addCampaign(Campaign campaign){

	if(campaignRepository.findOne(campaign.getId())!=null) {
		return false;
	}
	Campaign c=new Campaign(campaign.getId(), campaign.getDuration(), campaign.getAd_content());
	
	campaignRepository.save(c);
	return true;
}

public void updateCampaign(String id,Campaign campaign){
	campaignRepository.save(campaign);
}

public void deleteCampaign(String id){
	campaignRepository.delete(id);
}


}
