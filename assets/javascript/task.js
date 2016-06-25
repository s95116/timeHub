$(document).ready(function(){
      var i = 0;

      //Enable popover
      $('[data-toggle="popover"]').popover();

      $('#first-link').on('click', function(){
        $('#mainContent').css('visibility', 'visible');
        $('#chart_div').css('visibility', 'hidden');
      })

      $('#start').on('click', function(){
		startTime = new Date().getTime();

    $('#start').attr('disabled',true);
    //Grays out start button
    $('#start').css('opacity',0.2);
		console.log(startTime);
	})

      $('#end').on('click', function(){
          $('#mainContent').css('visibility', 'hidden');
          $('#chart_div').css('visibility', 'visible');    
          $('#start').removeAttr('disabled');

          //Add checkbox to table
          if(i===0){
          
          $('#lastItem').html('<td><i class="fa fa-check fa-lg" aria-hidden="true" id="newitem"></i></td>');
          $('#lastItem').attr('id', "lastTD");
          i++;
          };
          
          var endTime = new Date().getTime();
          console.log(endTime);
          var difference = (endTime - startTime);
          var elapsed = Math.floor(((difference / 1000) /60));
          console.log('You took ' + elapsed + ' minutes to complete the task!');

          var data = { taskCompletion: "Task ", Minutes: elapsed }
		    $.ajax({
        url: 'https://sheetsu.com/apis/v1.0/a07b7a865ae1',
        data: data,
        dataType: 'json',
        type: 'POST',

        // place for handling successful response
        // showing (redirecting to) something like /thanks.html
        // page could be a good idea
        success: function(data) {
          console.log("Workin!");
          drawSheetName();
        },

        // handling error response
        error: function(data) {
          console.log(data);
        }
      });

		function drawSheetName() {
      		var queryString = encodeURIComponent('SELECT A, B');

      		var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1iSyZO9DDf65me0ag29S3bzNugiQvtMlsC_Zr_Wg0M7w/edit#gid=0' + queryString);
      		query.send(handleSampleDataQueryResponse);
    }

    function handleSampleDataQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var options = {
  		height: 400,
  		title: 'New Infograph Posting Statistics',
  		legend: {position: 'none'}
		};
      var data = response.getDataTable();
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  

	})

     
});