const { Router } = require("express");

const {
	findStudent,
	createStudent,
	updateSubject,
	deleteStudent,
	getData
} = require("../functions");

const router = Router();

router.get("/hello-world", (req, res) => {
	res.send("Hello World!");
});

router.get("/get", (req, res) => {
	res.send();
});

router.get("/params/:params", (req, res) => {
	res.send();
});

router.post("/post", (req, res) => {
	res.send();
});

router.post("/students/create", (req, res) => {
	res.send();
});

router.get("/students/read/:id", (req, res) => {
	res.send();
});

router.post("/students/update/:id", (req, res) => {
	res.send();
});

router.get("/students/delete", (req, res) => {
	res.send();
});

module.exports = router;
