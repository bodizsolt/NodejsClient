(function(flobn, _, Backbone){

  flobn.collection.Clients = Backbone.Collection.extend({
    model: flobn.model.Client,
    url: '/v1/client',

    sort: function(field, inverse){
      inverse = inverse || false;
      var data = this.models.sort(function(a , b){
        return a.get(field) > b.get(field) ? (inverse ? -1 : 1) : (inverse ? 1 : -1);
      });
      this.reset(data);
      data = null;
    },

    findByName: function(key){
      var results = _.filter(this.models,function(model){
        var possibleMatch = model.get('name');
        return possibleMatch.toLowerCase().indexOf(key.toLowerCase()) !== -1;
      });
      this.reset(results);
    }

  });

}(flobn, _, Backbone));