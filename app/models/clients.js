(function(flobn, _, Backbone){

  flobn.collection.Clients = Backbone.Collection.extend({
    model: flobn.model.Client,

    findByName: function(search){
      console.log('find by name');
    }
  });

}(flobn, _, Backbone));