Template.airPage.helpers({
	air:function(){
		var roomp = Router.current().params._room;
		return Pms.findOne({room:parseInt(roomp)},{sort:{created_at:-1}});
	}
});


Template.airPage.onRendered(function () {
	$( "#sweets" ).change(function () {
	console.log("hello");
    var str = "";
    $( "#sweets option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#sweetcontent" ).text( str );
  	Router.go("airPage",{_room:"905",_hist:"20"})
  });
});
