var currentDayJS = document.getElementById('currentDay');
//make the inner text for the current day id to be a date using .datepicker widget
currentDayJS.innerText = $.datepicker.formatDate('DD - MM dd, yy', new Date());

//check current time
var getTheHour = moment().hours();

//capture all the rows on the page
var rows = $(".row");

loadData();

setInterval(loadData(), 1800000);

function loadData() {
    //iterate through each row
    rows.each(function(i) 
    {
        //Retrieve the id attribute we are on
        var idvalue = $(this).attr('id');
        //match current time to id value for row; change color dependent on time
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
            //because we know which row we are on, load textarea from storage into that idvalues row
            $(this).find("textarea").val(JSON.parse(localStorage.getItem(idvalue)));
    });
}

//identifiy button, specifiy event, and when that event happens do this function
$("button").on("click", function(event) {
    //identify closest row to the button that was clicked
    var closestRow = $(this).closest('.row');
    //identify the closest textarea to the row you are on
    var textAreaValue = closestRow.find('textarea').val();
    //  retrieve the id attribute of the row we are on
    var id = closestRow.attr('id');
     //if it is null or empty string, remove the content from local storage otherwise store the textarea to the local storage with that id.
    if (textAreaValue === null || textAreaValue === "")
    {
        localStorage.removeItem(id);
    }
    else 
    {
        localStorage.setItem(id, JSON.stringify(textAreaValue));
    }
});