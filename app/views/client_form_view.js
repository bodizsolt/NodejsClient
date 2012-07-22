(function(flobn, _, Backbone, $){

  flobn.view.ClientFormView = Backbone.View.extend({

    model: null,
    collection: null,

    template: _.template($('#client-dialog').html()),

    save: function(){
      var fields = this.$el.find(':input'),
          data = {},
          d = [];
      //clear errors in case we need to
      $('.error',this.$el).removeClass('error');

      fields.each(function(){
        data[this.name] = this.value;
      });
      
      this.model.set(data, { error: _.bind(this.validationErrors, this)});

      if(this.model.isValid()){
        this.collection.add(this.model);
        this.close();
      }
    },

    validationErrors: function(model, errors){
      var me = this;
      _.each(_.keys(errors), function(key, index){
        $('#' + key + '-input', me.$el).parents('.control-group').addClass('error');
      });
    },

    close: function(){
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
          Save: _.bind(this.save, this),
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