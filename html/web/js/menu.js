oM=new makeCM("oM"); oM.resizeCheck=1; oM.rows=1;  oM.onlineRoot="/";oM.offlineRoot=""; oM.pxBetween =0; 
oM.fillImg="cm_fill.gif"; oM.fromTop=42; oM.fromLeft=5; oM.wait=300; oM.zIndex=400;
oM.useBar=0; oM.barWidth="100%"; oM.barHeight="menu"; oM.barX=0;oM.barY="menu"; oM.barClass="clBar";
oM.barBorderX=0; oM.barBorderY=0;oM.openOnClick=1;oM.closeOnClick=0;
oM.level[0]=new cm_makeLevel(70,16,"clT","clTover",0,0,"clB",0,"bottom",0,0,0,0,0);
oM.level[1]=new cm_makeLevel(130,22,"clS","clSover",0,0,"clBS",0,"right",0,2,"../graphics/m_arrow.gif",10,15);
oM.level[2]=new cm_makeLevel(130,20,"clS2","clS2over");
oM.level[3]=new cm_makeLevel(90,20);


oM.makeMenu('m1','',' ��ҳ','home.htm','',36);

oM.makeMenu('m2','','�������󷢲�','','',114);	
/*	oM.makeMenu('m21','m2','������Ŀ¼��','');
		oM.makeMenu('','m21','������Ŀ¼��','release11.htm');
		oM.makeMenu('','m21','������Ŀά��','release12.htm');
		oM.makeMenu('','m21','������Ŀ����','release13.htm');
		oM.makeMenu('','m21','������Ŀ��ѯ','release14.htm');
	oM.makeMenu('m22','m2','���������ѯ','');
		oM.makeMenu('','m22','�������¼��','release21.htm');
		oM.makeMenu('','m22','�������ά��','release22.htm');
		oM.makeMenu('','m22','�����������','release23.htm');
		oM.makeMenu('','m22','���������ѯ','release24.htm');
*/
oM.makeMenu('m3','','�����������','','',88);
/*	oM.makeMenu('m31','m3','����������չʾ','');
		oM.makeMenu('','m31','�������¼��','solution11.htm');
		oM.makeMenu('','m31','�������ά��','solution12.htm');
		oM.makeMenu('','m31','�������չʾ','solution13.htm');
	oM.makeMenu('m32','m3','����������չʾ','');
		oM.makeMenu('','m32','�������¼��','solution21.htm');
		oM.makeMenu('','m32','�������ά��','solution22.htm');
		oM.makeMenu('','m32','�������չʾ','solution23.htm');
	oM.makeMenu('m33','m3','��ҵ�������չʾ','');
		oM.makeMenu('','m33','�������¼��','solution31.htm');
		oM.makeMenu('','m33','�������ά��','solution32.htm');
		oM.makeMenu('','m33','�������չʾ','solution33.htm');
*/
oM.makeMenu('m4','','������ҵ԰��','','',88);
/*	oM.makeMenu('','m4','��ҵ��Ϣ¼��','corp11.htm');
	oM.makeMenu('','m4','��ҵ��Ϣά��','corp12.htm');
	oM.makeMenu('','m4','��ҵ��Ϣ��ѯ','corp13.htm');
*/
oM.makeMenu('m5','','����������̳','','',88);
/*	oM.makeMenu('','m5','ҵ�����','forum11.htm');
	oM.makeMenu('','m5','����֧��','forum12.htm');
	oM.makeMenu('','m5','�ۺ����','forum13.htm');
	oM.makeMenu('','m5','Ͷ������','forum14.htm');
	oM.makeMenu('','m5','�������','forum15.htm');
*/		
oM.makeMenu('m6','','����������','','',75);
/*	oM.makeMenu('','m6','��������Ϣ¼��','supplierapply11.htm');
	oM.makeMenu('','m6','��������Ϣά��','supplierapply12.htm');
	oM.makeMenu('','m6','��������Ϣ����','supplierapply13.htm');
	oM.makeMenu('','m6','��������Ϣ��ѯ','supplierapply14.htm');
*/
oM.makeMenu('m7','','������Ӫ���ݷ���ϵͳ','','',88);
/*	oM.makeMenu('m71','m7','���߼���','');
		oM.makeMenu('','m71','�����ɱ�','calculator11.htm');
		oM.makeMenu('','m71','���з���','calculator12.htm');
		oM.makeMenu('','m71','�ɱ�����','calculator13.htm');
		oM.makeMenu('','m71','�ֽ�������','calculator14.htm');
		oM.makeMenu('','m71','���޷���','calculator15.htm');
	oM.makeMenu('m72','m7','����ά��','');
		oM.makeMenu('','m72','���в���ά��','calculator21.htm');
		oM.makeMenu('','m72','��Ʒ����ά��','calculator22.htm');
*/
oM.makeMenu('m9','','GPS��������','gps.htm','',84,'','','','','','');

oM.makeMenu('m10','','�������ݽӿ�','ciq.htm','',88,'','','','','','');


/*�˵�������
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout)
*/

//var aaleft = "-1";
//oM.menuPlacement=new Array("2"+aaleft,"63"+aaleft,"124"+aaleft,"197"+aaleft,"258"+aaleft,"319"+aaleft,"440"+aaleft,"513"+aaleft,"574"+aaleft,"635"+aaleft,"696"+aaleft,"757"+aaleft,"818"+aaleft,"879"+aaleft,"940"+aaleft);
//oM.menuPlacement=0;
//var aaleft = "-2";
//oM.menuPlacement=new Array("2"+aaleft,"58"+aaleft,"114"+aaleft,"170"+aaleft,"226"+aaleft,"282"+aaleft,"338"+aaleft,"394"+aaleft,"450"+aaleft,"506"+aaleft,"562"+aaleft,"618"+aaleft,"674"+aaleft,"744"+aaleft,"814"+aaleft,"870"+aaleft,"926"+aaleft);
oM.menuPlacement=0;
oM.construct();

