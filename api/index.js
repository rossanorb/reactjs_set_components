require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const router = require('./routers/index');
const app = express();

const port = process.env.PORT || 3000;
const url = process.env.API_URL || 'http://localhost';
const frontendUrl = process.env.FRONTEND_URL;

app.use(
    cors({
      origin: function (origin, callback) {        
        // list of origin allowed
        const allowedOrigins = [
            frontendUrl,
            'http://localhost:3000'
        ];

        if (allowedOrigins.indexOf(origin) === -1) {
            callback(new Error('Not allowed by CORS').message);
        }

        callback(null, true);
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

var server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server started ${url}:${port}`);
});
