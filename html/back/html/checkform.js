// JavaScript Document
function checkitemform(){
if(window.document.form1.name.value===""){
window.alert("��������Ʒ���ƣ�");
document.form1.name.focus();
return false;
}if(document.form1.price.value==""){
window.alert("��������Ʒ�۸�");
document.form1.price.focus();
return false;
}if(document.form1.storage.value==""){
window.alert("��������Ʒ�������");
document.form1.storage.focus();
return false;
}if(document.form1.discount.value==""){
window.alert("��������Ʒ�ۿۣ�");
document.form1.discount.focus();
return false;
}else{
window.location.href="item_list.htm";
} 

}

function checkregform(){
if(document.form1.email.value===""){
window.alert("��������Ч�������ַ��");
document.form1.name.focus();
return false;
}if(document.form1.password.value==""){
window.alert("���������룡");
document.form1.password.focus();
return false;
}if(document.form1.passwordConfirm.value==""){
window.alert("���ٴ��������룡");
document.form1.passwordConfirm.focus();
return false;
}else{
window.location.href="home.htm";
} 
function checkcategoryform(){
if(document.form1.name.value===""){
window.alert("������Ŀ¼���ƣ�");
document.form1.name.focus();
return false;
}else{
window.location.href="category_list.htm";
} 

}

function checkstorageform(){
if(document.form1.storage.value===""){
window.alert("������������");
document.form1.storage.focus();
return false;
}else{
window.location.href="storage_list.htm";
} 

}

function checkpriceform(){
if(document.form1.price.value===""){
window.alert("������۸�");
document.form1.price.focus();
return false;
}if(document.form1.discount.value===""){
window.alert("������������");
document.form1.discount.focus();
return false;
}else{
window.location.href="price_list.htm";
} 

}