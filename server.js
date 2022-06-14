require('./config/db')

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/User');

const bodyParser = require('express').json;
const cors = require("cors");
// using the application
app.use(bodyParser());
app.use(cors());
app.use('/user', UserRouter);

app.listen(port, () => {
    console.log("server running on port: " + port);
})