(function(flobn, _, Backbone, $){

  flobn.view.ClientListView = Backbone.View.extend({
    el: $('#client-list'),

    initialize: function(){
      this.collection.on('add', this.renderOne, this);
    },

    renderOne: function(client){
      var $tbody = this.$el.find('tbody'),
          view = new flobn.view.ClientItemView({model: client});

      $tbody.append(view.render().el);
      $tbody = null; view = null;
      return this;

    }
  });

}(flobn, _, Backbone, jQuery));
/**
var clients = new flobn.collection.Clients();
var appView = new flobn.view.ClientList({collection: clients});
clients.add({name: 'gigi',email:'aaa@aaa.aaa',dob: '10/10/1986'});
*/