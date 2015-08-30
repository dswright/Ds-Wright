window.App = Backbone.View.extend({

  initialize: function(){
    this.$el = $('body').find('#body-container');

    console.log(this.$el);

    this.router = new App.Router({el: this.$el});

    this.router.on('route', function() {
      var rightCol = new App.rightColView();
      this.$el.append(rightCol.render().$el);
    });

    Backbone.history.start({pushState:true});

    //this.render();
  },
  
  render: function(){

    //var mainCol = new App.mainColView();
    //this.$el.find("#body-container").append(mainCol.render().$el);

    // var rightCol = new App.rightColView();

    // this.$el.find("#body-container").append(rightCol.render().$el);

    
    //var source = $("#post-template").html();
    //var template = Handlebars.compile(source);
    //var template2 = Handlebars.compile($("#bio-template").html());
    //this.$el.html('<div>on the side</div>');
    //$('#right-col').replaceWith(this.$el);
    //so once it is appended this method can be used.. until then... what to do?
    //this.$el.html('<div>another side</div>');

    //console.log(this.template);
    //this.$el.find("#main-col").html(template);
    //this.$el.find("#right-col").html(template2);
  }
});





