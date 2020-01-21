var d = new Date(); // NOTE التاريخ كاملا
var y = d.getFullYear(); // NOTE السنة
var m = d.getMonth() + 1; // NOTE الشهر
var dd = d.getDate(); // NOTE اليوم
var all = dd + " / " + m + " / " + y;
var dname = d.toLocaleDateString("ar", {
    weekday: "long"
});
document.getElementById("date").innerHTML = all;
document.getElementById("dateName").innerHTML = dname;
//        وظيفة فتح القائمة الجانبية
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
}
//            وظيفة اغلاق القائمة الجانبية
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
