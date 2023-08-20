require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT
const displayRoutes = require('express-routemap');
const sequelize = require('./config/db')
const { notFoundMessage } = require('./constants/messages')
/*------------------routes------------------*/
app.use(bodyParser.json())

  sequelize.authenticate()
  .then(() => {
   console.log('Db connected.');
    app.listen(port, () => {
      displayRoutes(app);
    })
  })
    .catch(err => console.log('Error: ' + err))
  
/**---------------not found route----------- */
app.use((req, res) => { 
    res.status(404).json({
        status: false,
        message: notFoundMessage
    })
})