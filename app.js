setInterval(showTime,1000);
function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    var am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    let currentTime = hour + ":" 
            + min + ":" + sec + " "+am_pm; 
  
    document.getElementById("show-time") 
            .innerHTML = currentTime; 

    var gm="Good Morning";
    var ge="Good Evening";
    var ga="Good AfterNoon";
    var gn="Good Night";
    if(am_pm==="AM" && hour<=4){
        document.getElementById("message").innerHTML= gm;
    }

    else if(am_pm==="PM" && hour>=1 && hour<=4){
        document.getElementById("message").innerHTML= ga;
    }

    else if(am_pm==="PM" && hour>=4 && hour<=8){
        document.getElementById("message").innerHTML= ge;
    }

    else{
        document.getElementById("message").innerHTML= gn;
    }

} 
showTime(); 

function showDate()
{
    let date= new Date();
    let day= date.getDay();
    day = day < 10 ? "0" + day : day;
    let month= date.getMonth();
    let year= date.getFullYear();
    var  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthName=months[date.getMonth()]; 
    let currentDate= day+" "+monthName+ " "+year;
    document.getElementById("date").innerHTML = currentDate;
}
showDate();