Meteor.publish('jobsList', function(){
	return Jobs.find();
});

Meteor.publish('apply', function(){
	return	Applications.find()
})