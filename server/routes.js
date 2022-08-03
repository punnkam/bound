const express = require("express")
const Collection = require("./models/Collection") // new
const router = express.Router()

// Get all collections
router.get("/collections", async (req, res) => {
	const collections = await Collection.find()
	res.send(collections)
})

// Create a new collection
router.post("/collections", async (req, res) => {
	const collection = new Collection({
		tokenId: req.body.tokenId,
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		interval: req.body.interval,
		max: req.body.max,
		perks: req.body.perks,
		details: req.body.details,
		history: req.body.history,
	})
	await collection.save()
	res.send(collection)
})

// Get a collection by tokenId
router.get("/collections/:tokenId", async (req, res) => {
	const collection = await Collection.findOne({ tokenId: req.params.tokenId })
	res.send(collection)
})

router.patch("/collections/:tokenId", async (req, res) => {
	try {
		const collection = await Collection.findOne({ tokenId: req.params.tokenId })

		if (req.body.name) {
			collection.name = req.body.title;
		}
		if (req.body.description) {
			collection.description = req.body.description;
		}
		if (req.body.price) {
			collection.price = req.body.price;
		}
		if (req.body.interval) {
			collection.interval = req.body.interval;
		}
		if (req.body.max) {
			collection.max = req.body.max;
		}
		if (req.body.perks) {
			collection.perks = req.body.perks;
		}
		if (req.body.details) {
			collection.details = req.body.details;
		}
		if (req.body.history) {
			collection.history = req.body.history
		}
		await collection.save()
		res.send(collection)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router