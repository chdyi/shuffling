/**
 * Created by Administrator on 2016/7/7.
 */
 window.onload = function () {
     flag = 0 ;
     obj1 = document.getElementById("slider");
     obj2 = document.getElementsByTagName("li");
     obj2[0].style.backgroundColor = "#666666";
     time = setInterval("turn();",5000);
     obj1.onmouseover = function() {
         clearInterval(time);
     }
     obj1.onmouseout = function () {
         time = setInterval("turn();",6000);
     }
     for (var num = 0; num < obj2.length; num++) {
         obj2[num].onmouseover = function(){
             turn(this.innerHTML);
             clearInterval(time);
         }
         obj2[num].onmouseout = function () {
             time = setInterval("turn();",6000);
         }
     }
     document.getElementById("second").src = "images/2.png";
     document.getElementById("third").src = "images/3.png";
     document.getElementById("four").src = "images/4.png";
 }
function turn(value) {
    if(value != null){
        flag = value - 2;
    }
    if (flag < obj2.length - 1)
     flag ++;
    else
     flag =0;
    obj1.style.top = flag * (-550) + "px";
    for (var j = 0; j < obj2.length; j++){
        obj2[j].style.backgroundColor = "#ffffff";
    }
    obj2[flag].style.backgroundColor = "#666666";
}
