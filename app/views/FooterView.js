define(['marionette'], function (Marionette) {
  return ListItemView =  Marionette.ItemView.extend({
        ui: {
          button: '.button-js',
        },
        triggers: {
          'click @ui.button': 'clearButtonClicked'
        },
        template: _.template(
          '<%= firstname %> <%= lastname %> was born in <%= state %>' +
          '<div><button type="button" class="button-js btn-primary">Clear</button></div>')
      });
})
