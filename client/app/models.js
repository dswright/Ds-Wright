App.postModel = Backbone.Model.extend({
});

App.projectModel = Backbone.Model.extend({
});

App.fullPostModel = Backbone.Model.extend({
  initialize: function(options){
    this.postId = options.postId;
    this.urlRoot = '/post-source/'+this.postId+"/";
  },
});

App.fullProjectModel = Backbone.Model.extend({
  initialize: function(options){
    this.projectUrl = options.projectUrl;
    this.urlRoot = '/project-source/'+this.projectUrl+"/";
  }
});