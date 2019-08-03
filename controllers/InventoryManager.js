const SfdInventorySchema = require('../schemas/inventory/SfdInventory.schema')

const InventoryManagerController = {
  test: async (req, res) => {
    try {
      let result = await SfdInventorySchema.AddItem({data:'test'})
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send('Unknown Error')
    }
  }
}

module.exports.Controller = InventoryManagerController;
module.exports.controller = (app) => {
  app.get('/v1/test', InventoryManagerController.test);
}