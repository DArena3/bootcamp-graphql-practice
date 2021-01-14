const merge = require('lodash.merge')
const Author = require('./Author')

const resolvers = [Author]

module.exports = merge(...resolvers)
