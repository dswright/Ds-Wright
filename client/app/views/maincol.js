
App.postView = Backbone.View.extend({

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