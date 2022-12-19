const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql;

var books = [
  { name: 'The House of Morgan', genre: 'History', id: '1' },
  { name: 'Gone with the Wind', genre: 'Fiction', id: '2' },
  { name: 'Zero to One', genre: 'Nonfiction', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // get data from db, using the args
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
