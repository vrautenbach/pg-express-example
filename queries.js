const Pool = require("pg").Pool;
const pool = new Pool({
	user: "postgres",
	host: "geolive.co.za",
	database: "sonet",
	password: "aeG6chee",
	port: 5432,
});

const getAll = (request, response) => {
	pool.query('SELECT * FROM public."BufferedPoints"', (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const addNew = (request, response) => {
	const { name, number } = request.body;

	pool.query(
		"INSERT INTO test (name, number) VALUES ($1, $2)",
		[name, number],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(201).send(`User added with ID`);
		}
	);
};

module.exports = {
	getAll,
	addNew,
};
