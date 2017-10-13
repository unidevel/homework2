import koa from 'koa';
import config from 'config';

var app = new koa();
require('./routes')(app);
var port = config.server.port || 4000;
app.listen(port);
console.log('koa started on port '+port+'!');
