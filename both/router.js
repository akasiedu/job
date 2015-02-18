Router.configure({
	layoutTemplate: "masterLayout"
})

Router.route('/', function(){
	this.render('home');
}, {
	name: 'home'
});

Router.route('/jobs', function(){
	this.render('jobs');
},{
	name: 'jobs'
})