(function(flobn, _, Backbone, $){

  flobn.view.ClientListView = Backbone.View.extend({
    el: $('#client-list'),
    tbody: {},

    events: {
      'click thead th:not(.actions)': 'sort'
    },
    sort: function(e){
      var th = $(e.target),
          field = th.data('sort-field'),
          inverse = th.data('sort-inverse') || false;
      this.collection.sort(field, inverse);
      th.data('sort-inverse',!inverse);
      e.preventDefault();
    },

    initialize: function(){
      this.collection.on('add', this.renderOne, this);
      this.collection.on('reset', this.render, this);

      this.tbody = this.$el.find('tbody');
    },

    render: function(){
      this.tbody.html('');
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