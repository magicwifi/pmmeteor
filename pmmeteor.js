Pms = new Meteor.Collection("Pms");
Inners = new Meteor.Collection("Inners");
Outters = new Meteor.Collection("Outters");


if (Meteor.isServer) {
var request = Meteor.npmRequire('request');;
var cheerio = Meteor.npmRequire('cheerio');;
  Meteor.startup(function () {
Meteor.setInterval(function(){	
request('http://www.pm25.com/city/fuzhou.html', Meteor.bindEnvironment(function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
     $('span.pjadt_aqi').each(Meteor.bindEnvironment(function(i, element){
        var aqi = $(element).text();
     var qos = $(element).next().text();
     var pm25 = $(element).next().next().next().text();
     var room = 901+i;
  var metadata = {room:room,aqi:parseInt(aqi),qos:qos,pm25:parseInt(pm25),created_at:new Date()}
   //console.log(metadata);
    	Pms.insert(metadata);
	var rid = Inners.findOne({room:room});
        if(rid){
	rid = Inners.findOne({room:room})._id;
  	var updata = {aqi:parseInt(aqi),qos:qos,pm25:parseInt(pm25),created_at:new Date()}
	Inners.update(rid, {$set: updata}, function(error) {
      if (error) {
	console.log(erroe.reason);
      }else{
console.log("update");
}
});
}
	else{
		Inners.insert(metadata);	
		console.log("insert");

	}

	}));
   }
  }));


request('http://www.pm25.com/city/beijing.html', Meteor.bindEnvironment(function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var aqi =  $('a.cbol_aqi_num').text();
    var pm25 =  $('span.cbol_nongdu_num_1').text();
  var metadata = {aqi:parseInt(aqi),pm25:parseInt(pm25),created_at:new Date()}
   console.log(metadata);
     Outters.insert(metadata);
  }
}));

},5000);
  });
}

