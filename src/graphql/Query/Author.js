const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async () => {
  try {
    const a = await Author.query()
    return a
  } catch (err) {
    //console.log(err)
    throw new Error('Could not resolve authors')
  }
}

const books = async ({ id }, args, context) => {
  try {
    const b = await Book.query().where('authorId', id)
    return b
  } catch (err) {
    //console.log(err)
    throw new Error('Could not resolve books :(')
  }
}

const resolver = {
  Query: {
    allAuthors,
  },
  Author: {
    books,
  },
}

module.exports = resolver
