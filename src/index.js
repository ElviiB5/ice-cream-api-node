const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
require('dotenv').config()

//settings
app.set('port',process.env.PORT || 3000)
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin: '*' }));
app.use(express.json());

//routes
app.use('/api/ice-creams', require('./routes/ice-cream'));

app.listen(app.get('port'), () => {
console.log(`Server running on port ${app.get('port')}`);
console.log(process.env.MYSQLDB_NAME);
})