// JavaScript Document
//�ж�ÿһλΪ���֣������ַ���Ϊ0
function checkNumStr(msg ){

 var norma = "0123456789";

 msg = trim(msg);

 if((msg.length ==0)||(msg == null)){

  return 0;  

 }

 for (var i=0; i<msg.length; i++) 

 {

  var temp = "" + msg.substring(i, i+1);

  if (norma.indexOf(temp) == "-1")

  {

   return  -1;

  }

 }

 return 1;

}

//�ж��ǲ�������
function isDigit(num) {

    var string="1234567890";

    if (string.indexOf(num) != -1) {

        return true;

    }

    return false;

}

//�ж��ǲ�������
function isInteger(val) {

    for (var i=0; i < val.length; i++) {

    if (!isDigit(val.charAt(i))) { return false; }

    }

    return true;

}
//ȥ��ո�; 
function ltrim(s){ 
return s.replace( /^\s*/, ""); 
} 
//ȥ�ҿո�; 
function rtrim(s){ 
return s.replace( /\s*$/, ""); 
} 
//ȥ���ҿո�; 
function trim(s){ 
return rtrim(ltrim(s)); 
}
