
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

    
    document.getElementById("count").innerHTML = years + "y " + months + "mo " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    console.log(diff)
    if (diff < 0) { //This if statement checks for when 'count' (the difference between the current date and the new date) is less than zero. When it is < EndingInt runs.
        EndingInt();
    }

}

function EndingInt() {
    clearInterval(int)
}



