App.postModel = Backbone.Model.extend({
});

App.projectModel = Backbone.Model.extend({
});

App.fullPostModel = Backbone.Model.extend({
  initialize: function(options){
    this.postId = options.postId;
    this.urlRoot = '/post_source/'+this.postId+"/";
  },
});

App.fullProjectModel = Backbone.Model.extend({
  initialize: function(options){
    this.projectUrl = options.projectUrl;
    this.urlRoot = '/project_source/'+this.projectUrl+"/";
  }
});