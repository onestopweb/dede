// JavaScript Document
document.write("<div class='swt' id='swt'><div class='close' onclick='closeSWT()';></div><img src='/templets/v1/images/swttc.jpg' alt='' border='0' usemap='#MapFLR' /><map name='MapFLR' id='MapFLR'><area shape='rect' coords='5,42,209,131' href='/zixun/' target=\"_blank\"/></map></div>");
document.write("<div style=\"position: fixed; top: 0px;\" class=\"OnlineBtn\"><a class=\"topswt\" href=\"tel:08558253310\" target=\"_blank\"><img src=\"/templets/v1/images/gh_ico3.gif\">电话咨询</a><a class=\"fubiao\" href=\"/zixun/\"><img src=\"/templets/v1/images/c3_n.png\">网络咨询</a></div>");
document.write("<div class=\"bottomfloat\"><a class=\"fubiao\" href=\"/zixun/\" target=\"_blank\"><img src=\"/templets/v1/images/xdibu.gif\"></a></div>");
document.write("<div class=\"wys\"><a href=\"/zixun/\" target=\"_blank\"><img src=\"/templets/v1/images/wys.gif\"></a></div>");

function chkSWT() {
    if (document.getElementById("swt")) {
        if (document.getElementById("swt").style.display == "none") {
            document.getElementById("swt").style.display = "block";
        }
    }
}

function closeSWT() {
    document.getElementById("swt").style.display = "none";
    clearInterval(_check);
    setInterval(chkSWT, 30000);
};

window.onload =  function() {
   setInterval(chkSWT, 30000);
};