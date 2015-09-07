App.postModel = Backbone.Model.extend({

});

App.fullPostModel = Backbone.Model.extend({
  initialize: function(options){
    this.postId = options.postId;
    this.urlRoot = '/post_source/'+this.postId;
  },
  
});