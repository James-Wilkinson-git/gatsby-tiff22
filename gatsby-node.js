const axios = require('axios');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const allFilms = await axios.get(`https://tiff.net/festivalfilmlist`)
    .then(function(response) {
      return response.data.items
    });
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-films.js'),
    context: { allFilms }
  })
}
