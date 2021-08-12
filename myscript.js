var minDate, maxDate;
 
// Custom filtering function which will search data in column four between two values
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = minDate.val();
        var max = maxDate.val();
        var date = new Date( data[4] );
 
        if (
            ( min === null && max === null ) ||
            ( min === null && date <= max ) ||
            ( min <= date   && max === null ) ||
            ( min <= date   && date <= max )
        ) {
            return true;
        }
        return false;
    }
);

$(document).ready(function(){

    // Create date inputs
    minDate=$("#from").datepicker();
    
    maxDate = $("#to").datepicker();

    $("#my_table").DataTable(
        {
            "ajax":{
                "url":'data.json',
                "type":"GET",
                "datatype":"json",
            },
            "columns":[
                {"data":"Name"},
                {"data":"Date"},
                {"data":"Size"}
            ],
            "language":{
                "emptyTable":"No data found"
            },
        }
    );

    // Refilter the table
    $('#from, #to').on('change', function () {
        table.draw();
    });

});

