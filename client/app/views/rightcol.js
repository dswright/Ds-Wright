App.sidebarBioView = Backbone.View.extend({
  //template: Handlebars.compile($("#bio-template").html()),
  render: function(){
    // var source = $("#bio-template").html();
    var template = _.template($("script#bio-template").html());
    this.$el.html(template);
    return this;
  }
});

App.categoryLinkView = Backbone.View.extend({
  className: "category-link",
  initialize: function(category) {
    this.category = category;
  },
  render: function() {
    this.$el.html("<a href='/category/"+this.category+"/'>"+this.category+"</a>");
    return this;
  }
});

App.sidebarCategoriesView = Backbone.View.extend({
  initialize: function(postModels) {
    this.postModels = postModels;
  },
  getCategories: function(results){
    //get all of the categories from the JSON file.
    var categories = [];
    for (var i=0; i<results.models.length; i++){
      for (var j=0; j<results.models[i].get('categories').length; j++) {
        if (categories.indexOf(results.models[i].get('categories')[j]) === -1) {
          categories.push(results.models[i].get('categories')[j]);
        }
      }
    }
    return categories
  },
  render: function() {
    // var source = $("#sidebar-categories").html();
    var template = _.template($("script#sidebar-categories").html());
    this.$el.html(template);
    var $categoryCloud = this.$el.find('#category-cloud');
    var categories = this.getCategories(this.postModels);
    for (var i=0; i<categories.length; i++){
      var categoryView = new App.categoryLinkView(categories[i]);
      $categoryCloud.append(categoryView.render().$el);
    }
    return this;
  }
});

App.sidebarPostsView = Backbone.View.extend({
  initialize: function(postModels){
    this.postModels = postModels
  },

  render: function(){
    var template = _.template($("script#sidebar-posts").html())
    this.$el.html(template);
    for(var i=0;i<this.postModels.models.length;i++){
      var postTitle = new App.sidebarPostTitle({model:this.postModels.models[i]});
      this.$el.find('#sidebar-posts').append(postTitle.render().$el);
    }
    return this;
  }
});

App.sidebarPostTitle = Backbone.View.extend({
  className: "sidebar-post",
  render: function() {
    var template = _.template($("script#sidebar-post-title").html());
    this.$el.html(template(this.model.attributes));
    return this;
  }
})

App.sidebarProjectsView = Backbone.View.extend({
  initialize: function(projectModels){
    this.projectModels = projectModels;
  },

  render: function(){
    var template = _.template($("script#sidebar-projects").html())
    this.$el.html(template);
    for(var i=0;i<this.projectModels.models.length;i++){
      var projectTitle = new App.sidebarProjectTitle({model:this.projectModels.models[i]});
      this.$el.find('#sidebar-projects').append(projectTitle.render().$el);
    }
    return this;
  }
});

App.sidebarProjectTitle = Backbone.View.extend({
  className: "sidebar-project",
  render: function() {
    var template = _.template($("script#sidebar-project").html());
    this.$el.html(template(this.model.attributes));
    return this;
  }
});

App.rightColView = Backbone.View.extend({
  className: "col-md-4",
  id: "right-col",
  render: function(){
    var postCollection = new App.postCollection();
    postCollection.fetch({
      success: function(posts) {
        console.log("post collection fetched")
        this.postModels = posts;
        var projectCollection = new App.projectCollection();
        projectCollection.fetch({
          success: function(projects) {
            this.projectModels = projects;
            var sidebarBioView = new App.sidebarBioView();
            this.$el.append(sidebarBioView.render().$el);

            var sidebarCategoriesView = new App.sidebarCategoriesView(this.postModels);
            this.$el.append(sidebarCategoriesView.render().$el);

            var sidebarPostsView = new App.sidebarPostsView(this.postModels);
            this.$el.append(sidebarPostsView.render().$el);

            var sidebarProjectsView = new App.sidebarProjectsView(this.projectModels);
            this.$el.append(sidebarProjectsView.render().$el);
          }.bind(this)
        });
      }.bind(this)
    });
    return this;
  }
});