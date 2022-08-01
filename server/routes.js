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
		perks: {
			perk1: req.body.perk1,
			perk2: req.body.perk2,
			perk3: req.body.perk3,
		},
		details: {
			detail1: req.body.detail1,
			detail2: req.body.detail2,
			detail3: req.body.detail3,
		},
		history: {
			history1: req.body.history1,
			history2: req.body.history2,
			history3: req.body.history3,
		}
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
			collection.description = req.body.content;
		}
		if (req.body.perks) {
			collection.perk1 = req.body.perk1 ? req.body.perk1 : collection.perk1;
			collection.perk2 = req.body.perk2 ? req.body.perk2 : collection.perk2;
			collection.perk3 = req.body.perk3 ? req.body.perk3 : collection.perk3;
		}
		if (req.body.details) {
			collection.detail1 = req.body.detail1 ? req.body.detail1 : collection.detail1;
			collection.detail2 = req.body.detail2 ? req.body.detail2 : collection.detail2;
			collection.detail3 = req.body.detail3 ? req.body.detail3 : collection.detail3;
		}
		if (req.body.history) {
			collection.history1 = req.body.history1 ? req.body.history1 : collection.history1;
			collection.history2 = req.body.history2 ? req.body.history2 : collection.history2;
			collection.history3 = req.body.history3 ? req.body.history3 : collection.history3;
		}
		await collection.save()
		res.send(collection)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router