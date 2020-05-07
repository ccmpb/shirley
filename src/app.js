const express = require("express");
const { exec } = require("child_process");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  exec("shuf -n1 data/words", (err, stdout, stderr) => {
    if (err) {
      return res.send(err);
    }
    if (stderr) {
      return res.send(stderr);
    }

    res.send(stdout.toLowerCase());
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
