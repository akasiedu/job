Jobs.allow({
	insert: function (userId, doc) {
		return userId
	},
	update: function (userId, doc, fields, modifier) {
		return doc.owner === userId
	},
	remove: function (userId, doc) {
		return	doc.owner === userId
	}
});


Applications.allow({
	insert: function (doc) {
		return true
	}
});