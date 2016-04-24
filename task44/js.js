/**
 * Created by John Snow on 2016/4/19.
 */

var colcontainer=document.getElementById("container");
var imgall=document.getElementsByTagName("img");
var imgcount=57;//后台的图片总数
//添加新的一张图片
function addnewimg() {
    //找出高度最短的一栏
    var colall = document.getElementsByClassName("col");
    var minheight = parseInt(window.getComputedStyle(colall[0]).height.toString().split("px")[0]);
    var minheightcol = colall[0];
    for (var i = 0; i <= colall.length - 1; i++) {
        var compareheight = parseInt(window.getComputedStyle(colall[i]).height.toString().split("px")[0]);
            if (compareheight < minheight) {
                minheight = parseInt(window.getComputedStyle(colall[i]).height.toString().split("px")[0]);
                minheightcol = colall[i];
            }
    }
    var pageimgcount = document.getElementsByTagName("img").length + 1;
    if (pageimgcount < 57) {
        var imgnumber=pageimgcount+1;
        var imgtemp = document.createElement("img");
        imgtemp.setAttribute("src", "img" + imgnumber + ".jpg");
        imgtemp.setAttribute("class", "image");
        minheightcol.appendChild(imgtemp);
    }
}

function creatcol(){
    var colnum=parseInt(document.getElementById("colnum").value.trim());
    console.log(colnum);
    var colwidth=Math.floor(100/colnum);
    for(var i=0;i<=colnum-1;i++){
        var coltemp=document.createElement("div");
        coltemp.setAttribute("class","col");
        coltemp.style.width=colwidth+"%";
        colcontainer.appendChild(coltemp);
    }
}
function loadsomeimg(){
    var colall=document.getElementsByClassName("col");
    //每一栏先载入一张
    for(var i=1;i<=colall.length;i++){
        if(i>imgcount){
            console.log("已无剩余图片可供加载");break;
        }
        var imgtemp=document.createElement("img");
        imgtemp.setAttribute("src","img"+i+".jpg");
        imgtemp.setAttribute("class","image");
        colall[i-1].appendChild(imgtemp);
    }
}
//遮罩层的相关函数
function shadow(){
    var sw=document.createElement("div");
    sw.setAttribute("class","sw");
    document.getElementsByTagName("body")[0].appendChild(sw);
    var cc=document.getElementById("container");
    cc.addEventListener("click",function(e){
        if(e.target.nodeName=="IMG"){
            sw.style.display="flex";
            var imgtemp=document.createElement("img");
            imgtemp.setAttribute("src",e.target.getAttribute("src"));
            imgtemp.setAttribute("class","showimg");
            sw.appendChild(imgtemp);
        }
    });
    sw.addEventListener("click",function(e){
        sw.style.display="none";
        sw.innerHTML="";
    },false);
}
function engage(){
    colcontainer.innerHTML="";
    creatcol();
    loadsomeimg();
    document.getElementById("add").onclick=addnewimg;
    document.getElementById("colnumbutton").onclick=engage;
}
engage();
shadow();