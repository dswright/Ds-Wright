App.Router = Backbone.Router.extend({
  initialize: function(options){ //options
    this.$el = options.el;
  },

  routes: {
    'create': 'index',
    'home': 'index',
    '': 'index'
   // 'create': 'create'
  },

  // swapView: function(view){
  //   this.$el.html(view.render().el);
  // },

  index: function(){

     var mainCol = new App.mainColView();
    this.$el.append(mainCol.render().$el);
    
    var rightCol = new App.rightColView();
    this.$el.append(rightCol.render().$el);

   

    console.log(this.$el);
    console.log("something easy");
    // var links = new Shortly.Links();
    // var linksView = new Shortly.LinksView({ collection: links });
    // this.swapView(linksView);
  },

  // create: function(){
  //   this.swapView(new Shortly.createLinkView());
  // }
});