const User = require('../../models/user')

module.exports = (router) => {
  router.get('/user/:id', (req, res) => {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding user',
          error: err
        }))
  })

  router.get('/user/email:email', (req, res) => {
    User.find({ 'email': req.params.email }).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding user',
          error: err
        }))
  })

  router.post('/user', (req, res) => {
    console.log(req)
    let user = new User(req.body)
    user.save((err, user) => {
      if (err) return console.log(err)
      res.status(200).json(user)
    })
  })

  router.put('/user', (req, res) => {
    console.log(req.body)
    let query = { _id: req.params.id }
    let doc = {
      isActive: req.body.isActive
    }
    User.update(query, doc, (err, respRaw) => {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}
