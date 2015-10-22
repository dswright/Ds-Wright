App.postCollection = Backbone.Collection.extend({
  initialize: function(){
    this.model = App.postModel;
    this.url = "/json/posts/";
  }
});

App.projectCollection = Backbone.Collection.extend({
  initialize: function(){
    this.model = App.projectModel;
    this.url = "/json/projects/";
  }
})