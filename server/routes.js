import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import schema from './schema';
import resolver from './resolver';

export default function setupRoutes(app) {
    var router = new Router();

    router.all('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true
    }));
    app.use(router.routes()).use(router.allowedMethods());
}
