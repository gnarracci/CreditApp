import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/credit', {

})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));