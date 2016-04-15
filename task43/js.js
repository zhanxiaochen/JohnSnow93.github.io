/**
 * Created by John Snow on 2016/4/12.
 */

var container=document.getElementById("container");
container.style.height="450px";
container.style.width="650px";
container.style.position="relative";

function one(){
    var allimg=document.getElementsByTagName("img");
    allimg[0].setAttribute("height",container.style.height);
    container.appendChild(allimg[0]);
}
function two(){
    var allimg=document.getElementsByTagName("img");
    var rbox=document.createElement("div");
    var lbox=document.createElement("div");
    rbox.style.height=container.style.height;
    rbox.style.width=container.style.width;
    rbox.style.position="absolute";
    rbox.style.right="0";
    rbox.style.top="0";
    rbox.style.webkitMask="-webkit-linear-gradient(-33deg, transparent 50%, white 50%)";
    rbox.style.textAlign="right";
    allimg[0].setAttribute("height",container.style.height);
    allimg[1].setAttribute("height",container.style.height);
    rbox.appendChild(allimg[0]);
    console.log(allimg.length)
    lbox.style.height=container.style.height;
    lbox.style.width=container.style.width;
    lbox.appendChild(allimg[0]);
    console.log(allimg.length)
    container.appendChild(lbox);
    container.appendChild(rbox);
}
function three(){
    var allimg=document.getElementsByTagName("img");
    var up=document.createElement("div");
    var down=document.createElement("div");
    up.style.height="50%";
    up.style.width="33%";
    up.style.overflow="hidden";
    up.style.position="absolute";
    up.style.right="0";
    up.style.top="0";
    down.style.height="50%";
    down.style.width="33%";
    down.style.position="absolute";
    down.style.right="0";
    down.style.bottom="0";
    down.style.overflow="hidden";
    var left=document.createElement("div");
    left.style.height="100%";
    left.style.width="67%";
    left.style.overflow="hidden";
    allimg[0].style.height="225px";
    allimg[1].style.height="225px";
    allimg[2].style.height=left.style.height;
    up.appendChild(allimg[0])
    down.appendChild(allimg[0]);
    left.appendChild(allimg[0]);
    container.appendChild(up);
    container.appendChild(down);
    container.appendChild(left);
}
function four(){
    var allimg=document.getElementsByTagName("img");
    var box1=document.createElement("div");
    var box2=document.createElement("div");
    var box3=document.createElement("div");
    var box4=document.createElement("div");
    container.style.lineHeight="0";
    box1.style.display=box2.style.display=box3.style.display=box4.style.display="inline-block";
    box1.style.height=box2.style.height=box3.style.height=box4.style.height="225px";
    box1.style.width=box2.style.width=box3.style.width=box4.style.width="325px";
    box1.style.overflow=box2.style.overflow=box3.style.overflow=box4.style.overflow="hidden";
    allimg[0].style.height=allimg[1].style.height=allimg[2].style.height=allimg[3].style.height=box1.style.height;
    allimg[0].style.width=allimg[1].style.width=allimg[2].style.width=allimg[3].style.width=box1.style.width;
    box1.appendChild(allimg[0]);
    box2.appendChild(allimg[0]);
    box3.appendChild(allimg[0]);
    box4.appendChild(allimg[0]);
    container.appendChild(box1);
    container.appendChild(box2);
    container.appendChild(box3);
    container.appendChild(box4);
}
function five(){
    var allimg=document.getElementsByTagName("img");
    var box1=document.createElement("div");
    var box2=document.createElement("div");
    var box3=document.createElement("div");
    var box4=document.createElement("div");
    var box5=document.createElement("div");
    box1.style.position=box2.style.position=box3.style.position=box4.style.position=box5.style.position="absolute";
    box1.style.height=box1.style.width="67%";
    box1.style.top=box1.style.left="0";
    allimg[0].style.height="302px";
    allimg[0].style.width="436px";
    box1.appendChild(allimg[0]);
    container.appendChild(box1);
    box2.style.height=box2.style.width=box3.style.height=box3.style.width="33%";
    box2.style.left=box2.style.bottom="0";
    allimg[1].style.height="150px";
    allimg[1].style.width="214px";
    box2.appendChild(allimg[1]);
    container.appendChild(box2);
    box3.style.bottom="0";
    box3.style.left="214px";
    allimg[2].style.height="148px";
    allimg[2].style.width="222px";
    box3.appendChild(allimg[2]);
    container.appendChild(box3);
    box4.style.height=box4.style.width="214px";
    box4.style.right=box4.style.top="0";
    allimg[3].style.height="214px";
    box4.appendChild(allimg[3]);
    container.appendChild(box4);
    box5.style.width="33%";
    box5.style.height="236px";
    box5.style.bottom=box5.style.right="0";
    allimg[4].style.height="236px";
    box5.appendChild(allimg[4]);
    container.appendChild(box5);
}
function six(){
    var allimg=document.getElementsByTagName("img");
    var box1=document.createElement("div");
    var box2=document.createElement("div");
    var box3=document.createElement("div");
    var box4=document.createElement("div");
    var box5=document.createElement("div");
    var box6=document.createElement("div");
    box1.style.position=box2.style.position=box3.style.position=box4.style.position=box5.style.position=box6.style.position="absolute";
    box1.style.height="302px";
    box1.style.width="436px";
    box1.style.top=box1.style.left="0";
    allimg[0].style.height="302px";
    allimg[0].style.width="436px";
    box1.appendChild(allimg[0]);
    container.appendChild(box1);
    box2.style.height=box2.style.width=box3.style.height=box3.style.width="33%";
    box2.style.left=box2.style.bottom="0";
    allimg[1].style.height="150px";
    allimg[1].style.width="214px";
    box2.appendChild(allimg[1]);
    container.appendChild(box2);
    box3.style.bottom="0";
    box3.style.left="214px";
    allimg[2].style.height="148px";
    allimg[2].style.width="222px";
    box3.appendChild(allimg[2]);
    container.appendChild(box3);
    box4.style.height="33.3%";
    box4.style.width="214px";
    box4.style.right=box4.style.top="0";
    allimg[3].style.height="148px";
    box4.appendChild(allimg[3]);
    container.appendChild(box4);
    box5.style.width="33%";
    box5.style.height="148px";
    box5.style.bottom=box5.style.right="0";
    allimg[4].style.height="148px";
    box5.appendChild(allimg[4]);
    container.appendChild(box5);
    box6.style.width="33%";
    box6.style.height="152px";
    box6.style.top="148px";
    box6.style.right="0";
    allimg[5].style.height="153px";
    box6.appendChild(allimg[5]);
    container.appendChild(box6);
}