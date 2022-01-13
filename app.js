const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const newsSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')


require('dotenv').config({ path: './.env' })
const mongokey=process.env.KEY

console.log(mongokey)
mongoose.connect(mongokey,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('MongoDB Connected'))
.catch((err) => console.log('Error', err)) 


app.use(cors())
// Setting GraphQL
app.use('/graphql', graphqlHTTP({
  schema: newsSchema,
  graphiql: true,
  rootValue: resolvers
}))


app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4000, () => {
  console.log('Server on port 4000')
})