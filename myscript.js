$(function(){
    var oTable =$("#my_table").DataTable(
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
    
    /*$("#from").datepicker({
        "onSelect": function(date) {
            minDateFilter = new Date(date).getTime();
            oTable.fnDraw();
        }
        }).keyup(function() {
        minDateFilter = new Date(this.value).getTime();
        oTable.fnDraw();
        });
    
        $("#to").datepicker({
        "onSelect": function(date) {
            maxDateFilter = new Date(date).getTime();
            oTable.fnDraw();
        }
        }).keyup(function() {
        maxDateFilter = new Date(this.value).getTime();
        oTable.fnDraw();
        });*/
    $("#from,#to").datepicker({
        format:"yy-mm-dd"
    });
    
});



// Date range filter
minDateFilter = "";
maxDateFilter = "";

$.fn.dataTableExt.afnFiltering.push(
  function(oSettings, aData, iDataIndex) {
    if (typeof aData._date == 'undefined') {
      aData._date = new Date(aData[0]).getTime();
    }

    if (minDateFilter && !isNaN(minDateFilter)) {
      if (aData._date < minDateFilter) {
        return false;
      }
    }

    if (maxDateFilter && !isNaN(maxDateFilter)) {
      if (aData._date > maxDateFilter) {
        return false;
      }
    }

    return true;
  }
);

