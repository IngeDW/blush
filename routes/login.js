const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {                                                  // Inge
  res.render('login');
});

router.post('/', (req, res) => {                                                 // Inge
  console.log('De post werkt!!!');
  res.redirect('feed');
});

module.exports = router;
