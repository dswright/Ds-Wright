So you are finally ready to deploy your app, and you want to give it a cool name, and its own domain. Follow steps below for deploying your Heroku app on the domain name of your choice.

### 1. Buy a domain from a domain provider
Heroku will not sell you a domain name! Go buy it somewhere else. [NameCheap.com](http://namecheap.com/ "NameCheap homepage") is a low cost domain name provider with fair, steady pricing.

### 2. Find the name server settings for your host

Your name server settings will likely be found under some kind of 'domains' list on your host.

Here is an example for how to access the name servers on my HostMonster Account. A similar approach should be taken for other hosts.

![Finding Hostmonster name servers](/images/posts/Hostmonster-finding-name-servers.png "Finding Hostmonster name servers")

####Steps
1. Click the 'Domains Tab'
2. Click the 'domain list'
3. Click the 'name servers' tab
4. Select a domain name.
5. Choose 'use custom name servers'.

### 3. Install PointDNS on Heroku

Now that you have figured out how to edit the nameservers on your host, you will need to install a free Heroku add-on called PointDNS. Installing PointDNS on heroku is simple. Just search 'PointDNS' from the Heroku app dashboard on Heroku.com and select PointDNS.

![Installing PointDNS on Heroku](/images/posts/PointDNS-heroku-install.png "Install PointDNS on Heroku")

### 4. Update PointDNS settings

First, select your domain from your PointDNS control panel. In the example below, I would select the 'ds-wright.com' link below.

![PointDNS Domain Settings](/images/posts/PointDNS-settings.png "Point DNS Domain Settings")

Make sure that your DNS settings look similar to the settings below. For me, PointDNS had these as the default settings after I installed the add on, and I did not have to edit anything. The settings below will ensure that both the http:// and the http://www. versions of your domain will correctly point to your heroku app.

![PointDNS complete domain settings](/images/posts/PointDNS-complete-settings.png "Complete domain settings for PointDNS on Heroku")

### 5. Update the name servers on your host to match the pointDNS nameservers

Lastly, change the name servers on your host that you found in step 2 to match the name servers used by the PointDNS Heroku add on.

![Hostmonster PointDNS Settings](/images/posts/Hostmonster-DNS-settings.png "Complete Hostmonster DNS settings")

Thats it! Your new domain name should now point to your Heroku app.


