import express from 'express';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';


const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Hello there'
};

const app = express();
app.use(`/graphql`, express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log(`All systems online at localhost:4000/`));