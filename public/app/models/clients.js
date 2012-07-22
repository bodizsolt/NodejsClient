(function(flobn, _, Backbone){

  flobn.collection.Clients = Backbone.Collection.extend({
    model: flobn.model.Client,
    url: '/v1/client',

    sort: function(field, inverse){
      inverse = inverse || false;
      var data = this.models.sort(function(a , b){
        console.log(typeof(a.get(field)));
        return a.get(field) > b.get(field) ? (inverse ? -1 : 1) : (inverse ? 1 : -1);
      });
     this.reset(data);
     data = null;
    }
  });

}(flobn, _, Backbone));