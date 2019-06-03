const express = require("express");
const morgan = require("morgan");
const { db } = require("./db");
const { auth, stats} = require("./api");

const server = express();
const PORT = 8080;

server.use(express.static("../public"))

server.use(morgan)

server.use(express.json())

server.use("/auth", auth);
server.use("/stats", stats);


function init (){
  db.sync({force:true});
  server.listen(PORT, () => {
    console.log(` -- the server is listning on ${port} -- `)
  });
}

init();
