oM=new makeCM("oM"); oM.resizeCheck=1; oM.rows=1;  oM.onlineRoot="/";oM.offlineRoot=""; oM.pxBetween =0; 
oM.fillImg="cm_fill.gif"; oM.fromTop=42; oM.fromLeft=5; oM.wait=300; oM.zIndex=400;
oM.useBar=0; oM.barWidth="100%"; oM.barHeight="menu"; oM.barX=0;oM.barY="menu"; oM.barClass="clBar";
oM.barBorderX=0; oM.barBorderY=0;oM.openOnClick=1;oM.closeOnClick=0;
oM.level[0]=new cm_makeLevel(70,18,"clT","clTover",0,0,"clB",0,"bottom",0,0,0,0,0);
oM.level[1]=new cm_makeLevel(130,22,"clS","clSover",0,0,"clBS",0,"right",0,2,"../graphics/m_arrow.gif",10,15);
oM.level[2]=new cm_makeLevel(130,20,"clS2","clS2over");
oM.level[3]=new cm_makeLevel(90,20);

/*
oM.makeMenu('m1','',' ����ϵͳ��ҳ','home.htm','',88);
*/
oM.makeMenu('m2','','����ά��','','',66);	
	oM.makeMenu('','m2','��������','newsmng.htm');
	oM.makeMenu('','m2','�޸�����','newsmng1.htm');
	oM.makeMenu('','m2','���Ų�ѯ','newsmng2.htm');
	
oM.makeMenu('m9','','�������󷢲�','','',88);	
	oM.makeMenu('','m9','����������','pjrelease_add.htm');
	oM.makeMenu('','m9','��������ά��','pjrelease_maintain.htm');
	oM.makeMenu('','m9','������������','pjrelease_approve.htm');
	oM.makeMenu('','m9','��������ͣ��','pjrelease_stop.htm');	

oM.makeMenu('m4','','��̳ά��','','',66);
	oM.makeMenu('','m4','��̳ά��','forummng1.htm');

oM.makeMenu('m5','','���߲���������ά��','','',122);
	oM.makeMenu('','m5','���в���ά��','calculatormng.htm');
	oM.makeMenu('','m5','��Ʒ����ά��','calculatormng1.htm');

oM.makeMenu('m6','','�����ֵ�','','',66);
	oM.makeMenu('','m6','����ά��','datamng.htm');
	oM.makeMenu('','m6','��ҵά��','datamng1.htm');
	
oM.makeMenu('m7','','�û�����','','',66);
	oM.makeMenu('m71','m7','����ƽ̨ϵͳ����','');
		oM.makeMenu('','m71','��ҵ��Ϣ����','usermng.htm');	
		oM.makeMenu('','m71','��վ�û�����','webusermng.htm');		
		oM.makeMenu('','m71','��վ�û�����','webuserapprove.htm');				
		oM.makeMenu('','m71','��վ��ɫ����','rolemng.htm');				
	oM.makeMenu('m72','m7','����ƽ̨ϵͳ����','');		
		oM.makeMenu('','m72','����ϵͳ�û�����','adminusermng.htm');
		oM.makeMenu('','m72','����ϵͳ��ɫ����','rolemng.htm');
	
oM.makeMenu('m80','','ƽ̨ϵͳ����','','',85);
	oM.makeMenu('m8','m80','�Ƽ���Ӧ��ά��','rsupplier.htm','');
	oM.makeMenu('m12','m80','�����ϵ��ͼ','tu.htm','');
	oM.makeMenu('m14','m80','��·ά��','lineMtc.htm','');
	oM.makeMenu('m15','m80','���ӿ���ά��','eweeklylist.htm','');	

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

