import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo/creditApp', {

})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));