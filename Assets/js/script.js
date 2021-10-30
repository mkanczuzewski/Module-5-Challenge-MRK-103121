var currentDayJS = document.getElementById('currentDay');
currentDayJS.innerText = $.datepicker.formatDate('MM dd, yy', new Date());

var getTheHour = moment().hours();

var rows = $(".row");
rows.each(function(i) 
{
    var idvalue = $(this).attr('id');

    if (getTheHour > idvalue)
    {
        $(this).find("textarea").addClass("past");
    }
    else if (getTheHour < idvalue)
    {
        $(this).find("textarea").addClass("future");
    }
    else
    {
        $(this).find("textarea").addClass("present");
    }
});

$("button").on("click", function(event) {
  var closestRow = $(this).closest('.row');
  var textAreaValue = closestRow.find('textarea').val();  
  var id = closestRow.attr('id');
  console.log(textAreaValue)
    localStorage.setItem(id, JSON.stringify(textAreaValue));
}
)

