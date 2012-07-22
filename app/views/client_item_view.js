(function(flobn, _, Backbone, $){

  flobn.view.ClientItemView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#client-list-item').html()),
    events:{
      'click .edit': 'edit',
      'click .del': 'remove'
    },
    initialize: function(){
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    edit: function(){
      console.log('edit', this, arguments);
    },

    remove: function(){
      console.log('remove', this, arguments);
    }

  });

}(flobn, _, Backbone, jQuery));