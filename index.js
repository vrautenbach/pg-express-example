const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/index.html");
});

app.get("/all", db.getAll);
app.post("/add", db.addNew);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
