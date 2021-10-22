const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.get("/series", (req, res) => {
  const serie1 = {
    id: 1,
    name: "Test",
    slug: "test",
  };
  const series = [serie1];
  res.status(200).json(series);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
