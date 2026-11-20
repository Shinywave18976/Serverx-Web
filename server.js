const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
const publicDir = path.join(__dirname, "public");

app.disable("x-powered-by");
app.use(express.static(publicDir, {
  extensions: ["html"],
  maxAge: "1h"
}));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`ServerX OFC is running on ${HOST}:${PORT}`);
});
