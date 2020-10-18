const { Router } = require("express");
const indexControllers = require("../controllers/indexControllers");

const router = Router();

router.get("/", indexControllers.get_books);

router.get("/:id", indexControllers.get_book);

router.get("/about", indexControllers.about_site);

module.exports = router;
