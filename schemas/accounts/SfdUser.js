const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const SfdUserSchema = Schema({
  ourId: {
    default: shortId.generate,
    type: String
  },
  mkid: {
    type: String,
    required: true
  },
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'sfdUsers' 
});

class SfdUser {
  static async createModel(data) {
    let {mkid} = data
    try {
      let user = await this.findOne({mkid: mkid})
      .exec()
      if (!Boolean(user)){
        let newuser = await this.create(data)
        return  newuser
      } else {
        return false
      }
    } catch (err){
      console.log(err)
      return err 
    }
  }

  static async findUser(data) {
    console.log(data)
    try {
      let user = await this.findOne({mkid: data})
        .exec()
      if(Boolean(user)) {
        return user
      } else {
        return false
      }
    } catch (err){
      console.log(err)
      return err 
    }
  }
}

SfdUserSchema.loadClass(SfdUser);

module.exports = mongoose.model('sfdUser', SfdUserSchema);