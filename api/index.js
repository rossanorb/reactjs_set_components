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
        // If `origin` is missing (non-browser calls), allow it.
        if (!origin) return callback(null, true);

        // List of allowed origins.
        // Keep it explicit for credentials support.
        const allowedOrigins = [
          frontendUrl, // from api/.env -> e.g. http://localhost:3001
          'http://localhost:3000',
          'http://localhost:3001',
          'http://127.0.0.1:3000',
          'http://127.0.0.1:3001',
        ].filter(Boolean);

        if (!allowedOrigins.includes(origin)) {
          return callback(new Error('Not allowed by CORS'));
        }

        return callback(null, true);
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
