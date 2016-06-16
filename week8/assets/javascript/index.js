$(document).ready(function(){

var ref = new Firebase('https://timepunch.firebaseio.com/');

//var baseline = 10; This should already be within the database, otherwise it will keep adding


      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', { role: 'style' } ],
        ['2010', 10, 'color: gray'],
        ['2010', 14, 'color: #76A7FA'],
        ['2020', 16, 'opacity: 0.2'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['2040', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
      ]);

        // Set chart options
        var options = {'title':'Time Taken Per Task',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

$('#start').on('click', function(){
	
	startTime = new Date().getTime();
	console.log(startTime);
})

$('#end').on('click', function(){
	
	var endTime = new Date().getTime();
	console.log(endTime);
	var difference = (endTime - startTime);
	var elapsed = Math.floor(((difference / 1000) /60));
	console.log('You took ' + elapsed + ' minutes to complete the task!');
	ref.push(elapsed);
	
	})

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  totalArray = snapshot.val();
})



});