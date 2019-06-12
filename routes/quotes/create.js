const Quote = require('../../models/ProgrammingQuote')

module.exports =  (req, res) => {
  const {en, sr, author, source} = req.body

  Quote.create({en, sr, author, source}, (err, quote) => {
    if (err) return console.error(err)
    res.send({message: 'SUCCESS_SAVED', quote})
  })
}
