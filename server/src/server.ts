import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Testing");

  response.json({ success: true });
});

app.listen(3333);
