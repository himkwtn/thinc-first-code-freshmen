const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("My name is Boss");
});

router.get("/get", (req, res) => {
  res.send(req.query);
});

module.exports = router;
