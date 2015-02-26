// var userId = Meteor.userId();

Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loading",
	notFoundTemplate: "404",
	// waitOn: function(){return Meteor.subscribe('jobs');}
})

Router.route('/', function(){
	this.render('home');
}, {
	name: 'home'
});

Router.route('/jobs', function(){
	this.render('jobs');
},{
	name: 'jobs',

	data: function(){
		return {
			jobdisplay: Jobs.find().fetch(),
			pageTitle: 'This is my job page'
		}
	}
})

Router.route('/dashboard', function(){
	this.render('dashboard');
},{
	name: 'dashboard',
	data: function(){
		return{
			jobs: Jobs.find({owner: Meteor.userId()}).fetch()
		}
	}
})

Router.route('/jobs/:category/', function(){
	this.render('jobs');
},{
	name: 'jobsCategory',

	data: function(){
		return{
			jobdisplay: Jobs.find({category: this.params.category}).fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
})

Router.route('/jobs/details/:_id', function(){
	this.render('/jobDetail');
},{
	name: 'jobDetail',

	data: function(){
		var _id = this.params._id
		return {
			job: Jobs.findOne(_id)
		}
	}
})
