(function(flobn, _, Backbone){

  flobn.model.Client = Backbone.Model.extend({
    defaults: {
      name: '',
      email: '',
      company: '',
      dob: new Date()//day of birth
    }
  });

}(flobn, _, Backbone));