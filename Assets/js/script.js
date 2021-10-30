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
var textareathing;
$("button").on("click", function(event) {
    $(event.target).closest("textarea").val(textareathing);
    console.log(textareathing)

}
)

// $("button").click(function() {
//     console.log("save button clicked")

// }
// )

// var allSaveBtn = $("button");
// allSaveBtn.each(function()
// {
//     var idvalue = $(this).attr('id');

//     startBtn.onclick = function (idvalue)

// }
// )

// {

// press save button
// find the row   
// capture text in row
// assign id   
// save it localStorage

// onload put it back in the textarea