(function(flobn, _, Backbone, $){
 
  $(function(){
    var clients = new flobn.collection.Clients(),
        view = new flobn.view.ClientFormView({collection: clients}),
        appView = new flobn.view.ClientListView({collection: clients});

          view.render();
    $('#addbtn').click(function(){
      var client = new flobn.model.Client();
      view.show(client);
    });
  });


}(flobn, _, Backbone, jQuery));