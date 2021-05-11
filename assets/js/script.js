//display current day with moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var tasks = {};

//save button
$(".saveBtn").on("click", function () {
    console.log(this);
    $(this).siblings(".description").val();
});

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
        9:[],
        10:[],
        11:[],
        12:[],
        13:[],
        14:[],
        15:[],
        16:[],
        17:[]
        }
    };
  }

  var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function updateHour() {
    //get current number of hours
    var currentHour = moment().format("H"); // use of moment.js

    // loop over time blocks
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));
        console.log( hour, currentHour)

        //check classes of past, present, or future
        if (hour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
updateHour();