const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/student-api", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('databse connnect successful')
    })
    .catch((err) => {
        console.log(err)
    })


