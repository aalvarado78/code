const express = require("express");
const route = express.Router();

const service = require("../service/render");
const controller = require("../controller/controller");

/**
 * @description root route
 * @method GET /
 */

route.get("/", service.homeRoutes);

/**
 * @description add hardware
 * @method GET / add-hardware
 */

route.get("/add-hardware", service.add_hardware);

/**
 * @description update hardware
 * @method GET / update-hardware
 */

route.get("/update-hardware", service.update_hardware);

//API
route.post("/api/hardware", controller.create);
route.get("/api/hardware", controller.find);
route.post("/api/hardware/:id", controller.update);
route.get("/api/hardware/:id", controller.delete);

module.exports = route;
