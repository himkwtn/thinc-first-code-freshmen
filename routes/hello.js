const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("fuck yeah");
});

module.exports = router;
