define(['marionette'], function (Marionette) {

  var ListItemView =  Marionette.ItemView.extend({
        triggers: {
          'click' : 'rowClicked'
        },
        className: 'itemRow',
        templateHelpers: function () {
          return {
            getRowColor: function () {
              if(this.patientid > '9000'){
                return 'row-red';
              } else if (this.patientid < '9000' && this.patientid > '8000') {
                return 'row-blue';
              } else {
                return '';
              }
            }
          }
        },
        template: _.template(
          '<span class="<%= getRowColor() %>"><span class="col-md-2"> <%= patientid %> </span>' +
          '<span class="col-md-3"> <%= firstname %>&nbsp;<%= lastname %>  </span>' +
          '<span> <%= state %> </span></span>')
      });

  var EmptyListView =  Marionette.ItemView.extend({
        className: 'col-md-7',
        template: _.template('No rows match this filter')
      });

  var ListCollection =  Marionette.CollectionView.extend({
      childEvents: {
        'rowClicked': function (view) {
                    this.triggerMethod('itemViewClicked', view);
                }
      },
      className: 'collectionlist',
      emptyView: EmptyListView,
      childView: ListItemView
    });

  return ListCollection
})
