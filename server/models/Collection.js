const mongoose = require("mongoose")

const schema = mongoose.Schema({
	tokenId: Number,
	name: String,
	description: String,
	perks: {
		perk1: String,
		perk2: String,
		perk3: String
	},
	details: {
		detail1: String,
		detail2: String,
		detail3: String
	},
	history: {
		history1: String,
		history2: String,
		history3: String
	},
})

module.exports = mongoose.model("Collection", schema)

