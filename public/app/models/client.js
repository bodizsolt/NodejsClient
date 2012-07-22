(function(flobn, _, Backbone){

  flobn.model.Client = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      email: '',
      company: '',
      dob: new Date()//day of birth
    },

    initialize: function(){
      /*this.on('change:dob', function(model, value){
        //small hack to make sure we always have a date object in here
        var d = [];
        if(_.isDate(value)){ return ;}
        d = value.split('/');
        model.attributes['dob'] = new Date(d[2], d[1] - 1, d[0] - 0);
      });*/
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
/*


db.clients.save({name: 'Gus Grissom', dob:'02/21/1967', company: 'Apollo', email: 'ggrissom@apollo.com' })
db.clients.save({name: 'Wally Schirra', dob: '10/11/1968', company: 'Apollo', email: 'wschirra@apollo.com' })
db.clients.save({name: 'Frank Borman', dob: '12/21/1968', company: 'Apollo', email: 'fborman@apollo.com' })
db.clients.save({name: 'James McDivitt', dob: '3/3/1969', company: 'Apollo', email: 'jmcDivitt@apollo.com' })



db.clients.save({name: 'Thomas Patten Stafford', dob: '05/18/1969', company: 'Apollo', email: 'tstafford@apollo.com'})
db.clients.save({name: 'Neil  Armstrong', dob: '07/16/1969', company: 'Apollo', email: 'narmstrong@apollo.com' })
db.clients.save({name: 'Pete Conrad', dob: '11/14/1969', company: 'Apollo', email: 'pconrad@apollo.com' })
db.clients.save({name: 'Jim Lovell', dob: ' 04/11/1970', company: 'Apollo', email: 'jlovell@apollo.com' })
db.clients.save({name: 'Alan Shepard', dob: '01/31/1971', company: 'Apollo', email: 'ashepard@apollo.com' })
db.clients.save({name: 'David Scott', dob: '07/26/1971', company: 'Apollo', email: 'dscott@apollo.com' })
db.clients.save({name: 'John Young', dob: '04/16/1972', company: 'Apollo', email: 'jyoung@apollo.com' })
db.clients.save({name: 'Eugene Andrew Cernan', dob: '12/7/1972', company: 'Apollo', email: 'ecernan@apollo.com' })

*/