const Exercise = require('../../models/exercise')

module.exports = (router) => {
  router.get('/exercise/:id', (req, res) => {
    Exercise.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding exercise',
          error: err
        }))
  })

  router.get('/exercises', (req, res) => {
    Exercise.find({})
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding exercises',
          error: err
        }))
  })

  router.post('/exercise', (req, res) => {
    let exercise = new Exercise(req.body)
    exercise.save((err, exercise) => {
      if (err) return console.log(err)
      res.status(200).json(exercise)
    })
  })

  router.put('/exercise', (req, res) => {
    console.log(req.body)
    let query = { _id: req.params.id }
    let doc = {
      isActive: req.body.isActive
    }
    Exercise.update(query, doc, (err, respRaw) => {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}
