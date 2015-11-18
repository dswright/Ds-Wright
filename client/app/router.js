App.Router = Backbone.Router.extend({
  initialize: function(options){ //options
    this.$el = options.el; //make this.el the body-container
  },

  routes: {
    'post/:id/*filename': 'post',
    'project/:project/': 'project',
    'category/:category/': 'category',
    '': 'index'
  },

  category: function(category){
    console.log("rendering category!");
    var mainCol = new App.mainColView() //Renders an empty shell to be filled in.
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl);

    var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
    postCollection.fetch({
      success: function(postResults) {
        console.log("category results", postResults);

        //append the right column second. Right column has to be appended here to fetch the categories from the json file.
        var projectCollection = new App.projectCollection();
        projectCollection.fetch({
          success: function(projectResults){
            console.log("projectResults", projectResults);
            //append the right column second. Right column has to be appended here to fetch the categories from the json file.
            var rightCol = new App.rightColView(postResults, projectResults);
            var rightColEl = rightCol.render().$el;
            this.$el.append(rightColEl);
          }.bind(this)
        });

        for (var k=0; k<postResults.length; k++){
          if (postResults.models[k].attributes.categories.indexOf(category) !== -1) {
            //append each post summary to the main view.
            var postView = new App.postView({model: postResults.models[k]});
            mainColEl.append(postView.render().$el);
          }
        }
      }.bind(this)
    })

  },

  project: function(projectUrl){
    console.log("project is" + projectUrl);
    var mainCol = new App.mainColView() //Renders an empty shell to be filled in.
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl);

    var fullProjectModel = new App.fullProjectModel({projectUrl:projectUrl});
    fullProjectModel.fetch({ //fetch the full JSON file of post data from the model.
      success: function(results) {
        //for now, fetch the post collection with every page load.
        var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
        postCollection.fetch({
          success: function(postResults) {

            var projectCollection = new App.projectCollection();
            projectCollection.fetch({
              success: function(projectResults){
                console.log("projectResults", projectResults);

                //now append the main col.
                for (var k=0; k<projectResults.length; k++){
                  console.log("projects:", projectResults.models[k].attributes.url);
                  if (projectResults.models[k].attributes.url === projectUrl) {
                    var projectAttributes = projectResults.models[k].attributes;
                    fullProjectModel.set({
                      date: projectAttributes.date,
                      title: projectAttributes.title,
                      img: projectAttributes.image
                    });
                    console.log("full post model", fullProjectModel.attributes);
                    var fullProjectView = new App.fullProjectView({model: fullProjectModel});
                    var $projectViewEl = fullProjectView.render().$el;
                    $projectViewEl.find("#full-project-content").append(fullProjectModel.get('markdown'));
                    mainColEl.append($projectViewEl);
                  }
                }

                //append the right column second. Right column has to be appended here to fetch the categories from the json file.
                var rightCol = new App.rightColView(postResults, projectResults);
                var rightColEl = rightCol.render().$el;
                this.$el.append(rightColEl);
              }.bind(this)
            });            
          }.bind(this)
        });
      }.bind(this)
    });
  },

  post: function(postId){ //
    console.log("in router post");
    var mainCol = new App.mainColView() //Renders an empty shell to be filled in.
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl);

    var fullPostModel = new App.fullPostModel({postId:postId});
    fullPostModel.fetch({ //fetch the full JSON file of post data from the model.
      success: function(results) {
        //for now, fetch the post collection with every page load.
        var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
        postCollection.fetch({
          success: function(postResults) {

            var projectCollection = new App.projectCollection();
            projectCollection.fetch({
              success: function(projectResults){
                console.log("projectResults", projectResults);
                //append the right column second. Right column has to be appended here to fetch the categories from the json file.
                var rightCol = new App.rightColView(postResults, projectResults);
                var rightColEl = rightCol.render().$el;
                this.$el.append(rightColEl);
              }.bind(this)
            });

            //now append the main col.
            for (var k=0; k<postResults.length; k++){
              if (postResults.models[k].id === postId) {
                var postAttributes = postResults.models[k].attributes;
                fullPostModel.set({
                  date: postAttributes.date,
                  title: postAttributes.title,
                  img: postAttributes.img
                });
                console.log("full post model", fullPostModel.attributes);
                var fullPostView = new App.fullPostView({model: fullPostModel});
                var $postViewEl = fullPostView.render().$el;
                $postViewEl.find("#full-post-content").append(fullPostModel.get('markdown'));
                mainColEl.append($postViewEl);
              }
            }
          }.bind(this)
        });
      }.bind(this)
    });
  },

  index: function(){
    var mainCol = new App.mainColView(); //Renders an empty shell to be filled in.
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl); //append the mainCol to the body-container.

    var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
    postCollection.fetch({
      success: function(postResults) {
        
        var projectCollection = new App.projectCollection();
        projectCollection.fetch({
          success: function(projectResults){
            console.log("projectResults", projectResults);
            //append the right column second. Right column has to be appended here to fetch the categories from the json file.
            var rightCol = new App.rightColView(postResults, projectResults);
            var rightColEl = rightCol.render().$el;
            this.$el.append(rightColEl);
          }.bind(this)
        });

        //append each post summary to the main view.
        for (var k=0; k<postResults.length; k++){
          var postView = new App.postView({model: postResults.models[k]});
          mainColEl.append(postView.render().$el);
        }
      }.bind(this)
    });
  }
});
