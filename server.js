var express = require('express'),
    router = require('./routes/router'),
    app;

app = express.createServer();
app.use(express.static( __dirname + '/public'));
app.use(express.bodyParser());

router.route(app);

console.log('starting server, http://localhost:8080/');
app.listen(8080);