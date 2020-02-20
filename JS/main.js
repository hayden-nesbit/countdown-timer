
var int = setInterval(myTimer, 1000);
    //This sets the interval of my myTimer function to repeat (count down) every 1 second

function myTimer() {
    var countDownDate = new Date("May 10, 2020 12:01:00"); //This sets the variable of the date to be counted down to
    
    var now = new Date(); //This gets the current date

    diff = countDownDate.getTime() - now.getTime(); //This gets the difference between our count down date and the current date in milliseconds

    var years = countDownDate.getFullYear() - now.getFullYear();
    var months = (countDownDate.getFullYear()*12 + countDownDate.getMonth()) - (now.getFullYear()*12 + now.getMonth()); 
    months = months - (years * 12);
    
    var days = Math.floor((diff / (1000 * 60 * 60 * 24)));
    days = days - (years * 365);
    
    var hours = Math.floor((diff / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    

    //This runs an if statement to see if 'days' is less than or greater than '1', then pushes and concatenates the day, hour, minute, seconds to the HTML in the "count" Id
    if (days >= 1) {
        document.getElementById("count").innerHTML = years + "y " + months + "m " + days + "d ";
    } else if (days < 1) {
        document.getElementById("count").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
    

    if (diff===0) { //This if statement checks for when 'count' (the difference between the current date and the new date) equals zero. When it is ===0 setTimeout runs.
        setTimeout();
    }
    
    setTimeout(stopTimer, diff); //setTimeout runs the stopTimer function at an interval of 'count' (which is now zero, so it runs once)
    
    function stopTimer(){ //The stopTimer function runs clearInterval, which stops the setInterval running on variable 'int' (which controls the second count, so the timer stops)
        clearInterval(int)
    }

}





