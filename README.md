# CopReport
A programm to scrap police reports from a website (http://www.polizei.bayern.de/unterfranken/), categorize them and display some statistics.
Scrapping is deactivating. Use it at your own discression.

This is just a proof of concept.
For more information contact me daniel@budick.eu.

#Activate scrapping:
Comment out `throw new Meteor.Error(500, '...');` in /lib/methods.js Line 45.

# How to use it
This application is made for local use.

1. Install Meteor: https://www.meteor.com/install
2. Download or clone this repo
3. use your terminal and `cd <pathToApp>`
4. Start app with `meteor`

You can scrap data yourself or you can use the dump with a lot of reports and cities in bavaria.
`mongorestore --db meteor -h localhost --port 3001 --drop dump/meteor`

If you want to scrap data yourself, you will have to fill the collection cities with data from /dump/metoer/cities.bson
Then you have to comment out `throw new Meteor.Error(500, '...');` in /lib/methods.js Line 45. 

# Import DB to production server:
`mongorestore -u <username> -p <password> -h <host>:<port> -d <database> dump/meteor`

# Packages used:
Athmosphere:
twbs:bootstrap
momentjs:moment
kadira:flow-router
kadira:blaze-layout
dburles:google-maps
chart:chart

NPM:
vectors
cheerio
fuzzy


#Impressum
Daniel Budick, B.Eng. 
Speyerer Straße 1
90443 Nürnberg

E-Mail: daniel@budick.eu