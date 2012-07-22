(function(flobn, _, Backbone){

  flobn.model.Client = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      email: '',
      company: '',
      dob: new Date()//day of birth
    },

    validate: function(attrs){
      var fields = _.keys(this.defaults),
          i, len, errors = {};

      if(attrs._silent){
        return;//if silent then go away
      }

      for(i = 0, len = fields.length; i < len; i++){
        if(attrs[fields[i]]){
          continue;
        }
        errors[fields[i]] = fields[i] + 'required';
      }

      if(attrs.name < 2 || attrs.name > 100){
        errors.name = 'invalid name';
      }

      if(attrs.company < 2 || attrs.company > 100){
        errors.company = 'invalid company';
      }

      if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(attrs.email))) {
        errors.email = "invalid email";
      }

      if(_.keys(errors).length){
        return errors;
      }
    }


  });

}(flobn, _, Backbone));