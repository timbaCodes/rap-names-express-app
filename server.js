const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  samara: {
    age: 27,
    birthName: "Semah Riahi",
    birthLocation: "Bizerte, Menzel Bourguiba",
  },
  balti: {
    age: 43,
    birthName: "Mohamed Salah Balti",
    birthLocation: "Tunis",
  },
  "stou R3d": {
    age: 25,
    birthName: "Mustpha Sghaier",
    birthLocation: "Tunis, BelleVue",
  },
  nordo: {
    age: "unknown",
    birthName: "Marwene Jibali",
    birthLocation: "Tunis, BelleVue",
  },
  lawejAgain: {
    age: "lawejAgain",
    birthName: "lawejAgain",
    birthLocation: "lawejAgain",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["lawejAgain"]);
  }
  // res.json(rappers);
});
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
