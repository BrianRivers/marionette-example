import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import _ from 'lodash';

export default Marionette.ItemView.extend({
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
