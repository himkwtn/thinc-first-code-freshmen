const {
	findStudent,
	createStudent,
	updateSubject,
	deleteStudent
} = require("../functions");
const { Router } = require("express");
const router = Router();

router.get("/read/:id", (req, res) => {
	res.send();
});

router.get("/delete", (req, res) => {
	res.send(studentToDelete);
});

router.post("/create", (req, res) => {
	res.send();
});

router.post("/update", (req, res) => {
	res.send();
});

router.get("/delete", (req, res) => {
	res.send();
});

module.exports = router;
