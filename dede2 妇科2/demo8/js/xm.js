// JavaScript Document
function killerrors() { return true; } window.onerror = killerrors;

function $F(id)
{return document.getElementById(id);}

//通用切换
function changexx(id,h_name,c_name,h_css,c_css,index_count,h_nowcss,c_nowcss)
{
	for(var i=1;i<=index_count;i++)
	{
		$F(h_name+i).className=h_css;
		$F(c_name+i).className=c_css;
	}
	$F(h_name+id).className=h_nowcss;
	$F(c_name+id).className=c_nowcss;
}
//通用切换

//丰胸，整形，美容，无创，牙科专家切换
function changezj(id,cname,index_count)
{
	for(var i=1;i<=index_count;i++)
	{
		$F(cname+"_zj"+i).className="disnone";
		$F(cname+"_zj_js"+i).className="bcrapt disnone";
		$F(cname+"_zj_s"+i).className="";
		
		
	}

	$F(cname+"_zj"+id).className="";
	$F(cname+"_zj_js"+id).className="bcrapt";
	$F(cname+"_zj_s"+id).className="now";
}
//丰胸，整形，美容，无创，牙科专家切换

//切换丰胸，整形，美容，无创，牙科
function change5xx(id)
{
	for(var i=1;i<=5;i++)
	{
		$F("index_5_al"+i).className="bclb disnone";
		$F("index_zj"+i).className="ar disnone";
		if(i==1)
		{
			$F("index_5_xx_s"+i).className="bclac disnone";
			$F("index_5_xx"+i).className="f";
		}
		else
		{
			$F("index_5_xx_s"+i).className="alc disnone";
			$F("index_5_xx"+i).className="";
		}
	}
	$F("index_5_al"+id).className="bclb";
	$F("index_zj"+id).className="ar";
	if(id==1)
		{
			$F("index_5_xx_s"+id).className="bclac";
			$F("index_5_xx"+id).className="fnow";
		}
		else
		{
			$F("index_5_xx_s"+id).className="alc";
			$F("index_5_xx"+id).className="now";
		}
}
//切换丰胸，整形，美容，无创，牙科


/*整形品牌切换*/
var zxflag=1;
var curzx=1,oldzx=1;
var zxrun;
var zxi=0;
$F("zx1").style.height=140+"px";
function setzx(divid)
	{	
	if(zxi==0)
		{
		curzx=divid;
		if(zxflag==0){return;}
		if(curzx==oldzx){return;}
		zxi=10;
		$F("zx"+curzx).style.height=0+"px";
		for(var i=1;i<=3;i++)
			{
				$F("zxs_"+i).className="jdj1";
			}
		for(var i=1;i<=6;i++)
			{
				$F("zx_"+i).className="cur";
			}
		$F("zx_"+curzx).className="fred";
		if(curzx%2==0)
			{
				$F("zxs_"+Math.ceil(curzx/2)).className="jdj2_1";
			}
			else
			{
				$F("zxs_"+Math.ceil(curzx/2)).className="jdj2";
			}
			zxrun=window.setTimeout(runzx,10);
		}
	}

function runzx()
{
	window.clearTimeout(zxrun);
	zxflag=0;
	if(zxi<=140)
	{
		$F("zx"+curzx).style.height=zxi+"px";
		$F("zx"+oldzx).style.height=(140-zxi)+"px";
		zxi=zxi+10;
		zxrun=window.setTimeout(runzx,10);
	}
	else
	{
		$F("zx"+oldzx).style.height=0+"px";
		zxflag=1;
		zxi=0;
		oldzx=curzx;
	}
	
}
/*整形品牌切换*/

/*美容品牌切换*/
var mrflag=1;
var curmr=1,oldmr=1;
var mrrun;
var mri=0;
$F("mr1").style.height=140+"px";
function setmr(divid)
	{	
	if(mri==0)
		{
		curmr=divid;
		if(mrflag==0){return;}
		if(curmr==oldmr){return;}
		mri=10;
		$F("mr"+curmr).style.height=0+"px";
		for(var i=1;i<=3;i++)
			{
				$F("mrs_"+i).className="jdj1";
			}
		for(var i=1;i<=6;i++)
			{
				$F("mr_"+i).className="cur";
			}
		$F("mr_"+curmr).className="fred";
		if(curmr%2==0)
			{
				$F("mrs_"+Math.ceil(curmr/2)).className="jdj2_1";
			}
			else
			{
				$F("mrs_"+Math.ceil(curmr/2)).className="jdj2";
			}
			mrrun=window.setTimeout(runmr,10);
		}
	}

function runmr()
{
	window.clearTimeout(mrrun);
	mrflag=0;
	if(mri<=140)
	{
		$F("mr"+curmr).style.height=mri+"px";
		$F("mr"+oldmr).style.height=(140-mri)+"px";
		mri=mri+10;
		mrrun=window.setTimeout(runmr,10);
	}
	else
	{
		$F("mr"+oldmr).style.height=0+"px";
		mrflag=1;
		mri=0;
		oldmr=curmr;
	}
	
}
/*美容品牌切换*/

/*牙科品牌切换*/
var ykflag=1;
var curyk=1,oldyk=1;
var ykrun;
var yki=0;
$F("yk1").style.height="140px";
function setyk(divid)
	{	
	if(yki==0)
		{
		curyk=divid;
		if(ykflag==0){return;}
		if(curyk==oldyk){return;}
		yki=10;
		$F("yk"+curyk).style.height=0+"px";
		for(var i=1;i<=3;i++)
			{
				$F("yks_"+i).className="jdj1";
			}
		for(var i=1;i<=6;i++)
			{
				$F("yk_"+i).className="cur";
			}
		$F("yk_"+curyk).className="fred";
		if(curyk%2==0)
			{
				$F("yks_"+Math.ceil(curyk/2)).className="jdj2_1";
			}
			else
			{
				$F("yks_"+Math.ceil(curyk/2)).className="jdj2";
			}
			ykrun=window.setTimeout(runyk,10);
		}
	}

function runyk()
{
	window.clearTimeout(ykrun);
	ykflag=0;
	if(yki<=140)
	{
		$F("yk"+curyk).style.height=yki+"px";
		$F("yk"+oldyk).style.height=(140-yki)+"px";
		yki=yki+10;
		ykrun=window.setTimeout(runyk,10);
	}
	else
	{
		$F("yk"+oldyk).style.height=0+"px";
		ykflag=1;
		yki=0;
		oldyk=curyk;
	}
	
}
/*牙科品牌切换*/