const incremnentbtn = document.getElementById("incremnentbtn");
const decremnentbtn = document.getElementById("decremnentbtn");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");

let count = 0;
// for increasing value
incremnentbtn.onclick= function(){
 count++;
 countlabel.textContent=count;
 
}
// for decreasing value
decremnentbtn.onclick= function(){
    count--;
    countlabel.textContent=count;
}
//Reset
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
