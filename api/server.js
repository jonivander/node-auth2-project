const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

server.use(
  express.json(),
  helmet(),
  morgan(),
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: "up" })
}); 

module.exports = server; 
