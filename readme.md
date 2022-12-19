### GraphQL Bookstore App

GraphQL resolves the issues of:

- under-fetching
- over-fetching
- overly complex HTTP endpoints

Use **Graphical** to test out graph query:

```javascript
// find id, name, genre of book 1
{
  book(id: "1") {
    id, name, genre
  }
}

// find a book and author by id
{
  book(id: "1") {
    id, name, genre
  },
  author(id: 1) {
    age, name
  }
}

// find the book AND its author
{
  book(id: "1") {
    id, name, genre, author {
      id, name, age
    }
  }
}
```

**GraphQLID** is a preferred way of id-stamping object.

- can query ID as integer
- can query ID as string
