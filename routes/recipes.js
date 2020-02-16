const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/recipes', async (req, res, next) => {
  const healthLabel = req.query.healthLabel;

  let url;

  if (healthLabel !== undefined) {
    url = `https://api.edamam.com/search?q=tacos&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${healthLabel}`;
  } else {
    url = `https://api.edamam.com/search?q=tacos&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;
  }
  // from=0&to=50
  axios
    .get(url)
    .then(function(response) {
      const arr = response.data.hits;
      res.json(arr);
      arr.map(item => console.log(item.recipe.label));
    })
    .catch(function(error) {
      // handle error
      res.json(error);
    });
  // .finally(function() {
  //   // always executed
  //   console.log('all done');
  // });
});

module.exports = router;
