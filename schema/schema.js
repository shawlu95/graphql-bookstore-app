const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

var books = [
  { name: 'The House of Morgan', genre: 'History', id: '1' },
  { name: 'Gone with the Wind', genre: 'Fiction', id: '2' },
  { name: 'Zero to One', genre: 'Nonfiction', id: '3' },
];

var authors = [
  { name: 'Ron Chernow', age: 73, id: '1' },
  { name: 'Margaret Mitchell', age: 122, id: '2' },
  { name: 'Peter Thiel', age: 55, id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
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
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
