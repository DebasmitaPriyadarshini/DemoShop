const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')




// const userRoutes = require('./routes/auth');
const userRoutes = require('./src/routes/auth');
const cartRoutes = require('./src/routes/cart');
const addressRoutes = require('./src/routes/address');
const oderRoutes = require('./src/routes/order');
const wishListRoutes = require('./src/routes/wishlist');
const userinitialdata = require('./src/routes/userinitialdata');
const followRoutes = require('./src/routes/follow');
const UsereditProfile = require('./src/routes/auth');



// environment variable 
env.config();

// mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@e-commcluster.m62kr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
 ).then(() => {
        console.log(`Database connected to ${process.env.MONGO_DB_DATABASE}`);
    });


app.use(cors());
app.use(express.json());

app.use('/api',userRoutes);
app.use('/api', cartRoutes);
app.use('/api', addressRoutes);
app.use('/api', oderRoutes);
app.use('/api', wishListRoutes);
app.use('/api',userinitialdata);
app.use('/api',followRoutes);
app.use('/api',UsereditProfile)


//routes
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'client/build')))

// app.use(express.static(path.join()))


// app.use(express.static('public'));

// Index route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})