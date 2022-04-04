const app = require("./app")
const connectDatabase = require('./config/database')



// Config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({path:"config/config.env"})
}

// Connecting Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})