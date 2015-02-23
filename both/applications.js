Applications = new Mongo.Collection('apply');

Applications.attachSchema(new SimpleSchema({
	
	name: {
        type: String,
        label: "Name",
        max: 200
    },
    levelofeducation: {
        type: String,
        label: "Level Of Education",
        optional: true,
        max: 50
    },
    contact: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Contact Email"
    }
}));