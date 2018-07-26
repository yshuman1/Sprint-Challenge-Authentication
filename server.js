const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(bodyParser.json());
server.use(cors());

routes(server);

// if (process.env.NODE_ENV !== 'test') {
//   server.listen(5000, () => console.log('App running on port 5000'));
//   mongoose.connect('mongodb://localhost/auth-users')
//         .then(() => console.log('Successfully connected to MongoDB'))
//         .catch(err => console.log('Error connecting to MongoDB'));
// };

module.exports = {
  server
};
