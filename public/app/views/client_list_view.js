(function(flobn, _, Backbone, $){

  flobn.view.ClientListView = Backbone.View.extend({
    el: $('#client-list'),
    tbody: {},

    initialize: function(){
      this.collection.on('add', this.renderOne, this);
      this.collection.on('reset', this.render, this);

      this.tbody = this.$el.find('tbody');
    },

    render: function(){
      this.collection.each(_.bind(this.renderOne, this));
    },

    renderOne: function(client){
      var view = new flobn.view.ClientItemView({model: client});

      this.tbody.prepend(view.render().el);
      view = null;
      return this;

    }
  });

}(flobn, _, Backbone, jQuery));
/**
var clients = new flobn.collection.Clients();
var appView = new flobn.view.ClientList({collection: clients});
clients.add({name: 'gigi',email:'aaa@aaa.aaa',dob: '10/10/1986'});
*/