(function(flobn, _, Backbone, $){

  window.App = {
    collection: {},
    addView: {},
    listView: {},

    initialize: function(){
      App.collection = new flobn.collection.Clients();
      App.addView = new flobn.view.ClientFormView({collection: App.collection});
      App.listView = new flobn.view.ClientListView({collection: App.collection});
      App.saerchView = new flobn.view.SearchBarView({collection: App.collection});
      App.collection.fetch();
      App.addView.render();
    }
  };

  $(function(){
    
    App.initialize();
    
    $('#addbtn').click(function(){
      var client = new flobn.model.Client();
      App.addView.show(client);
    });
  });


}(flobn, _, Backbone, jQuery));