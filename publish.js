
Meteor.publish('allInners',function(){
	return Inners.find();
});

Meteor.publish('pmsById',function(roomId,limitnum){
	return Pms.find({room:parseInt(roomId)},{reactive:false,sort:{created_at:-1},limit:parseInt(limitnum)});
});

Meteor.publish('nowOutter',function(){
	return Outters.find({},{sort:{created_at:-1},limit:1});
});
