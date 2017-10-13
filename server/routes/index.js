module.exports = function(app) {
    var Router = require('koa-router');
    var router = new Router();
    var graphqlHTTP = require('koa-graphql');
    var mySchema = require('../schemas');

    router.all('/graphql', graphqlHTTP({
        schema: mySchema,
        graphiql: true
    }));
    app.use(router.routes()).use(router.allowedMethods());
}
