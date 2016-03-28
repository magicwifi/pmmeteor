Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', {name:'airIndex'});


Router.route('/airs/:_room/:_hist', {name:'airPage',waitOn:function(){

    return Meteor.subscribe('pmsById',Router.current().params._room,Router.current().params._hist);
}});
