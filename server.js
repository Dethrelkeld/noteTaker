// Dependencies

const express = require('express');
const path = require('path');
const viewRoute = require("./routes/view");
const apiRoutes = require('./routes/api')
// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect routes
app.use("/", viewRoute);
app.use('/api', apiRoutes);

// start server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
