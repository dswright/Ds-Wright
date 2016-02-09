window.App = Backbone.View.extend({

  initialize: function(){
    this.$el = $('body').find('#body-container');

    //Create the router for the app. This will route the url to the correct view.
    this.router = new App.Router({el: this.$el});

    //Begin tracking of urls to allow for use of the back button for users.
    Backbone.history.start({pushState:true});
  },
});





