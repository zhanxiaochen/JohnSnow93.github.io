/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 String.prototype.trim=function()
{
     return this.replace(/(^\s*)|(\s*$)/g,"");
};

var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData(){
	var city=document.getElementById("aqi-city-input").value.trim();
	var quality=document.getElementById("aqi-value-input").value.trim();
	console.log(city+quality); //用于调试
	var re=/^[A-Za-z\u4E00-\u9FA5]+$/;
	var renum=/^[0-9]*[1-9][0-9]*$/g;
	console.log(re.test(city)&&renum.test(quality));
	if(!re.test(city)){
		alert("Please enter right city !");
		document.getElementById("aqi-city-input").focus();
		}
	if(!renum.test(quality)){
		document.getElementById("aqi-value-input").focus();
		alert("Please enter right  qulity number!");	
		}
	aqiData[city]=quality;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList(); 
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();