window.App = Backbone.View.extend({

  initialize: function(){
    this.$el = $('body').find('#body-container');

    //Create the router for the app. This will route the url to the correct view.
    this.router = new App.Router({el: this.$el});

    //This router will automatically trigger the method associated with the current url in the router.
    //Always append the same rightCol before the router function is run.
    // this.router.on('route', function() {
    //   var rightCol = new App.rightColView();
    //   this.$el.append(rightCol.render().$el);
    // });

    //Begin tracking of urls to allow for use of the back button for users.
    Backbone.history.start({pushState:true});
  },
});





