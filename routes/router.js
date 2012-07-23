var db = require('../db/db'),
    clientModel = require('../model/client_schema').clientModel;


function route(app){
  app.get('/v1/client', function(req, res){
    res.contentType('application/json');

    clientModel.find({}, function(err, clients){
      if(clients === null){
        return;
      }
      res.send(JSON.stringify(clients));
    });
  });

  app.post('/v1/client', function(req, res){
    res.contentType('application/json');

    var client = new clientModel();

    client.name = req.body.name;
    client.email = req.body.email;
    client.company = req.body.company;
    client.dob = new Date(req.body.dob);
    client.save(function(err){
      if(err) throw err;
      res.send(JSON.stringify(client));
    });
     
  });

  app.del('/v1/client/:id',function(req, res){
      
    clientModel.remove({_id: req.params.id}, function(err){
      if(err){
        res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 400);
        return;
      }
      res.send(200);
    });


    res.send(req.params.id);
  });

  app.put('/v1/client/:id', function(req, res){
    var data = {
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      dob: new Date(req.body.dob)
    };

    clientModel.update({_id: req.params.id}, data, {}, function(err, client){
      if(err){
        res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 400);
        return;
      }
      res.send(req.body);
    });

  });
}

exports.route = route;