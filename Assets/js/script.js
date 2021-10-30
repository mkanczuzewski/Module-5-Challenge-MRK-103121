var currentDayJS = document.getElementById('currentDay');
var textboxJS = document.getElementById('textbox')
var hourCompare9 = document.getElementById('9')

currentDayJS.innerText = $.datepicker.formatDate('MM dd, yy', new Date());

var getTheHour = moment().hours();
console.log(getTheHour);

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

// $('#9').
// $("textarea").css( "background", "past")

// input[type='text'], textarea {
//     background-color : .past;
// }


// if (getTheHour > ) 
// {
// '9'.textarea.class = past
// } 
// else if (getTheHour < '9')
// {
// '9' .textarea.class = future
// }
// else
// class = present 



// setInterval(function() {
//     $(".card .list-group-item").each(function() {
//       auditTask($(this));
//     });
//   }, 1800000);

// var auditTask = function(taskEl) {
//     // get date from task element
//     var date = $(taskEl)
//         .find("span")
//         .text()
//         .trim();

//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);

//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//         $(taskEl).addClass("list-group-item-danger");
//     } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//         $(taskEl).addClass("list-group-item-warning");
//     }
// };

// $("#textboxJS").val()