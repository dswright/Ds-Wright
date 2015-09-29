App.postCollection = Backbone.Collection.extend({
  initialize: function(){
    this.model = App.postModel;
    this.url = "/json/posts/";
  }
});