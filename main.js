/**
 * Created by Mayra on 7/16/2016.
 */
var the_number = null;


function make_guess(){
    console.log("make guess function running");
    if($("#guess_input").val()==''){
        $("#response_div").text("Input can not be left blank!")
    }
    else {
        var the_guess = $("#guess_input").val();

        if (the_guess > the_number) {
            $("#response_div").html("Too High!")
        }
        else if (the_guess < the_number) {
            $("#response_div").html("Too Low!")
        }
        else if (the_guess == the_number) {
            $("#response_div").html("you guessed it!")
        }
        else {
            $("#response_div").html("Number is out of range")

        }
    }
}

var random_number = Math.floor((Math.random() * 10) + 1);

function pick_number() {
    return random_number;
}

$(document).ready(function () {
    $("button").click(function(){
        console.log('button was clicked');
        make_guess();
        $('#reset_btn').click(function(){
            location.reload();
        });
    });
    the_number = pick_number()
});
