function clock() {
var d = new Date();
var month_num = d.getMonth();
var day = d.getDate();
month=new Array("січня", "лютого", "березня", "квітня", "травня", "червня",
"липня", "серпня", "вересня", "жовтня", "листопада", "грудня");
if (day <= 9) day = "0" + day;
date_time = day + " " + month[month_num] + " " + d.getFullYear();
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();}
else document.getElementById("doc_time").innerHTML = date_time;
setTimeout("clock()", 1000);}