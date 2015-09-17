App.Router = Backbone.Router.extend({
  initialize: function(options){ //options
    this.$el = options.el; //make this.el the body-container
  },

  routes: {
    'post/:id/*filename': 'post',
    '': 'index'
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
          success: function(results) {
            for (var i=0; i<results.length; i++){
              if (results.models[i].id === postId) {
                var postAttributes = results.models[i].attributes;
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
          }
        });
      }
    });

  },

  index: function(){
    var mainCol = new App.mainColView(); //Renders an empty shell to be filled in.
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl); //append the mainCol to the body-container.

    var postCollection = new App.postCollection(); //load the collection of posts from the posts.json file.
    postCollection.fetch({
      success: function(results) {
        for (var i=0; i<results.length; i++){
          var postView = new App.postView({model: results.models[i]});
          mainColEl.append(postView.render().$el);
        }
      }
    });
  },
});