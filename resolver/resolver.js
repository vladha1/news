const News = require('../model/model')

const resolvers = {
  News: () => {
    // for finding all movies
    return News.find({})
  },

  newsByTitle: (args) => {
    return News.findOne({Title: args.Title})
  }
  
  ,

  newsSearch: (args) => {
    const query = `\"${args.Title}\"`
    return News.find({$text:{$search: query}}).sort( { Published: -1 } )
  }
  
  ,


  addNews: (args) => {
    let News = new News({
      Title: args.Title,
      Source: args.Source,
      Published: args.Published,
      Summary_Detail: args.Summary_Detail,
      link: args.link,
      Tags: args.Tags,
      _id: args._id
      
    })
    News.save()
    return News
  } 
}

module.exports = resolvers