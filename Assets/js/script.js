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
    if (textAreaValue !== null || "")
    {
        localStorage.setItem(id, JSON.stringify(textAreaValue));
    }
}
)

    $("#9 .textarea").val(localStorage.getItem(9));
    $("#10 .textarea").val(localStorage.getItem(10));
    $("#11 .textarea").val(localStorage.getItem(11));
    $("#12 .textarea").val(localStorage.getItem(12));
    $("#13 .textarea").val(localStorage.getItem(13));
    $("#14 .textarea").val(localStorage.getItem(14));
    $("#15 .textarea").val(localStorage.getItem(15));
    $("#16 .textarea").val(localStorage.getItem(16));
    $("#17 .textarea").val(localStorage.getItem(17));
//}

//window.onload = function()
//{
//    loadTextArea();
//}

// function loadTextArea() {
//     if(localStorage !== 'undefined')
//     {
//         for(var i = 9; i > 18; i++)
//         {
//             $("#i .textarea").val(localStorage.getItem(i))
                  
//         }
//     }
// }