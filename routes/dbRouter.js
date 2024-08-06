const { Router } = require("express");
const dbController = require("../controllers/dbController");
const dbRouter = Router();


dbRouter.get("/", dbController.createUsernameGet);

dbRouter.get("/new", dbController.getUsernames);

dbRouter.post("/new", dbController.createUsernamePost);

module.exports = dbRouter;