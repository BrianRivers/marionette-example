define(['marionette', 'app/data/testdata', 'app/views/ListView', 'app/views/FooterView'], function (Marionette, TestData, ListView, FooterView) {
  return Marionette.LayoutView.extend({
    initialize: function () {

      // If you are pulling in data from the server that a region in your layout view needs, do this in the onRender function below

      var GenericModel = Backbone.Model.extend({});
      var GenericCollection = Backbone.Collection.extend({
        model: GenericModel
      });

      this.collection = new GenericCollection(TestData)
    },

    onRender: function () {
        this.list.show(new ListView ({
          collection: this.collection
        }));
    },

    ui: {
      list: '.list-container-js',
      footerMessage: '.footer-message-js',
      filter: '.filter-js'
    },

    regions: {
      list: '@ui.list',
      footerMessage: '@ui.footerMessage'
    },

    events: {
      'keyup @ui.filter': 'filterCollection'
    },

    filterCollection: function () {

      //Available next release
      this.list.currentView.filter = function (child, index, collection) {
        var regex = new RegExp(this.ui.filter.val(), 'i');

        if(child.get('firstname').match(regex) || child.get('lastname').match(regex)  || child.get('patientid').match(regex)) {
          return true;
        } else {
          return false;
        }
      }.bind(this);

      this.list.currentView.render();
    },

    childEvents: {
        itemViewClicked: function (view, childView) {
          this.footerMessage.show(new FooterView({model: childView.model}))
        },
        clearButtonClicked: function () {
          this.footerMessage.reset();
        }
    },

    template: _.template(
        '<h1>Marionette 101</h1> ' +
        '<hr> ' +
        '<div class="col-md-16">' +
                '<input class="filter-js input-lg" placeholder="Filter by Name or Id"/> ' +
        '</div><hr />' +
        '<div class="column-headers">' +
                '<span> <strong class="col-md-2"> Patient Id </strong> </span> ' +
                '<span class="col-md-3"><strong> Name </strong> </span> ' +
                '<span> <strong> State </strong> </span> ' +
        '</div>' +
        '<div class="list-container-js"></div>' +
        '<hr />' +
        '<div class="footer col-md-16">' +
          '<div class="footer-message-js"></div>' +
        '</div>'
      )
  });
})
