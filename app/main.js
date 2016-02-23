// import '../lib/backbone.marionette.min.js'

import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import _ from 'underscore';
import LayoutController from './views/LayoutController.js';

// var TempItemView = Marionette.ItemView.extend({
//     tagName:'h3',
//     template: _.template('This is NOT a test!')
//   })

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

    /**  An example of how you can incorperate a Marionette view into an existing page **/

  // var region = new Marionette.Region({
  //   el: '.container-js'
  // })

  // region.show(new TempItemView());

  //** ------------------         End Example          ------------------ **//

