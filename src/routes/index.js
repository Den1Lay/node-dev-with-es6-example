import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'World' });
});
router.get('/staff', (req, res) => {
  res.send('Wellcom on staff')
})

export default router;
