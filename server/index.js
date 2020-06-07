const app = require('./app.js');

require('dotenv').config();

let port = process.env.PORT;
if (port === undefined || port === '') {
  port = 4000;
}

app.listen(port, () => console.log(`plant-commerce is listening on ${port}!`));
