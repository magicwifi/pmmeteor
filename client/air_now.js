Template.airNow.helpers({
  aqi: function() {
    return Outters.findOne({},{sort:{created_at:-1}}).aqi;
  },
  pm25: function() {
    return Outters.findOne({},{sort:{created_at:-1}}).pm25;
  },
});
