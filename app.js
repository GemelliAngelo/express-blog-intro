const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    (post1 = {
      title: "Ciambellone",
      content: "Contenuto",
      image: "",
      tags: [""],
    }),
    (post2 = {
      title: "Cracker alla barbabietola ",
      content: "Contenuto",
      image: "",
      tags: [""],
    }),
    (post3 = {
      title: "Pane fritto dolce",
      content: "Contenuto",
      image: "",
      tags: [""],
    }),
    (post4 = {
      title: "Pasta alla barbabietola",
      content: "Contenuto",
      image: "",
      tags: [""],
    }),
    (post5 = {
      title: "Torta paesana",
      content: "Contenuto",
      image: "",
      tags: [""],
    }),
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log("Il server è online");
});
