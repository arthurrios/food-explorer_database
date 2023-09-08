const { Router } = require("express")

const DishesController = require("../controllers/DishesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesRoutes = Router()

const dishesController = new DishesController()

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.get("/:id/:user_id", dishesController.show)
dishesRoutes.get("/", dishesController.index)
dishesRoutes.post("/:user_id", dishesController.create)
dishesRoutes.put("/:id/:user_id", dishesController.update)
dishesRoutes.delete("/", dishesController.delete)

module.exports = dishesRoutes