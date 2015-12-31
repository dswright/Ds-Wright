App.Router = Backbone.Router.extend({
  initialize: function(options) { //options
    this.$el = options.el; //make this.el the body-container

    var mainCol = new App.mainColView() //Renders an empty shell to be filled in.
    this.mainColEl = mainCol.render().$el;
    this.$el.append(this.mainColEl);

    var rightCol = new App.rightColView();
    var rightColEl = rightCol.render().$el;
    this.$el.append(rightColEl);
  },

  routes: {
    'post/:id/*filename/': 'post',
    'project/:project/': 'project',
    'category/:category/': 'category',
    '': 'index'
  },

  category: function(category) {
    var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
    postCollection.fetch({
      success: function(posts) {
        for (var k=0; k<posts.length; k++) {
          if (posts.models[k].attributes.categories.indexOf(category) !== -1) {
            var postView = new App.postView({model: posts.models[k]});
            this.mainColEl.append(postView.render().$el); //append each post summary to the main view.
          }
        }
      }.bind(this)
    });
  },

  project: function(projectUrl) {
    var fullProjectModel = new App.fullProjectModel({projectUrl:projectUrl});
    fullProjectModel.fetch({ //fetch the markdown file for the project.
      success: function(project) {
        var projectCollection = new App.projectCollection();
        projectCollection.fetch({
          success: function(projectResults) {
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
                this.mainColEl.append($projectViewEl);
              }
            }
          }.bind(this)
        });            
      }.bind(this)
    });
  },

  post: function(postId) {
    var fullPostModel = new App.fullPostModel({postId:postId});
    fullPostModel.fetch({ //fetch the full JSON file of post data from the model.
      success: function(post) {
        //for now, fetch the post collection with every page load.
        var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
        postCollection.fetch({
          success: function(postResults) {
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
                this.mainColEl.append($postViewEl);
              }
            }
          }.bind(this)
        });
      }.bind(this)
    });
  },

  index: function() {
    var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
    postCollection.fetch({
      success: function(posts) {
        //append each post summary to the main view.
        for (var k=0; k<posts.length; k++) {
          var postView = new App.postView({model: posts.models[k]});
          this.mainColEl.append(postView.render().$el);
        }
      }.bind(this)
    });
  }
});
