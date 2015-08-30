App.Router = Backbone.Router.extend({
  initialize: function(options){ //options
    this.$el = options.el;
  },

  routes: {
    'post/:id/:title': 'post',
    '': 'index'
   // 'create': 'create'
  },

  // swapView: function(view){
  //   this.$el.html(view.render().el);
  // },

  post: function(){
    console.log("something different");
  },

  index: function(){

    var mainCol = new App.mainColView();
    var mainColEl = mainCol.render().$el;
    this.$el.append(mainColEl);

    var postCollection = new App.postCollection();
    postCollection.fetch({
      success: function(results) {

        for (var i=0; i<results.length; i++){
          var postView = new App.postView({model: results.models[i]});
          var postViewEl = postView.render().$el;
          mainColEl.append(postViewEl);
        }
      }.bind(this)
    });
    // var links = new Shortly.Links();
    // var linksView = new Shortly.LinksView({ collection: links });
    // this.swapView(linksView);
  },

  // create: function(){
  //   this.swapView(new Shortly.createLinkView());
  // }
});