const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

/**
 * Required params:
 * 1. a schema of the graph data
 */
app.use('/graphql', graphqlHTTP({ schema }));

app.listen(4000, () => {
  console.log('now listening on port 4000');
});
