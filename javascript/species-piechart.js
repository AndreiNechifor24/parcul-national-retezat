google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Peisaj', 'Procent'],
        ['Paduri', 53],
        ['Pajisti alpine si stancarii', 15],
        ['Jnepenisuri', 17],
        ['Grohotisuri si stancarii', 14],
        ['Habitate acvatice', 1]
    ]);

    var options = {
        backgroundColor:
            {
                fill: 'transparent'
            },
        legend:{
            position: 'right',
            alignment: 'center',
            maxLines: 5

        },
        chartArea:{
            top:50,bottom:30,right:0,left:0, 'width': '100%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}