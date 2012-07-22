(function(flobn, _, Backbone, $){

  flobn.view.ClientFormView = Backbone.View.extend({

    model: null,
    collection: null,

    template: _.template($('#client-dialog').html()),

    save: function(){
      var fields = this.$el.find(':input'),
          data = {},
          d = [];
      fields.each(function(){
        data[this.name] = this.value;
      });
      d = data.dob.split('/');
      
      data.dob = new Date(d[2], d[1], d[0]);

      this.model.set(data);
      this.collection.add(this.model);
      
      this.close();
    },

    close: function(){
      this.$el.find('form')[0].reset();
      this.$el.dialog('close');

      this.model = null;
    },

    render: function(){
      
      this.$el.dialog({
        modal: true,
        autoOpen: false,
        width: 600,
        height:350,
        resizable: false,
        draggable: false,
        title:'Add Client',
        show: { effect: 'drop', direction: "up" },
        buttons: {
          Ok: _.bind(this.save, this),
          Cancel: _.bind(this.close, this)
        }
      });
      return this;
    },

    show: function(model){
      this.model = model;

      if(!this.model.isNew()){
        this.$el.dialog('title','Edit Client');
      }

      this.$el.html(this.template(this.model.toJSON())).dialog('open');
      $('#dob-input',this.$el).datepicker({changeMonth: true, changeYear: true});
    }



  });

}(flobn, _, Backbone, jQuery));