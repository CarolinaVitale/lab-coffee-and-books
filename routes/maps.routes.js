
const router = require("express").Router()

router.get("/basic", (req, res, next) => res.render("maps/basic-map"))

module.exports = router