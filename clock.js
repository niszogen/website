function odliczanie()
{
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var minutes = today.getMinutes();
    if (minutes<10) minutes = "0"+minutes;
    var hours = today.getHours();
    if (hours<10) hours = "0"+hours;
    var seconds = today.getSeconds();
    if (seconds<10) seconds = "0"+seconds;

    document.getElementById("clock").innerHTML = date+"/"+month+"/"+year+" | "+hours+":"+minutes+":"+seconds;
    setTimeout("odliczanie()",1000);
}
