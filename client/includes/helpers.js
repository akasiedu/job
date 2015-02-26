// Template.registerHelper('isOwner', function(owner){
// 		if (owner === Meteor.userId()) {;
// 		return owner
// 	}
// })

Template.registerHelper('User', function(){
	return Meteor.user()
})

Template.registerHelper('jobCount', function(){
	return Jobs.find().count()
})

Template.registerHelper('ownJobsCount', function(){
	return Jobs.find({owner: Meteor.userId()}).count();
})