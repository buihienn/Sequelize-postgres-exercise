const router = require('express').Router();

const {
    init,
    showList,
    showDetails,
} = require("../controller/blogController.js");


router.use("/", init);
router.get("/", showList);
router.get("/:id", showDetails);

module.exports = router;