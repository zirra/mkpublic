const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const EventSchema = Schema({
  dbid: {
    type: String,
    default: shortId.generate,
    index: true
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
      return result;
    } catch (error) {
      return error;
    }
  }
}

EventSchema.loadClass(EventItem);
module.exports = mongoose.model('EventItem', EventSchema);