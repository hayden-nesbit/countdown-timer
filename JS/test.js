
var int = setInterval(myTimer, 1000);
    //This sets the interval of my myTimer function to repeat (count down) every 1 second

function myTimer() {
    var countDownDate = new Date("May 20, 2020 15:29:00"); //This sets the variable of the date to be counted down to

    futYear = countDownDate.getFullYear();
    futMonth = countDownDate.getMonth()+1;
    futHour = countDownDate.getHours()+1;
    FutMinute = countDownDate.getMinutes()+1;
    FutSecond = countDownDate.getSeconds()+1;
    FutDay = countDownDate.getDate();

    var now = new Date(); //This gets the current date

    CurYear = now.getFullYear();
    CurMonth = now.getMonth()+1;
    CurHour = now.getHours()+1;
    CurMinute = now.getMinutes()+1;
    CurSecond = now.getSeconds()+1;
    CurDay = now.getDate();

    //var years = countDownDate.getFullYear() - now.getFullYear();
    //var months = (years * 12) + (countDownDate.getMonth() - now.getMonth()); //not sure
    
    diffYear = futYear - CurYear;
    diffMonth = futMonth - CurMonth;
        if (futMonth > CurMonth) {
            return futMonth - CurMonth
        } else {
            CurMonth-futMonth
        }
    diffHour = futHour - CurHour;
        if (futHour > CurHour) {
            return futHour - CurHour
        } else {
            CurHour-futHour
        }
    console.log(diffHour)

    


    //This runs an if statement to see if 'days' is less than or greater than '1', then pushes and concatenates the day, hour, minute, seconds to the HTML in the "count" Id
    if (hour3 > 24) {
        document.getElementById("count").innerHTML = year3 + "y " + month3 + "m " + date3 + "d ";
    } else if (hour3 < 24) {
        document.getElementById("count").innerHTML = hour3 + "h " + minute3 + "m " + second3 + "s ";
    }
    

    if (count===0) { //This if statement checks for when 'count' (the difference between the current date and the new date) equals zero. When it is ===0 setTimeout runs.
        setTimeout();
    }
    
    setTimeout(stopTimer, count); //setTimeout runs the stopTimer function at an interval of 'count' (which is now zero, so it runs once)
    
    function stopTimer(){ //The stopTimer function runs clearInterval, which stops the setInterval running on variable 'int' (which controls the second count, so the timer stops)
        clearInterval(int)
    }

}





