import mongoose from 'mongoose'

async function ConnectDatabase(){
    await mongoose.connect('mongodb://127.0.0.1:27017/parcel')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}

export default ConnectDatabase;