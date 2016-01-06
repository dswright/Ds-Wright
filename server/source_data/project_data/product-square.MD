###The Idea

ProductSquare is a platform for students to showcase the projects they have completed while learning to code in a bootcamp. Additionally, ProductSquare is a platform for non-profit companies to come and make proposals for student projects. The main purpose of ProductSquare was to create a showcase of student work, where it would be easy for prospective students and future employers to look over the projects that had been done completed by bootcamp students.

### ProductSquare Team

ProductSquare was worked on by 5 students at MakerSquare (including myself). They are: Christopher Kim, Alex Navaratte, Ting Deng, and Sin Wai Lam.

### Technology Stack for ProductSquare

* Node & Express on the backend
* Angular.js on the frontend
* Firebase for storage
* Gulp for deployment automation
* Heroku for hosting

### ProductSquare Video Demo

Learn more about both our product and our technical architecture in the promo video that we made at MakerSquare!
[![](/images/projects/product-square-video.png)](https://vimeo.com/142969652)


### ProductSquare Postmortem 

I really wanted ProductSquare to become a product that would actually be used by bootcamp students to showcase their work. Unfortunately, we bit off more than we could chew, and we were not able to build a bug-free platform with seamless user experience that was enticing for students to use to showcase their work.

#### 4 Biggest Takeaways from ProductSquare

* I do not like Angular.js very much. It is too easy to write spaghetti code that lacks modularity and it lead to significant scope and state issues in site that created odd bugs.

* Do not use templates that are sold online as the basis of your design. It is more efficient and leads to less code bloat to only use small elements of websites that you see in other places and incorporate those elements into your site in a minimalist way.

* We should have cut the scope of the project in half and only focused on building the showcase for student projects. Instead we added a whole section for employers to add project proposals, which added a lot of additional functionality, and somewhat clouded the main intent of our site.

* Data input forms are very difficult to do well. Forms that take in complex data must often times be very dynamic and respond to what data the user wants to input. While they are very difficult, they are also very un-sexy, and boring to demo, so choosing a project that was form and data-input heavy was probably not the best idea for a student project. 

Overall, I really enjoyed working on the project, had a lot of fun with my team, and we learned a ton of JavaScript in the development process!

See [our live demo on productsquare.herokuapp.com](http://productsquare.herokuapp.com/)!

See [the code for ProductSquare code](https://github.com/dswright/ProductSquare) on github here



