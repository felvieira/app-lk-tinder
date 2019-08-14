const express = require(`express`),
      mongoose = require("mongoose"),
      routes = require(`./routes`),
      server = express(),
      cors = require("cors");

mongoose.connect(
  "mongodb+srv://flpchapola:quesenha666@rockettinder-mrwv4.mongodb.net/rockettinder?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000);
