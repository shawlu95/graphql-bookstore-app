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

// find ALL books of a given author
{
  author(id: "2") {
    id, name, age, books {
      id, name, genre
    }
  }
}

// return all book names and author names
{
  books {
    name
  },
  authors {
    name
  }
}

// return all authors, and all books of each author
{
  authors {
    name,
    books {
      name
    }
  }
}
```

#### Mutation

```javascript
// add author and return the newly created author
mutation {
  addAuthor(name: "Ron Chernow", age: 73) {
    name, age
  }
}

mutation {
  addAuthor(name: "Margaret Mitchell", age: 122) {
    name, age
  }
}

mutation {
  addAuthor(name: "Peter Thiel", age: 55) {
    name, age
  }
}

mutation {
  addBook(name: "The House of Morgan", genre: "History", authorId: "63a0bdfeb2e9dcbfe2651a98") {
    name, genre
  }
}

mutation {
  addBook(name: "Gone with the Wind", genre: "Fiction", authorId: "63a0be404a72e1ab6412a04a") {
    name, genre
  }
}

mutation {
  addBook(name: "Zero to One", genre: "Nonfiction", authorId: "63a0be4e4a72e1ab6412a04c") {
    name, genre
  }
}
```

**GraphQLID** is a preferred way of id-stamping object.

- can query ID as integer
- can query ID as string
