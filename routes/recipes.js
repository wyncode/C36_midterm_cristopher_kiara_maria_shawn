const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/recipes/:query/', async (req, res, next) => {
  const healthLabel = req.query.healthLabel;

  let url;

  if (healthLabel !== undefined) {
    console.log(req.params.query);
    url = `https://api.edamam.com/search?q=${req.params.query}s&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${healthLabel}`;
  } else {
    url = `https://api.edamam.com/search?q=tacos+${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=19`;
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
