const http = require('http');
const express = require('express')
const cors = require('cors')
const router = require("./routers/index")
const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app)
  
var server = http.createServer(app);
server.listen(4000, () => {
    console.log("Server started")
});

