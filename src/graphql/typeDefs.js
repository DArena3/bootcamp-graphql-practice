const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allAuthors: [Author!]!
    author(id: ID!): Author!
    allBooks: [Book!]!
    authorBooks: [Book!]!
    bestsellers: [Book!]!
    book(id: ID!): Book!
    authorAddress(id: ID!): Address!
    publisherAddress(id: ID!): Address!
  }

  type Mutation {
    addAddress(input: AddressInput!): Address!
    addAuthor(addressID: ID!, input: AuthorInput): Author!
    addPublisher(addressID: ID!, input: PublisherInput): Publisher!
    addBook(authorID: ID!, publisherID: ID!, input: BookInput!): Book!
  }

  type Address {
    id: ID!,
    street: String!,
    city: String!,
    zip: String!,
  }

  input AddressInput {
    street: String!,
    city: String!,
    zip: String!,
  }

  type Book {
    id: ID!,
    title: String!,
    language: String!,
    numPages: Int,
    datePublished: Date,
    bestseller:  Boolean,
    author: Author,
    publisher: Publisher,
  }

  input BookInput {
    title: String!,
    language: String!,
    numPages: Int,
    datePublished: Date,
    bestseller:  Boolean,
  }

  type Author {
    id: ID!,
    firstName: String!,
    lastName: String!,
    age: Int,
    email: String,
    numBooksPublished: Int,
    address: Address,
    books: [Book!]!,
  }

  input AuthorInput {
    firstName: String!,
    lastName: String!,
    age: Int,
    email: String,
    numBooksPublished: Int,
  }

  type Publisher {
    id: ID!,
    company: String!,
    phoneNumber: String,
    numBooksPublished: Int,
    address: Address,
    books:[Book!]!,
  }

  input PublisherInput {
    company: String!,
    phoneNumber: String,
    numBooksPublished: Int,
  }

  scalar Date
`
