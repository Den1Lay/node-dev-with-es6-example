import express from 'express';

var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'World' });
  })
  .get('/staff', (req, res) => {
    res.json({go: "AWAY!"})
  })


export default router;
