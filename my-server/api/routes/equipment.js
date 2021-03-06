const Equipment = require('../../models/equipment')

module.exports = (router) => {
  router.get('/equipment/:id', (req, res) => {
    Equipment.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding equipment',
          error: err
        }))
  })

  router.get('/equipment', (req, res) => {
    Equipment.find({})
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding equipments',
          error: err
        }))
  })

  router.post('/equipment', (req, res) => {
    let equipment = new Equipment(req.body)
    equipment.save((err, equipment) => {
      if (err) return console.log(err)
      res.status(200).json(equipment)
    })
  })

  router.put('/equipment', (req, res) => {
    let query = { _id: req.body._id }
    let doc = {
      name: req.body.name
    }
    Equipment.update(query, doc, (err, respRaw) => {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })

  router.delete('/equipment/:id', (req, res) => {
    let query = { _id: req.params.id }
    Equipment.deleteOne(query, (err, respRaw) => {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}
