/* hidden file for storing important credentials */
require("dotenv").config()

/* express */
const express = require("express")
const app = express()

/* Other dependencies */
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
// Continue importing more dependencies from here...


/* DB Connection (uncomment this block, if db connection is required)
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err)
})
*/

// app.use(express.static("public")) // Use only when index.html is required

/* Using middlewares */
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

/* Routes */
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})



/* Port for localhost server to deploy and run */
const port = process.env.PORT

/* Server startpoint */
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
    console.log(`Your app is available here -> http://localhost:${port}/`)
    console.log("Press (CTRL + C) to exit the server!")
})