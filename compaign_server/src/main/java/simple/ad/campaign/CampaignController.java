package simple.ad.campaign;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CampaignController {
	@Autowired
	private CampaignService campaignService;
    @CrossOrigin(origins="*",methods=RequestMethod.GET)
    
	@RequestMapping("campaigns")
	public List<Campaign> getAllCampaigns() {
		return campaignService.getAllCampaigns();
	}
    @CrossOrigin
	@RequestMapping("campaigns/{id}")
	public Campaign getCampaign(@PathVariable String id){
	   return campaignService.getCampaign(id);	
	}
	
    @CrossOrigin(origins="*",methods=RequestMethod.POST)
	@RequestMapping(method=RequestMethod.POST,value="campaigns")
	public String addCampaign(@RequestBody Campaign campaign){

		boolean b=campaignService.addCampaign(campaign);
		if(b) {
			
			return "true";
		}else {
			return "false";
		}

	}
	

	

}
