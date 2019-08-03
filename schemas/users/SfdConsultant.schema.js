const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SfdConsultantSchema = Schema({
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
  collection: 'sfdConsultants' 
});
 
class SfdConsultant {
  static async createIngredient (data) {
    try {
      let result = await this.create(data);
      return result;
    } catch (error) {
      return error;
    }
  }
}

SfdConsultantSchema.loadClass(SfdConsultant);
module.exports = mongoose.model('SfdConsultant', SfdConsultantSchema);