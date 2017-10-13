const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('debug', true)

const DB_ADDRESS = 'mongodb://localhost/bingpic'
mongoose.createConnection(DB_ADDRESS)

const db = mongoose.connection
db.on('error', (err) => console.error(`mongodb connection err: ${err}`))
db.once('open', () => console.log(`mongodb connection ok @${new Date()}`))

const bingPicSchema = mongoose.Schema({
    url: String,
    urlbase: String,
    name: String,
    copyright: String,
    startdate: String,
    fullstartdate: String
})

mongoose.BingDailyPic = mongoose.model('BingDailyPic', bingPicSchema) 

module.exports = mongoose
