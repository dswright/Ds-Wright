DS-Wright.com is my personal blog project, the website you are on right now!

### Website objective

To provide a platform for me, Dylan Wright, to share what I learn as I do it.

### Technology Stack for DS-Wright

*   Node & Express on the backend
*   Backbone.js on the frontend
*   The file system for data storage
*   Grunt for deployment automation
*   Heroku for website hosting

I selected the technology stack for DS-Wright primarily based on what new technologies that I wanted to learn. It is not an ideal stack for a blog, because websites that generate content using frontend JavaScipt are not great for SEO. However, I am looking forward to learning how to optimize JavaScript-based content for SEO.

### Backend Application Design

The Backend of DS-Wright utilizes 4 data endpoints for the fundamental structure

#### Backend Endpoints

* Single posts - [/post/1/](/post-source/1/ "Full post data for post id 1")

* All posts - [/json/posts/](/json/posts/ "Meta data for all ds-wright.com posts")

* Single project - [/project-source/ds-wright/](/project-source/ds-wright/ "Source data for a single project")

* All projects - [/json/projects/](/json/projects/ "Meta data for all projects")

(those are live-links to the backend endpoints on ds-wright.com)

The data that is provided for each individual post that contains the contents of the post written in markdown. A markdown converter is then used on the client side to present the post in a nice format.

The all posts and all projects data is meta data that used to generate the homepage and categories pages. These endpoints reflect the contents of a json file that is updated manually by me with as I write each post and add each project.

### Frontend Application Design

The frontend of Ds-wright uses a backbone router to display different content depending on the URL.

The 4 routes that exist on the front end are:

* Index - [/](/ "The Homepage") - the homepage

* Post - [/post/1/custom-domain-on-Heroku](/post/1/custom-domain-on-Heroku/ "Link to First Post") - /post/id/post-name

* Category - [/category/Heroku/](/category/Heroku/ "Link to first Category") - /category/category-name/

* Project - [/project/project/ds-wright/](/project/ds-wright/ "Link to DsWright") - /project/project-name/

These may expand in the future, but for now I am keeping it simple.

Every route has the same 2 basic components - the **main col** The right-col is loaded the same on every route. The main-col is also added to every route, but only as an empty div, and it is then filled in differently depending on which route is called. 

Depending on the route, different components are loaded. These are all of the components available for each of the main components.

### Main-Col View Components

* Post-view
* Full-post-view
* Full-project-view

### Right-Col Components
* Sidebar-bio-view
* Category-link-view
* Sidebar-categories-view
* Sidebar-posts-view
* Sidebar-posts-title
* Sidebar-projects-view
* Sidebar-project-title
