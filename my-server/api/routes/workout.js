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
}
