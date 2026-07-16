const items = document.querySelectorAll(".property");

items.forEach(item=>{

let x,y;

item.onmousedown=function(e){

x=e.clientX-item.offsetLeft;
y=e.clientY-item.offsetTop;

document.onmousemove=function(e){

item.style.left=(e.clientX-x)+"px";
item.style.top=(e.clientY-y)+"px";

}

document.onmouseup=function(){

document.onmousemove=null;

}

}

});