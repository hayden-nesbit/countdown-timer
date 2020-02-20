
var int = setInterval(myTimer, 1000);
//This sets the interval of my myTimer function to repeat (count down) every 1 second

function myTimer() {
    var Future = new Date("Feb 20, 2020 18:16:00"); //This sets the variable of the date to be counted down to
    var now = new Date(); //This gets the current date
    var diff = Future.getTime() - now.getTime(); //This gets the difference between our future date and the current date

    //The following are formulas to get variables for year, month, day, hour, minute, seconds 

    var years = Future.getFullYear() - now.getFullYear();
    var months = Future.getMonth() - now.getMonth();
    var days = Future.getDate() - now.getDate();
    var hours = Future.getHours() - now.getHours();
    var minutes = Future.getMinutes() - now.getMinutes();
    var seconds = Future.getSeconds() - now.getSeconds();
    if (seconds < 0) {
        minutes = minutes - 1;
        seconds = seconds + 60;
    }
    if (minutes < 0) {
        hours = hours - 1;
        minutes = minutes + 60;
    }
    if (hours < 0) {
        days = days - 1;
        hours = hours + 24;
    }
    if (days < 0) {
        months = months - 1;
        var CurrentDaysInMonth = (Future.getMonth(), (Future.getFullYear(), 0), now.getDate());
        days = days + CurrentDaysInMonth;
    }
    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }

    

    // var hours = days / (1000 * 60 * 60 * 24);
    // var minutes = hours / (1000 * 60 * 60);
    // var seconds = minutes / (1000 * 60);


    //This runs an if statement to see if 'days' is less than or greater than '1', then pushes and concatenates the day, hour, minute, seconds to the HTML in the "count" Id

    document.getElementById("count").innerHTML = years + "y " + months + "mo " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    console.log(diff)
    if (diff < 0) { //This if statement checks for when 'count' (the difference between the current date and the new date) equals zero. When it is ===0 setTimeout runs.
        EndingInt();
    }

    //     setTimeout(stopTimer, diff); //setTimeout runs the stopTimer function at an interval of 'diff' (which is now zero, so it runs once)
    //     function stopTimer() { //The stopTimer function runs clearInterval, which stops the setInterval running on variable 'int' (which controls the second count, so the timer stops)


}

function EndingInt() {
    clearInterval(int)
}



