$('#login').hide();
$('#signin').hide();

$("#log").click(function(){
    $("#login").show();
    $("#signin").hide();
});

$("#sign").click(function(){
    $("#signin").show();
    $("#login").hide();
});

$('#example').tooltip(options);