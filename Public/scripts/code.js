var hours = new Date().getHours() ;

if(hours >=0 ) {
  var imgUrl = "../images/background/silhouettes-hills.jpg";
  Theme(imgUrl,"#613f90ff")
 }

 if (hours >=6){
    var imgUrl = "../images/background/landscape-sky.jpg";
    Theme(imgUrl,"#FF714B");
 }

 if(hours >=11){
     var imgUrl = "../images/background/natural-sky.jpg";
     Theme(imgUrl,"#799EFF");
 }

 if(hours >=16){
     var imgUrl = "../images/background/sunset-sky.jpg";
     Theme(imgUrl,"#fffb2cff");
 }

 if(hours >= 18){
    var imgUrl = "../images/background/silhouettes-hills.jpg";
    Theme(imgUrl,"#613f90ff")
 }

$("#submit").click(function(){
   alert("slide down to get your results");
});

function navTheme(pProvice,color){
$(`.${pProvice}`).css("border-bottom",`5px solid ${color}`);
$(`.${pProvice} > a >p`).css("color",`${color}`);
$(`.${pProvice} > a > img`).css("width","50px");
$(`.${pProvice} > a`).css("border","none");
}

function  cardTheme(url){
  $(".country").css("background-image",`url(${url})`);
}

function Theme(imgUrl,color){
    $(".header").css("background-image",`url(${imgUrl})`);
    $(".footer").css("background-image",`url(${imgUrl})`);
    $(".secName > div > h1").css("color",`${color}`);
    $(".HOME").css("color",`${color}`);
    navTheme("pGauteng",`${color}`);
    navTheme("pEasternCape",`${color}`);
    navTheme("pFreeState",`${color}`);
    navTheme("pKwaZulu-Natal",`${color}`);
    navTheme("pLimpopo",`${color}`);
    navTheme("pMpumalanga",`${color}`);
    navTheme("pNorthernCape",`${color}`);
    navTheme("pNorthWest",`${color}`);
    cardTheme(`${imgUrl}`);
    $("span").css("color",`${color}`);
}

$(".secLogo").click(function(){
  Theme("../images/background/natural-sky.jpg","#799EFF");
});

