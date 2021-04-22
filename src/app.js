const express = require('express');
const app = express();
const router = require('./routers/student');
require('./db/conn')
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`server runing on port ${port}`);
});