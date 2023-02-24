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
        'title':'Distributia peisajelor in Parcul National Retezat',
        backgroundColor:
            {
                fill: 'transparent'
            },
        legend:{
            position: 'right',
            alignment: 'center',
            maxLines: 6

        },
        chartArea:{
            height: "100%",
            width: "100%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}