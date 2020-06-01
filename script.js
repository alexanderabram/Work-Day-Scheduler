const m = moment();

var words;
var hourInfo;

$("#currentDay").text(m.format("dddd, MMMM Do"));

$(document).ready(function () {
    colorChange();
    renderText();
});

function colorChange() {

    var realTime = moment().hours();


    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$(".saveBtn").click(function () {
    words = $(this).siblings(".input").val();
    hourInfo = $(this).siblings(".hour").text();
    localStorage.setItem(hourInfo, JSON.stringify(words));

    colorChange();
    renderText();
})


function renderText() {
    var save9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(save9);

    var save10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(save10);

    var save11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(save11);

    var save12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(save12);

    var save1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#1").val("");
    $("#1").val(save1);

    var save2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#2").val("");
    $("#2").val(save2);

    var save3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#3").val("");
    $("#3").val(save3);

    var save4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#4").val("");
    $("#4").val(save4);

    var save5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#5").val("");
    $("#5").val(save5);
}
