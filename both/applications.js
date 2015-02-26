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
    },
    jobId: {
        type: String,
        autoform: {
            omit: true
        }
    }
    // owner: {
    //     type: String,
    //     autoform: {
    //         omit: true
    //     },
    //     autoValue: function(){
    //         if (this.isInsert){
    //             return Meteor.userId();
    //         }
    //     }
    // }

}));