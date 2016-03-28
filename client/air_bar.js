

Template.airBar.onRendered(function () {

Tracker.autorun(function(){
var data = {
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
    var inners = Inners.find({}).fetch();
    
    for (var i = 0; i < inners.length; i++) {
        data.datasets[0].data.push(inners[i].aqi);
        data.datasets[1].data.push(inners[i].pm25);
	data.labels.push(inners[i].room);
    } 

    console.log(data);
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(data,null);
    data.datasets[0].data = [];
    data.datasets[1].data = [];
    data.labels = []
});
});



