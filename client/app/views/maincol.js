
App.postView = Backbone.View.extend({

  events: { 'click .continue-reading': 'postClick' },
  postClick: function() {
    console.log('postClicked!');
    app.router.navigate('post/13/123', {trigger: true});
    //run a route redirect to the new route which will reload the main col with the blog post.
  },
  render: function(){
    var template = _.template($("script#post").html());
    this.$el.html(template(this.model.attributes));
    return this;
  }
});

//view for the individual post page.
App.fullPostView = Backbone.View.extend({
  id: "full-post",
  render: function() {
    var template = _.template($("script#full-post").html());
    this.$el.html(template(this.model.attributes));
    return this;
  }
});

App.mainColView = Backbone.View.extend({
  className: "col-md-8",
  id: "main-col",
  render: function(){
    return this;
  }
});