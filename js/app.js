// From start, hide the "Help Me Pick My Next Adventure" form //
$('#destintationForm').hide();

// When "Help Me Pick My Next Adventure" button is clicked, show the form //
$('button').click(function (){
    $('#destintationForm').show()
});

$('#fbButton').click(function(){
    alert("Thank you for helping me pick my next adventure!")
});

// Page refreshes and form disappears //