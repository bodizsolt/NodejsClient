(function(flobn, _, Backbone, $){

  flobn.view.ClientItemView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#client-list-item').html()),
    events:{
      'click .edit': 'edit',
      'click .del': 'del'
    },
    initialize: function(){
      this.model.bind('change', this.render, this);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    edit: function(e){
      App.addView.show(this.model);
      e.preventDefault();
    },

    del: function(e){
      if(!confirm('Are you sure you want to remove this client?')){
        return false;
      }
      this.model.destroy();
      this.remove();
      e.preventDefault();
    }
  });

}(flobn, _, Backbone, jQuery));