const Workout = require('../../models/workout')

module.exports = (router) => {
  router.get('/workout:id', (req, res) => {
    Workout.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding workout',
          error: err
        }))
  })
    .get('/workout', (req, res) => {
      Workout.find({})
        .then(docs => res.status(200)
          .json(docs))
        .catch(err => res.status(500)
          .json({
            message: 'Error finding workouts',
            error: err
          }))
    })

  router.post('/workout', (req, res) => {
    let workout = new Workout(req.body)
    workout.save((err, workout) => {
      if (err) return console.log(err)
      res.status(200).json(workout)
    })
  })

  router.put('/workout', (req, res) => {
    console.log(req.body)
    let query = { _id: req.params.id }
    let doc = {
      isActive: req.body.isActive
    }
    Workout.update(query, doc, (err, respRaw) => {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}
