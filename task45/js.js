/**
 * Created by John Snow on 2016/4/26.
 */
//定义后台图片数量
var setting={
    backimg:55,
    minlineheight:210,
};
//创建行并填入图片
function linecreate(startpoint,endpoint,lineheight){
    //获得所有图片
    var lineimgwith=0;
    var contain=document.getElementById("container");
    var line=document.createElement("div");
    line.setAttribute("class","imgline");
    line.style.height=lineheight+"px";
    for(;startpoint<=endpoint;startpoint++){
        var tempbox=document.createElement("div");
        tempbox.setAttribute("class","imgbox");
        tempbox.appendChild(data[startpoint]);
        line.appendChild(tempbox);
        lineimgwith+=parseInt(window.getComputedStyle(tempbox).width.split("px")[0]);
    }
    contain.appendChild(line);
}
//开始函数
function start(){
    var allimges=document.getElementsByTagName("img");
    console.log(allimges[allimges.length-1]);
    var minheight =Math.floor(setting.minlineheight+Math.random()*100);//随机指定每行宽度
    var minradio=document.body.clientWidth/minheight;
    window.onload=function(){ //图片加载完成后才能正确地读取高度
        var allimges=document.getElementsByTagName("img");
        var tempradio= 0,i,j= 0;
        for(i=0;i<=allimges.length-1;i++){
            tempradio=tempradio+allimges[i].width/allimges[i].height;
            if(tempradio>=minradio){
                console.log("启动行创建函数，参数是："+j+"到"+i+"行高:"+minheight)
                linecreate(j,i,minheight);//调用行创建函数
                //再次计算新一行的最小高度和比率
                minheight =Math.floor(setting.minlineheight+Math.random()*100);
                minradio=document.body.clientWidth/minheight;
                //存放每一行的临时变量归零
                tempradio=0;
                j=i+1;
            }
        }
        //处理剩下的图片
        if(j<allimges.length){
            linecreate(j,allimges.length-1,minheight);
        }
    }
}
/*
//图片载入函数
function loadmoreimges(){
    var allimgcount=parseInt(document.getElementsByTagName("IMG").length);
    console.log();
    if(allimgcount<setting.backimg){
        console.log(allimgcount);
        for(var j=1;j<=5;j++){
            allimgcount=allimgcount+1;
            var imgtemp=document.createElement("img");
            imgtemp.setAttribute("src","img"+allimgcount+".jpg");
            imgtemp.setAttribute("class","image");
            data.push(imgtemp);
            document.getElementsByTagName("body")[0].appendChild(data[allimgcount-1+j]);
        }
    }
    document.getElementById("container").innerHTML="";
    start();
}
*/
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
//初始载入图片
var data=[];
for(var i=1;i<=20;i++){
    var imgtemp=document.createElement("img");
    imgtemp.setAttribute("src","img"+i+".jpg");
    imgtemp.setAttribute("class","image");
    data.push(imgtemp);
    document.getElementsByTagName("body")[0].appendChild(data[i-1]);
}
console.log(document.getElementsByTagName("img"));
start();
shadow();
document.getElementById("loadmore").addEventListener("click",loadmoreimges);