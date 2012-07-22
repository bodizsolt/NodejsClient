(function(flobn, _, Backbone, $){
 var clients = new flobn.collection.Clients(),
        view = new flobn.view.ClientFormView({collection: clients}),
        appView = new flobn.view.ClientListView({collection: clients});

  $(function(){
    
          view.render();
    $('#addbtn').click(function(){
      var client = new flobn.model.Client();
      view.show(client);
    });
  });


}(flobn, _, Backbone, jQuery));