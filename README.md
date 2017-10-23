# AdCampaignApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.
Server side was developed with Java.

Steps to deploy:
1. import compaign_server directory to ecplise or other local IDE.
2. run SimpleAdApplication.java in compaign_server/src/main/java/simple/ad
3. copy the url, default is localhost:8080, otherwise it will be the IP address of the device running the application
4. open command window(for windows)/ terminal(for os) at root directory(ad_compaigned_app)
5. run npm install to install dependencies
6. open file src/app/ad-campaign/campaign-data.service.ts
7. change the paramater 'getUrl' at line 12 to url got in step 3
8. run ng serve --port 4400 at root directory
9. open localhost:4400 in browser
