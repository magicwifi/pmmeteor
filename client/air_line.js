Template.airLine.onRendered(function () {
var roomp = Router.current().params._room;
var hist = Router.current().params._hist;
console.log(hist);
    var pms = Pms.find({room:parseInt(roomp)}, {sort: {created_at: -1},limit:parseInt(hist)}).fetch();
var data2 = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: []
        }
    ]
};
    for (var i = 0; i < pms.length; i++) {
        data2.datasets[0].data.push(pms[i].aqi);
        data2.datasets[1].data.push(pms[i].pm25);
	data2.labels.push(i);
    } 
    console.log(data2);
    var ctx = document.getElementById("myLine").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data2,null);
});
