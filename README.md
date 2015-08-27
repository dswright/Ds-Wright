# Ds-wright-node

##Page Types

* Home
* Category 
* Post
* Page
* Projects
* Project

###Home  
Utilizes category file to show recent posts & projects.

###Category  
Utilizes the category file to show recent blog posts.

### Post
Uses markdown to display a blogpost.

### Page
Uses markdown to display a page.  
Pages are not shown through the category file. They are hardcoded into the header & sidebar.

###Projects  
Utilize the category file to show projects.

###Project
Utilize markdown to display a project page.


##Routes

* /
* /Page
* /Post
* /Project
* /Category
* /Projects

need a route for loading general pages.
about, contact, 

some routes will load html.
there will be three page types - page, post, project.
these will each be designated by /page, /post, /project.
so each of those routes will return some basic html template page.

these templates will have to ping different JSON data from the server.
this data needs to be easily retrievable from the server.
each page type can ping for its corresponding HTML contents.
a category page? This seems like a db.
a file would be a pain.
Shit. I need to store amount of data stored in the db...
Several things need to be saved in the database.
Post/Page/Projects
Name, publish date, last updated, author, lead.
lead should be set.. everything should be set... how???
I need to have a database on heroku.
Shouldn't be too hard. BLAH.
Check for new posts every 10 minutes. Process their data.

allow cookies. Store stories/objects/whatever into the localStorage.

