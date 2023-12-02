const express = require('express')
const app = express()
const port = 3001
const mongoDB = require('./database.js')

mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(express.json());
app.use('/api', require("./route/auth.js"));
app.use('/api2',require("./route/employee_route.js"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
