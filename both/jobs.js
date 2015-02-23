Jobs = new Mongo.Collection('jobs');
Jobs.attachSchema(new SimpleSchema({
	
	title: {
        type: String,
        label: "Title",
        max: 200
    },
    jobsdescription: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000,
        autoform: {
            rows: 5
        }
    },
    contact: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Contact Email"
    },
    category: {
        type: String,
        autoform: {
            options: function(){
                return [
                    {value: 'html', label: 'HTML'},
                    {value: 'javascript', label: 'JavaScript'},
                    {value: 'css', label: 'CSS'}
                ]
            }
        }
    },
    owner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            return Meteor.userId();
        }
    }
}));