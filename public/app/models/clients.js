(function(flobn, _, Backbone){

  flobn.collection.Clients = Backbone.Collection.extend({
    model: flobn.model.Client,
    url: '/v1/client',

    findByName: function(search){
      console.log('find by name');
    }
  });

}(flobn, _, Backbone));