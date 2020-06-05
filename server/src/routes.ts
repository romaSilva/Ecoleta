import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json({ success: true });
});

export default routes;
