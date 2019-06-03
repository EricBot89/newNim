const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const { db } = require("./db");
const { auth, stats} = require("./api");

const server = express();
const PORT = 8080;

const APP_CORE = path.join(__dirname,"..","public","index.html");

server.use(volleyball)
server.use(express.json())

server.use(express.json())
server.use(express.urlencoded({extended: true}))



server.use(express.static(path.join(__dirname,"..","public")))

server.use("/auth", auth);
server.use("/stats", stats);

server.get("/", (req, res, next) => {
  res.status(200).sendFile(APP_CORE)
})


function init (){
  db.sync({force:true});
  server.listen(PORT, () => {
    console.log(` -- the server is listning on ${PORT} -- `)
  });
}

init();
