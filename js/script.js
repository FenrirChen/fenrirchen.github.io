function formatDateTime(date) {  
  let year = date.getFullYear();  
  let month = String(date.getMonth() + 1).padStart(2, '0');  
  let day = String(date.getDate()).padStart(2, '0');  
  let hours = String(date.getHours()).padStart(2, '0');  
  let minutes = String(date.getMinutes()).padStart(2, '0');  
  let seconds = String(date.getSeconds()).padStart(2, '0');
  let output="当前时间:"+year+"-"+month+"-"+day+"  "+hours+":"+minutes+":"+seconds;  
  return output;  
}
function daysSinceYear2000(dateString) {
  // 将输入的字符串转换为Date对象
  const inputDate = new Date(dateString);
  
  // 检查日期是否有效
  if (isNaN(inputDate.getTime())) {
      throw new Error('Invalid date string');
  }
  
  // 定义起始日期为2000-01-01
  const startDate = new Date(2000, 0, 1); // 注意月份是从0开始的
  
  // 计算两个日期之间的毫秒数差值
  const diffInMilliseconds = Math.abs(inputDate - startDate);
  
  // 转换为天数
  const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
  
  return diffInDays;
}
let now = new Date();
setInterval(() => {  
  document.getElementsByClassName('time')[0].innerText = formatDateTime(new Date());  
}, 1000);
setInterval(() => {  
document.getElementsByClassName('yineng')[0].innerText=("当前卡池:噪音【诺拉】(7.11-8.22)------剩余时间:"+String(daysSinceYear2000("2024-08-22")-daysSinceYear2000(formatDateTime(now)))+"天");  
}, 1000);



let initialDevicePixelRatio = window.devicePixelRatio;
var k1=Number(document.getElementsByClassName("weipao")[0].offsetHeight);
var k2=Number(document.getElementsByClassName("libao")[0].offsetHeight);
var k3=Number(document.getElementsByClassName("yuliu")[0].offsetHeight);
var k4=Number(document.getElementsByClassName("richang")[0].offsetHeight);

function updateDivHeights(){
  k1=Number(document.getElementsByClassName("weipao")[0].offsetHeight);
  k2=Number(document.getElementsByClassName("libao")[0].offsetHeight);
  k3=Number(document.getElementsByClassName("yuliu")[0].offsetHeight);
  k4=Number(document.getElementsByClassName("richang")[0].offsetHeight);
}

/*window.addEventListener('resize', () => {
  // 检查 devicePixelRatio 是否发生了变化
  if (window.devicePixelRatio !== initialDevicePixelRatio) {
      // 更新 initialDevicePixelRatio
      initialDevicePixelRatio = window.devicePixelRatio;
      console.log("窗口大小改变了");
      // 更新 divs 的高度
      updateDivHeights();
  }
});*/

function onlick(jj){
if(jj==1)
{
  var contan=document.getElementsByClassName("weipao")[0];
  contan.style.height=contan.offsetHeight==0?k1+'px':0+'px';
  console.log(k1);
}
if(jj==2)
  {
    var contan=document.getElementsByClassName("libao")[0];
    contan.style.height=contan.offsetHeight==0?k2+'px':0+'px';
    console.log(k2);
  }
if(jj==3)
  {
    var contan=document.getElementsByClassName("yuliu")[0];
    contan.style.height=contan.offsetHeight==0?k3+'px':0+'px';
    console.log(k3);
  }
  if(jj==4)
    {
      var contan=document.getElementsByClassName("richang")[0];
      contan.style.height=contan.offsetHeight==0?k4+'px':0+'px';
      console.log(k4);
    }
}

var mojing_zong=0,mojing_xian=0,mojing_yueka=0,mojing_libao=0,mojing_ditu=0,mojing_huodong=0,mojing_gaoding=0;
var chihe_zong=0,chihe_xian=0,chihe_huodong=0,chihe_ditu=0,chihe_libao=0;
var hongpiao_zong=0,hongpiao_xian=0,hongpiao_huodong=0,hongpiao_libao=0,hongpaio_ditu=0;
function reflesh(){
mojing_zong=Number(mojing_xian)+Number(mojing_yueka)+Number(mojing_libao)+Number(mojing_ditu)+Number(mojing_huodong)+Number(mojing_gaoding);
hongpiao_zong=Number(hongpiao_xian)+Number(hongpiao_huodong)+Number(hongpaio_ditu)+Number(hongpiao_libao);
chihe_zong=Number(chihe_xian)+Number(chihe_huodong)+Number(chihe_ditu)+Number(chihe_libao);
document.getElementsByClassName("mojing_tiaoz")[0].innerText=("总计墨晶:"+String(mojing_zong));
document.getElementsByClassName("hongpiao_tiaoz")[0].innerText=("总计红票:"+String(hongpiao_zong));
document.getElementsByClassName("chihe_tiaoz")[0].innerText=("总计赤核:"+String(chihe_zong));
}

function max(a,b){
a=Number(a);
b=Number(b);
if(a>=b)
  return a;
else
  return b;
}


function shuru(ty){
if(ty==1)
{
  mojing_xian=document.getElementsByClassName("tiaoz1")[0].value;
  document.getElementsByClassName("mojing_tiaoz2")[0].innerText=("现有:"+String(mojing_xian));
}
if(ty==2)
{
  chihe_xian=document.getElementsByClassName("tiaoz1")[1].value;
  document.getElementsByClassName("mojing_tiaoz2")[6].innerText=("现有:"+String(chihe_xian));
}
if(ty==3)
{
  hongpiao_xian=document.getElementsByClassName("tiaoz1")[2].value;
  document.getElementsByClassName("mojing_tiaoz2")[10].innerText=("现有:"+String(hongpiao_xian));
}
reflesh();
}
var check=document.querySelectorAll(".ditu");
check.forEach(function(checkbox){
checkbox.addEventListener('change',function(){
  var val=this.getAttribute('data-value');
  var mo="",chi="",piao="";
  var time=0;
  for(var i=0;i<val.length;i++)
  {
    if(val[i]!='_')
    {
      if(time==0)
        mo+=val[i];
      if(time==1)
        chi+=val[i];
      if(time==2)
        piao+=val[i];
    }
    else
      time++;
  }
  mo=Number(mo);
  chi=Number(chi);
  piao=Number(piao);
  if(this.checked)
  {
    console.log("yes");
    mojing_ditu+=mo;
    chihe_ditu+=chi;
    hongpaio_ditu+=piao;
  }
  else
  {
    mojing_ditu-=mo;
    chihe_ditu-=chi;
    hongpaio_ditu-=piao;
  }
  document.getElementsByClassName("mojing_tiaoz2")[2].innerText=("地图资源:"+String(mojing_ditu));
  document.getElementsByClassName("mojing_tiaoz2")[8].innerText=("地图资源:"+String(chihe_ditu));
  document.getElementsByClassName("mojing_tiaoz2")[12].innerText=("地图资源:"+String(hongpaio_ditu));
  reflesh();
})
})


function countMondays(startDate, endDate) {
let count = 0;
let currentDate = new Date(startDate);

while (currentDate <= endDate) {
    if (currentDate.getDay() === 1) { // 0 is Sunday, 1 is Monday
        count++;
    }
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
}

return count;
}

//计算有几个一号
function countFirstDaysOfMonth(startDate, endDate) {
let count = 0;
let currentDate = new Date(startDate);

while (currentDate <= endDate) {
    if (currentDate.getDate() === 1) { // Check if it's the first day of the month
        count++;
    }
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
}

return count;
}

function countSpecialDates(startDateStr, endDateStr) {  
// 将字符串转换为Date对象  
const startDate = new Date(startDateStr);  
const endDate = new Date(endDateStr);  

// 初始化计数器  
let count = 0;  

// 设定要检查的月份和日期  
const specialMonths = [1, 4, 7, 10];  
const specialDay = 1;  

// 检查开始日期是否在结束日期之前，否则不执行循环  
if (startDate > endDate) {  
    console.error('开始日期不能晚于结束日期');  
    return 0;  
}  

// 初始化一个临时日期对象，用于遍历  
let tempDate = new Date(startDate);  

// 遍历日期直到达到或超过结束日期  
while (tempDate <= endDate) {  
    // 检查当前月份和日期是否匹配  
    if (specialMonths.includes(tempDate.getMonth() + 1) && tempDate.getDate() === specialDay) {  
        count++;  
    }  

    // 移动到下一天  
    tempDate.setDate(tempDate.getDate() + 1);  
}  

return count;  
} 


var zhouchang=0,huodong_mo=0,huodong_chi=0,huodong_piao=0,shenyuan=0,mingyun=0,dianfeng=0,weihu=0;
var day=0,qishu=0;

var tongxing=[  
"2024-08-01", "2024-09-12", "2024-10-24", "2024-12-05",  
"2025-01-16", "2025-02-27", "2025-04-09", "2025-05-21",  
"2025-07-02", "2025-08-13"  
]; 

function countDatesInRange(startDate, endDate, targetDates) {  
// 将输入的日期字符串转换为Date对象  
const start = new Date(startDate);  
const end = new Date(endDate);  

// 初始化计数器  
let count = 0;  

// 遍历目标日期数组  
for (const targetDateStr of targetDates) {  
    // 将目标日期字符串转换为Date对象  
    const targetDate = new Date(targetDateStr);  

    // 检查目标日期是否在开始和结束日期之间（包括开始和结束日期）  
    if (targetDate >= start && targetDate <= end) {  
        count++;  
    }  
}  

return count;  
}  

var zhou=document.getElementsByClassName("ri")[0];
var zhi=document.getElementsByClassName("ri")[1];
var wei=document.getElementsByClassName("ri")[2];
var huo=document.getElementsByClassName("ri")[3];

function functionOption1(){
endri=new Date(2024,7,22);
startri=new Date();
//通行证
qishu=countDatesInRange(startri,endri,tongxing);
document.getElementsByClassName("tongxing")[0].innerText=("通行证共"+String(qishu)+"期");
//周长
var moday=countMondays(startri,endri);
if(zhou.checked)
  moday--;
zhouchang=moday*450;
document.getElementsByClassName("zhouchang")[0].innerText=("周常(350+100墨晶):"+String(zhouchang)+"墨晶");
//月卡
day=daysSinceYear2000("2024-08-22")-daysSinceYear2000(formatDateTime(now));
//深渊，巅峰
var yihao=countFirstDaysOfMonth(startri,endri);
shenyuan=yihao*200;
dianfeng=yihao*100;
document.getElementsByClassName("shenyuan")[0].innerText=("深渊:"+String(shenyuan)+"墨晶");
//突围
var saiji=countSpecialDates(startri,endri);
mingyun=saiji*800;
document.getElementsByClassName("pvp")[0].innerText=("巅峰联赛/命运突围(此处仅按低保算owo):"+String(mingyun+dianfeng)+"墨晶");
reflesh();
//活动
var huoqiu=8;
var qianchi=20,qianmo=1000,qianpiao=10;
if(huo.checked)
  huoqiu-=8;
if(zhi.checked)
{
  qianchi-=20;
  qianmo-=1000;
  qianpiao-=10;
}
console.log(qianchi);
document.getElementsByClassName("qiandao")[0].innerText="签到活动/执行供给:"+String(qianmo)+"墨"+String(qianchi)+"球"+String(qianpiao)+"票";
document.getElementsByClassName("shangdian")[0].innerText="活动商店:"+String(huoqiu)+"球";
weihu=600;
if(wei.checked)
  weihu-=300;
document.getElementsByClassName("weihu")[0].innerText=("预计维护:"+String(weihu)+"墨晶");
//汇总
mojing_huodong=zhouchang+dianfeng+shenyuan+mingyun+weihu+qianmo;
chihe_huodong=qianchi+huoqiu;
hongpiao_huodong=qianpiao;
document.getElementsByClassName("mojing_tiaoz2")[4].innerText=("活动/日常获取:"+String(mojing_huodong));
document.getElementsByClassName("mojing_tiaoz2")[7].innerText=("活动获取:"+String(chihe_huodong));
document.getElementsByClassName("mojing_tiaoz2")[11].innerText=("活动获取:"+String(hongpiao_huodong));
reflesh();
}

function functionOption2(){
//周长墨晶
endri=new Date(2024,8,26);
startri=new Date();
qishu=countDatesInRange(startri,endri,tongxing);
document.getElementsByClassName("tongxing")[0].innerText=("通行证共"+String(qishu)+"期");
var moday=countMondays(startri,endri);
if(zhou.checked)
  moday--;
zhouchang=moday*450;
document.getElementsByClassName("zhouchang")[0].innerText=("周常(350+100墨晶):"+String(zhouchang)+"墨晶");
//月卡
day=daysSinceYear2000("2024-09-26")-daysSinceYear2000(formatDateTime(now));
//深渊，巅峰
var yihao=countFirstDaysOfMonth(startri,endri);
shenyuan=yihao*200;
dianfeng=yihao*100;
document.getElementsByClassName("shenyuan")[0].innerText=("深渊:"+String(shenyuan)+"墨晶");
//突围
var saiji=countSpecialDates(startri,endri);
mingyun=saiji*800;
document.getElementsByClassName("pvp")[0].innerText=("巅峰联赛/命运突围(此处仅按低保算owo):"+String(mingyun+dianfeng)+"墨晶");
reflesh();
//活动
var huoqiu=16;
var qianchi=40,qianmo=2000,qianpiao=20;
if(huo.checked)
  huoqiu-=8;
if(zhi.checked)
{
  qianchi-=20;
  qianmo-=1000;
  qianpiao-=10;
}
document.getElementsByClassName("qiandao")[0].innerText="签到活动/执行供给:"+String(qianmo)+"墨"+String(qianchi)+"球"+String(qianpiao)+"票";
document.getElementsByClassName("shangdian")[0].innerText="活动商店:"+String(huoqiu)+"球";
//维护
weihu=1200;
if(wei.checked)
  weihu-=300;
document.getElementsByClassName("weihu")[0].innerText=("预计维护:"+String(weihu)+"墨晶");
//汇总
mojing_huodong=zhouchang+dianfeng+shenyuan+mingyun+weihu+qianmo;
chihe_huodong=qianchi+huoqiu;
hongpiao_huodong=qianpiao;
document.getElementsByClassName("mojing_tiaoz2")[4].innerText=("活动/日常获取:"+String(mojing_huodong));
document.getElementsByClassName("mojing_tiaoz2")[7].innerText=("活动获取:"+String(chihe_huodong));
document.getElementsByClassName("mojing_tiaoz2")[11].innerText=("活动获取:"+String(hongpiao_huodong));
reflesh();
}

function functionOption3(){
//周长墨晶
endri=new Date(2024,10,7);
startri=new Date();
qishu=countDatesInRange(startri,endri,tongxing);
document.getElementsByClassName("tongxing")[0].innerText=("通行证共"+String(qishu)+"期");
var moday=countMondays(startri,endri);
if(zhou.checked)
  moday--;
zhouchang=moday*450;
document.getElementsByClassName("zhouchang")[0].innerText=("周常(350+100墨晶):"+String(zhouchang)+"墨晶");
//月卡
day=daysSinceYear2000("2024-11-7")-daysSinceYear2000(formatDateTime(now));
//深渊，巅峰
var yihao=countFirstDaysOfMonth(startri,endri);
shenyuan=yihao*200;
dianfeng=yihao*100;
document.getElementsByClassName("shenyuan")[0].innerText=("深渊:"+String(shenyuan)+"墨晶");
//突围
var saiji=countSpecialDates(startri,endri);
mingyun=saiji*800;
document.getElementsByClassName("pvp")[0].innerText=("巅峰联赛/命运突围(此处仅按低保算owo):"+String(mingyun+dianfeng)+"墨晶");
reflesh();
//活动
var huoqiu=24;
var qianchi=60,qianmo=3000,qianpiao=30;
if(huo.checked)
  huoqiu-=8;
if(zhi.checked)
{
  qianchi-=20;
  qianmo-=1000;
  qianpiao-=10;
}
document.getElementsByClassName("qiandao")[0].innerText="签到活动/执行供给:"+String(qianmo)+"墨"+String(qianchi)+"球"+String(qianpiao)+"票";
document.getElementsByClassName("shangdian")[0].innerText="活动商店:"+String(huoqiu)+"球";
//维护
weihu=1800;
if(wei.checked)
  weihu-=300;
document.getElementsByClassName("weihu")[0].innerText=("预计维护:"+String(weihu)+"墨晶");
//汇总
mojing_huodong=zhouchang+dianfeng+shenyuan+mingyun+weihu+qianmo;
chihe_huodong=qianchi+huoqiu;
hongpiao_huodong=qianpiao;
document.getElementsByClassName("mojing_tiaoz2")[4].innerText=("活动/日常获取:"+String(mojing_huodong));
document.getElementsByClassName("mojing_tiaoz2")[7].innerText=("活动获取:"+String(chihe_huodong));
document.getElementsByClassName("mojing_tiaoz2")[11].innerText=("活动获取:"+String(hongpiao_huodong));
reflesh();
}

function functionOption4(){
//周长墨晶
endri=new Date(2024,11,12);
startri=new Date();
qishu=countDatesInRange(startri,endri,tongxing);
document.getElementsByClassName("tongxing")[0].innerText=("通行证共"+String(qishu)+"期");
var moday=countMondays(startri,endri);
if(zhou.checked)
  moday--;
zhouchang=moday*450;
document.getElementsByClassName("zhouchang")[0].innerText=("周常(350+100墨晶):"+String(zhouchang)+"墨晶");
//月卡
day=daysSinceYear2000("2024-12-12")-daysSinceYear2000(formatDateTime(now));
//深渊，巅峰
var yihao=countFirstDaysOfMonth(startri,endri);
shenyuan=yihao*200;
dianfeng=yihao*100;
document.getElementsByClassName("shenyuan")[0].innerText=("深渊:"+String(shenyuan)+"墨晶");
//突围
var saiji=countSpecialDates(startri,endri);
mingyun=saiji*800;
document.getElementsByClassName("pvp")[0].innerText=("巅峰联赛/命运突围(此处仅按低保算owo):"+String(mingyun+dianfeng)+"墨晶");
reflesh();
//活动
var huoqiu=32;
var qianchi=80,qianmo=4000,qianpiao=40;
if(huo.checked)
  huoqiu-=8;
if(zhi.checked)
{ 
  qianchi-=20;
  qianmo-=1000;
  qianpiao-=10;
}
document.getElementsByClassName("qiandao")[0].innerText="签到活动/执行供给:"+String(qianmo)+"墨"+String(qianchi)+"球"+String(qianpiao)+"票";
document.getElementsByClassName("shangdian")[0].innerText="活动商店:"+String(huoqiu)+"球";
//维护
weihu=2400;
if(wei.checked)
  weihu-=300;
document.getElementsByClassName("weihu")[0].innerText=("预计维护:"+String(weihu)+"墨晶");
//汇总
mojing_huodong=zhouchang+dianfeng+shenyuan+mingyun+weihu+qianmo;
chihe_huodong=qianchi+huoqiu;
hongpiao_huodong=qianpiao;
document.getElementsByClassName("mojing_tiaoz2")[4].innerText=("活动/日常获取:"+String(mojing_huodong));
document.getElementsByClassName("mojing_tiaoz2")[7].innerText=("活动获取:"+String(chihe_huodong));
document.getElementsByClassName("mojing_tiaoz2")[11].innerText=("活动获取:"+String(hongpiao_huodong));
reflesh();
}

function functionOption5(){
//周长墨晶
endri=new Date(2025,0,16);
startri=new Date();
qishu=countDatesInRange(startri,endri,tongxing);
document.getElementsByClassName("tongxing")[0].innerText=("通行证共"+String(qishu)+"期");
var moday=countMondays(startri,endri);
if(zhou.checked)
  moday--;
zhouchang=moday*450;
document.getElementsByClassName("zhouchang")[0].innerText=("周常(350+100墨晶):"+String(zhouchang)+"墨晶");
//月卡
day=daysSinceYear2000("2025-01-16")-daysSinceYear2000(formatDateTime(now));
//深渊，巅峰
var yihao=countFirstDaysOfMonth(startri,endri);
shenyuan=yihao*200;
dianfeng=yihao*100;
document.getElementsByClassName("shenyuan")[0].innerText=("深渊:"+String(shenyuan)+"墨晶");
//突围
var saiji=countSpecialDates(startri,endri);
mingyun=saiji*800;
document.getElementsByClassName("pvp")[0].innerText=("巅峰联赛/命运突围(此处仅按低保算owo):"+String(mingyun+dianfeng)+"墨晶");
reflesh();
//活动
var huoqiu=40;
var qianchi=100,qianmo=5000,qianpiao=50;
if(huo.checked)
  huoqiu-=8;
if(zhi.checked)
{
  qianchi-=20;
  qianmo-=1000;
  qianpiao-=10;
}
document.getElementsByClassName("qiandao")[0].innerText="签到活动/执行供给:"+String(qianmo)+"墨"+String(qianchi)+"球"+String(qianpiao)+"票";
document.getElementsByClassName("shangdian")[0].innerText="活动商店:"+String(huoqiu)+"球";
//维护
weihu=3000;
if(wei.checked)
  weihu-=300;
document.getElementsByClassName("weihu")[0].innerText=("预计维护:"+String(weihu)+"墨晶");
//汇总
mojing_huodong=zhouchang+dianfeng+shenyuan+mingyun+weihu+qianmo;
chihe_huodong=qianchi+huoqiu;
hongpiao_huodong=qianpiao;
document.getElementsByClassName("mojing_tiaoz2")[4].innerText=("活动/日常获取:"+String(mojing_huodong));
document.getElementsByClassName("mojing_tiaoz2")[7].innerText=("活动获取:"+String(chihe_huodong));
document.getElementsByClassName("mojing_tiaoz2")[11].innerText=("活动获取:"+String(hongpiao_huodong));
reflesh();
}


var radios = document.getElementsByName('select');
radios.forEach(function(radio) {
  radio.addEventListener('change', function() {
        if (this.value === '1') {
            functionOption1();
        } else if (this.value === '2') {
            functionOption2();
        } else if (this.value === '3') {
            functionOption3();
        } else if (this.value === '4') {
            functionOption4();
        }
          else if (this.value === '5') {
            functionOption5();
        }
    })
  })

function jisuan(){
var a=document.getElementsByClassName("libao1")[5];
var b=document.getElementsByClassName("libao1")[6];
var c=document.getElementsByClassName("libao1")[7];
var d=document.getElementsByClassName("libao1")[8];
var aa=Number(a.value);
var bb=Number(b.value);
var cc=Number(c.value);
var dd=Number(d.value);
mojing_gaoding=aa*(-10000)+bb*(-9400)+cc*(-10610)+dd*(-17800);
document.getElementsByClassName("mojing_tiaoz2")[5].innerText=("高定预留:"+String(mojing_gaoding));
reflesh();
}

var tong68=document.getElementsByClassName("libao1")[0];
var tong128=document.getElementsByClassName("libao1")[1];
var mo_tong=0,mo_li=0,chi_tong=0,chi_li=0,piao_tong=0,piao_li=0,mo_shou=0;
function tongjitongxing(){
var a=Number(tong68.value);
var b=Number(tong128.value);
var li1bao=Number(document.getElementsByClassName("libao1")[2].value);
var li2bao=Number(document.getElementsByClassName("libao1")[3].value);
var li3bao=Number(document.getElementsByClassName("libao1")[4].value);
mo_tong=1280*(a+b);
chi_tong=10*(a+b)+15*b;
piao_tong=5*a;
mo_li=880*li2bao+1680*li3bao;
chi_li=5*li1bao+10*li2bao+15*li3bao;
piao_li=5*li1bao+10*li2bao+15*li3bao;
mojing_libao=mo_tong+mo_li+mo_shou;
chihe_libao=chi_li+chi_tong;
hongpiao_libao=piao_li+piao_tong;
document.getElementsByClassName("mojing_tiaoz2")[3].innerText=("礼包:"+String(mojing_libao));
document.getElementsByClassName("mojing_tiaoz2")[9].innerText=("礼包:"+String(chihe_libao));
document.getElementsByClassName("mojing_tiaoz2")[13].innerText=("礼包:"+String(hongpiao_libao));
reflesh();
}

var jian=document.querySelectorAll(".jian");
jian.forEach(function(a){
a.addEventListener('click',function(){
  var a=Number(this.value);
  var b=document.getElementsByClassName("libao1")[a];
  var c=Number(b.value);
  c--;
  c=max(c,0);
  b.value=String(c);
  tongjitongxing();
  jisuan();
})
})

var jia=document.querySelectorAll(".jia");
jia.forEach(function(a){
a.addEventListener('click',function(){
  var a=Number(this.value);
  var b=document.getElementsByClassName("libao1")[a];
  var c=Number(b.value);
  c++;
  if(a==0||a==1)
  {
    var z=document.getElementsByClassName("libao1")[0];
    var y=document.getElementsByClassName("libao1")[1];
    var z2=Number(z.value);
    var y2=Number(y.value);
    if(z2+y2>=qishu)
    {
      alert("当前通行证最多购买"+String(qishu)+"期");
      if(a==0)
      {
        c=qishu-y2;
      }
      else
      {
        c=qishu-z2;
      }
    }
  }
  b.value=String(c);
  tongjitongxing();
  jisuan();
})
})

var dangqi=document.querySelectorAll(".dangqi");


dangqi.forEach(function(a){
a.addEventListener('change',function(){
  var =document.getElementsByClassName("yueka")[0];
  if(s.checked)
    {
      mojing_yueka=day*100;
    }
    else
      mojing_yueka=0;
    document.getElementsByClassName("mojing_tiaoz2")[1].innerText=("月卡:"+String(mojing_yueka));
    reflesh();
})
})

var =document.getElementsByClassName("yueka")[0];
s.addEventListener('change',function(){
if(s.checked)
  {
    mojing_yueka=day*100;
  }
  else
    mojing_yueka=0;
  document.getElementsByClassName("mojing_tiaoz2")[1].innerText=("月卡:"+String(mojing_yueka));
  reflesh();
})

function jiance(x){
console.log("检测启动");
var tong1=Number(tong128.value);
var tong2=Number(tong68.value);
if(tong1+tong2>qishu)
{
  alert("当前通行证最多购买"+String(qishu)+"期");
  if(x==1)
  {
    tong128.value=qishu-tong2;
  }
  else
  {
    tong68.value=qishu-tong1;
  }
}
tongjitongxing();
}

var libao1=document.getElementsByClassName("libao1")[2];
var libao2=document.getElementsByClassName("libao1")[3];
var libao3=document.getElementsByClassName("libao1")[4];


tong128.addEventListener('input',function(){jiance(1)});
tong68.addEventListener('input',function(){jiance(2)});
libao1.addEventListener('input',function(){tongjitongxing()});
libao2.addEventListener('input',function(){tongjitongxing()});
libao3.addEventListener('input',function(){tongjitongxing()});



var shouchong=document.querySelectorAll(".shouchong");
shouchong.forEach(function(a){
a.addEventListener('change',function(){
  var x=Number(a.value);
  if(this.checked)
  {
    if(x==1)
      mo_shou+=60;
    if(x==2)
      mo_shou+=300;
    if(x==3)
      mo_shou+=980;
    if(x==4)
      mo_shou+=1980;
    if(x==5)
      mo_shou+=3280;
    if(x==6)
      mo_shou+=6480;
  }
  else
  {
    if(x==1)
      mo_shou-=60;
    if(x==2)
      mo_shou-=300;
    if(x==3)
      mo_shou-=980;
    if(x==4)
      mo_shou-=1980;
    if(x==5)
      mo_shou-=3280;
    if(x==6)
      mo_shou-=6480;
  }
  tongjitongxing();
})
})

var r=document.querySelectorAll(".ri");
r.forEach(function(a){
a.addEventListener('change',function(){
  var a=document.getElementsByClassName("dangqi");
  console.log("yes");
  if(a[0].checked)
    functionOption1();
  if(a[1].checked)
    functionOption2();
  if(a[2].checked)
    functionOption3();
  if(a[3].checked)
    functionOption4();
  if(a[4].checked)
    functionOption5();    
})
})
