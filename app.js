const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

/**
 * Required params: a schema of the graph data
 * Optional dashboard: http://localhost:4000/graphql
 */
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('now listening on port 4000');
});
