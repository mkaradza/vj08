const mongoose = require('mongoose')
const password = 'mateasifra123'
const dbname = 'poruke-api'

const url = `mongodb+srv://oarwa-mk:${password}@cluster0.qihbb.mongodb.net/${dbname}?retryWrites=true&w=majority`

const porukaSchema = new mongoose.Schema({
  sadrzaj: {
    type: String,
    minlength: 5,
    required: true
  },
  datum: {
    type: Date,
    required: true
  },
  vazno: {
    type: Boolean,
    default: false
  }
})

porukaSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = doc._id.toString()
    delete ret._id
    delete ret.__v
    return ret
  }
})

module.exports = mongoose.model('Poruka', porukaSchema, 'poruke')
