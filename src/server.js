require('dotenv').config();
// nạp tất cả các biến trong .env 
const express = require('express');
// import express
const path = require('path');
// module path có sẵn trong nodejs dùng để xử lý file
const configViewEngine = require('./config/viewEngine')
// config template engine
const app = express();

// gọi một ứng dụng express
const port = process.env.PORT || 8989;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');


configViewEngine(app);


app.use(express.json());
app.use(express.urlencoded({extended : true}));
// define route

app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})