App.sidebarBioView = Backbone.View.extend({
  //template: Handlebars.compile($("#bio-template").html()),
  render: function(){
    var source = $("#bio-template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template);
    return this;
  }
});

App.sidebarCategoriesView = Backbone.View.extend({
  render: function(){
    var source = $("#sidebar-categories").html();
    var template = Handlebars.compile(source);
    this.$el.html(template);
    return this;
  }
});

App.sidebarProjectsView = Backbone.View.extend({
  render: function(){
    var source = $("#sidebar-projects").html();
    var template = Handlebars.compile(source);
    this.$el.html(template);
    return this;
  }
});

App.sidebarPostsView = Backbone.View.extend({
  render: function(){
    var source = $("#sidebar-posts").html();
    var template = Handlebars.compile(source);
    this.$el.html(template);
    return this;
  }
});

App.rightColView = Backbone.View.extend({
  initialize: function(){
  },
  className: "col-md-4",
  id: "right-col",
  render: function(){
    var sidebarBioView = new App.sidebarBioView();
    this.$el.append(sidebarBioView.render().$el);

    var sidebarCategoriesView = new App.sidebarCategoriesView();
    this.$el.append(sidebarCategoriesView.render().$el);

    var sidebarProjectsView = new App.sidebarProjectsView();
    this.$el.append(sidebarProjectsView.render().$el);

    var sidebarPostsView = new App.sidebarPostsView();
    this.$el.append(sidebarPostsView.render().$el);

    return this;
  }
});

App.postView = Backbone.View.extend({
  //template: Handlebars.compile($("#bio-template").html()),
  render: function(){
    var source = $("#post-template").html();
    var template = Handlebars.compile(source);
    this.$el.html(template);
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
    var postView = new App.postView();
    this.$el.append(postView.render().$el);
    return this;
  }
});