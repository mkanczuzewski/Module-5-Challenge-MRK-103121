var currentDayJS = document.getElementById('currentDay');
var textboxJS = document.getElementById('textbox')

currentDayJS.innerText = $.datepicker.formatDate('MM dd, yy', new Date());

textboxJS = 
$('<input>').attr({
    type: 'hidden',
    id: 'foo',
    name: 'bar'
}).appendTo('form');

// $("#textboxJS").val()