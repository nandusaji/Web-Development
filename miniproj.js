var add=document.getElementById("inc");
var remove=document.getElementById("dec");
var count=document.getElementById("count");
var integer=0;
function increment(){
    integer=integer+1;
    count.innerHTML=integer;
}
function decrement(){
    integer=integer-1;
    count.innerHTML=integer;
}
function reset(){
    integer=0;
    count.innerHTML=integer;
}