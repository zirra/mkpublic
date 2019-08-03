const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const SfdInventorySchema = Schema({
  ourId: {
    type: String,
    default: shortId.generate
  },
  sfdCode: {
    type: String,
    default: null
  },
  sfdName: {
    type: String,
    default: null
  },
  sfdPart: {
    type: String,
    default: null
  },
  attr: {
    type: String,
    default: null
  },
  partName: {
    type: String,
    default: null
  },
  method: {
    type: String,
    default: null
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'sfdInventory' 
});
 
class SfdItem {
  static async AddItem (data) {
    try {
      let result = await this.create(data);
      return result;
    } catch (error) {
      return error;
    }
  }
}

SfdInventorySchema.loadClass(SfdItem);
module.exports = mongoose.model('SfdItem', SfdInventorySchema);