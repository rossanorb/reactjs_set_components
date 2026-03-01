require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./routers/index');
const app = express();

const port = process.env.PORT || 3000;
const url = process.env.API_URL || 'http://localhost';

app.use(
  cors({
    origin: `${url}:${port}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

var server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server started ${url}:${port}`);
});
