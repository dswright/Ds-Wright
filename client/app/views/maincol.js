
App.postView = Backbone.View.extend({
  //template: Handlebars.compile($("#bio-template").html()),
  render: function(){
    var src = $("#post-template").html();
    var template = Handlebars.compile(src);
    var context = {title: "something"};
    console.log(template(context));
    console.log(this.model.attributes);
    this.$el.html(template(context));
    return this;
  }
});

App.mainColView = Backbone.View.extend({
  initialize: function(){
    console.log("initializing");
  },
  className: "col-md-8",
  id: "main-col",
  render: function(){
    // var postView = new App.postView();
    // this.$el.append(postView.render().$el);
    return this;
  }
});