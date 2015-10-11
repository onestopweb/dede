// JavaScript Document

//根据 id 获取元素
function _id(id){  
    return document.getElementById(id);  
} 
$(function(){
	//搜索框
	_id("searchText").onfocus = function(){
		searchOnfocus();
	};
	_id("searchText").onblur = function(){
		searchOnblur(this);
	};
	
	//提交表单
	document.searchForm.onsubmit = function(){
		return check();
	};  
});

//搜索框
function searchOnfocus(){
	var searchText = _id("searchText");
	if(searchText.value == "请输入关键字"){
		searchText.value = "";
		searchText.style.color = "#000";
	}
}
function searchOnblur(obj){
	var searchText = _id("searchText");
	if(searchText.value == ""){
		searchText.value = "请输入关键字";
		searchText.style.color = "#666";
		return false;
	}
	if(searchText.value == "请输入关键字"){
		return false;
	}
	return true;
}

//提交表单
function check(){
	var searchText = searchOnblur(_id("searchText"));
	if(searchText){
		return true;
	}
	alert('搜索框不能为空');
	return false;
}

