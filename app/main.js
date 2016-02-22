define(['marionette', 'app/views/LayoutController'], function(Marionette, LayoutController) {
  var TempItemView = Marionette.ItemView.extend({
    tagName:'h3',
    template: _.template('This is NOT a test!')
  })

  var App = new Marionette.Application();

  App.on('start', function () {

    // Layout Views should act as your controllers for managing child views

    if(Backbone.history) {
      Backbone.history.start();
    }

    var RootView = new LayoutController({
      el: '.container-js'
    })

      RootView.render();
  })

    App.start();

  // App.container.show(new TempItemView());

  /**  An example of how you can incorperate a Marionette view into an existing page **/

  // var region = new Marionette.Region({
  //   el: '.container-js'
  // })

  // region.show(new TempItemView());

  //** ------------------         End Example          ------------------ **//

})
