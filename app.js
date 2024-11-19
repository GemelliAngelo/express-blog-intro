const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    (post1 = {
      title: "Ciambellone",
      content: "Contenuto",
      image: "/ciambellone.jpeg",
      tags: [""],
    }),
    (post2 = {
      title: "Cracker alla barbabietola ",
      content: "Contenuto",
      image: "/cracker_barbabietola.jpeg",
      tags: [""],
    }),
    (post3 = {
      title: "Pane fritto dolce",
      content: "Contenuto",
      image: "/pane_fritto_dolce.jpeg",
      tags: [""],
    }),
    (post4 = {
      title: "Pasta alla barbabietola",
      content: "Contenuto",
      image: "/pasta_barbabietola.jpeg",
      tags: [""],
    }),
    (post5 = {
      title: "Torta paesana",
      content: "Contenuto",
      image: "/torta_paesana.jpeg",
      tags: [""],
    }),
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log("Il server è online");
});
