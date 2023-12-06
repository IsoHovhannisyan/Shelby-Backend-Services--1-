const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug');

require('dotenv').config();

const app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/index'));
app.use('/api/user', require('./routes/users'));




app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  debug('Express server listening on port ' + server.address().port)
});
