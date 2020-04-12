let db = require('../db');

module.exports.index = (req, res) => {
  let page = parseInt(req.query.page) || 1; // n
  let perPage = 8; // x

  let start = (page - 1) * perPage; // (n - 1) * x
  let end = page * perPage; // n * x

  let drop = (page - 1) * perPage;

  res.render('products/index', {
    // products: db.get('products').value().slice(start, end)
    products: db.get('products').drop(drop).take(perPage).value()
  });
};