App.postCollection = Backbone.Collection.extend({
  initialize: function(){
    this.model = App.post;
    this.url = "json/posts.json";
  }
});