const app = require('./app.js');

require('dotenv').config();

let port = process.env.PORT;
if (port === null || port === '') {
  port = 3100;
}

app.listen(port, () => console.log(`pug commerce is listening on ${port}!`));
