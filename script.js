const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });



app.use(router, urlencodedParser);

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});
