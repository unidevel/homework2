import koa from 'koa';
import config from 'config';
import setupRoutes from './routes';

var app = new koa();
setupRoutes(app);
var port = config.server.port || 4000;
app.listen(port);
console.log('koa started on port '+port+'!');
