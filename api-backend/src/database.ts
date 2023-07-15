import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/creditApp', {

})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));