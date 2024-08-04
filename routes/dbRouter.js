const { Router } = require("express");
const dbController = require("../controllers/dbController");
const dbRouter = Router();


dbRouter.get("/", dbController.showUsers);

dbRouter.get("/new", dbController.getUser);

dbRouter.post("/new", dbController.postUser);

module.exports = dbRouter;