// JavaScript Document
function checkitemform(){
if(window.document.form1.name.value===""){
window.alert("请输入商品名称！");
document.form1.name.focus();
return false;
}if(document.form1.price.value==""){
window.alert("请输入商品价格！");
document.form1.price.focus();
return false;
}if(document.form1.storage.value==""){
window.alert("请输入商品库存量！");
document.form1.storage.focus();
return false;
}if(document.form1.discount.value==""){
window.alert("请输入商品折扣！");
document.form1.discount.focus();
return false;
}else{
window.location.href="item_list.htm";
} 

}

function checkregform(){
if(document.form1.email.value===""){
window.alert("请输入有效的邮箱地址！");
document.form1.name.focus();
return false;
}if(document.form1.password.value==""){
window.alert("请输入密码！");
document.form1.password.focus();
return false;
}if(document.form1.passwordConfirm.value==""){
window.alert("请再次输入密码！");
document.form1.passwordConfirm.focus();
return false;
}else{
window.location.href="home.htm";
} 
function checkcategoryform(){
if(document.form1.name.value===""){
window.alert("请输入目录名称！");
document.form1.name.focus();
return false;
}else{
window.location.href="category_list.htm";
} 

}

function checkstorageform(){
if(document.form1.storage.value===""){
window.alert("请输入库存量！");
document.form1.storage.focus();
return false;
}else{
window.location.href="storage_list.htm";
} 

}

function checkpriceform(){
if(document.form1.price.value===""){
window.alert("请输入价格！");
document.form1.price.focus();
return false;
}if(document.form1.discount.value===""){
window.alert("请输入库存量！");
document.form1.discount.focus();
return false;
}else{
window.location.href="price_list.htm";
} 

}