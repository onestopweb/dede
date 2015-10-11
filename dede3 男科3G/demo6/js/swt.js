// JavaScript Document

document.writeln("<style type=\"text/css\">");
document.writeln(".fdBonTel{ width:100%; height:53px; position:fixed; background:#0052ae; text-align:center; left:0; bottom:0; z-index:999; }");
document.writeln(".fdOnline{ background:url(/templets/v1/images/online.png) no-repeat; width:255px; height:181px; position:fixed; left:50%; margin-left:-128px; top:40%; z-index:999; border-radius: 15px; box-shadow: 0 0 20px rgba(10, 2, 4, 0.75);}");
document.writeln(".fdOnline .fdOClose{ width:44px; height:44px; display:block; margin-top:-17px; margin-right:-6px;}");
document.writeln(".fdOnline .fdOTel{ width:127px; height:58px; display:block; margin-top:123px;}");
document.writeln(".fdOnline .fdOOn{ width:128px; height:58px; display:block;  margin-top:96px;}");
document.writeln("</style>");
document.writeln("<div class=\"fdBonTel\">");
document.writeln("<img src=\"/templets/v1/images/fdTel.gif\" usemap=\"#Maps\">");
document.writeln("<map name=\"Maps\" id=\"Maps\">");
document.writeln("<area shape=\"rect\" coords=\"0,0,109,53\" href=\"/zixun/\" target=\"_blank\">");
document.writeln("<area shape=\"rect\" coords=\"109,0,218,53\" href=\"tel:0855-8253310\" target=\"_blank\">");
document.writeln("<area shape=\"rect\" coords=\"218,0,320,53\" href=\"/zixun/\" target=\"_blank\"> ");
document.writeln("</map>");
document.writeln("</div>");
document.writeln("<div class=\"fdOnline\" id=\"fdOnline\">");
document.writeln("<a class=\"fdOClose f_r\" onclick=\"closeOnline();\"><img src=\"/templets/v1/images/closeBtn.png\" width=\"44\" height=\"44\"></a>");
document.writeln("<a href=\"tel:08558253310\" target=\"_blank\" rel=\"nofollow\" class=\"fdOTel f_l\"></a>");
document.writeln("<a href=\"/zixun/\" target=\"_blank\" rel=\"nofollow\" class=\"fdOOn f_r\"></a>");
document.writeln("</div>");

function showOnline() {
    if (document.getElementById("fdOnline")) {
        if (document.getElementById("fdOnline").style.display == "none") {
            document.getElementById("fdOnline").style.display = "block";
        }
    }
}

function closeOnline() {
    document.getElementById("fdOnline").style.display = "none";
};

$(function(){
   setInterval(showOnline, 30000);
});





