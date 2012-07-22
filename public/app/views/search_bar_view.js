(function(flobn, _, Backbone, $){

  flobn.view.SearchBarView = Backbone.View.extend({
    el: $('#search-bar'),
    btn: {},
    input: {},
    events: {
      'keydown input': 'search',
      'click a': 'clear'
    },
    
    initialize: function(){
      this.btn = this.$el.find('a').css('visibility','hidden');
      this.input = this.$el.find('input');
    },

    search: function(e){
      if(e.target.value.length < 2 ){
        return;
      }
      this.btn.css('visibility','visible');
      this.collection.findByName(e.target.value);
    },

    clear: function(e){
      this.collection.fetch();
      this.input.val('');
      this.btn.css('visibility','hidden');
      e.preventDefault();
    }

  });

}(flobn, _, Backbone, jQuery));