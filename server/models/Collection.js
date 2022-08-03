const mongoose = require("mongoose")

const schema = mongoose.Schema({
	tokenId: Number,
	name: String,
	description: String,
	price: String,
	interval: String,
	max: Number,
	perks: String,
	details: String,
	history: String
})

module.exports = mongoose.model("Collection", schema)

