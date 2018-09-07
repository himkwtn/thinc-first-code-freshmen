const morgan = require("morgan");
const app = require("express")();
const router = require("./routes/index");
const bodyParser = require("body-parser");
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`running on port: ${PORT}`);
});
app.set("json spaces", 2);
app.use(morgan("dev"));
app.use(require("cors")());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.send("hello world");
});
app.use("/api", router);
