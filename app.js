requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        backbone: 'backbone-min',
        jquery:  'jquery',
        marionette: 'backbone.marionette.min',
        underscore: 'underscore',
        bootstrap: 'bootstrap.min',
        babel: 'babel-register'
    },

    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["jquery", "underscore"]
      },
      marionette: {
        deps: ["backbone"],
        exports: "Marionette"
      },
      bootstrap: {
        deps: ["jquery"]
      }
    }
});

requirejs(['...../register']);
