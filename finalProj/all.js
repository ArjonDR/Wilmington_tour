
"use strict";
$(document).ready(() => {
    
    $("header h2").animate(
        { opacity: "1"}, 1500);
    
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
    //alert(output);
    $("footer #date").text(output);
});