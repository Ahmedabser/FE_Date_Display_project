// script.js
function displayDay() {


    var date = document.getElementById("date").value;

    let day=" ";


    if (date==" "){
        day= "invalid input";
    }
    else if (date==1){
        day="الأحد";
    }else if(date==2){
        day="الإثنين";
    }else if(date==3){
        day="الثلاثاء";
    }else if(date==4){
        day="الأربعاء";
    }else if(date==5){
        day="الخميس";
    }else if(date==6){
        day="الجمعة";}
    else if(date==7){
        day="السبت";
    }
    else{
        day= "invalid input";
    }
    // عرض اليوم في العنصر #dateOutput
    document.getElementById("dateOutput").innerHTML = day;
  }
  
document.getElementById("date").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        displayDay();
    }
});
