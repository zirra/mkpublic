const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const EventSchema = Schema({
  myid: {
    type: String,
    default: shortId.generate,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  sdate: {
    type: Date,
    default: null,
    required: true
  },
  edate: {
    type: Date,
    default: null,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'events' 
});
 
class EventItem {
  static async AddItem (data) {
    try {
      let result = await this.create(data);
      return result
    } catch (error) {
      return error
    }
  }

  static async GetItems () {
    try {
      let result = await this.find()
        .exec();
        return result
      } catch (error) {
        return error
      }
  }

  static async getIem (id) {
    let {myid} = id
    try {
      let result = await this.findOne({myid})
        .exec()
      return result
    } catch (error) {
      return error
    }
  }
}

EventSchema.loadClass(EventItem);
module.exports = mongoose.model('EventItem', EventSchema);