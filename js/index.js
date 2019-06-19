function locateAt(e){  
    e =  document.getElementById(e);/*以id命名的锚点*/  
    y = e.offsetTop;   
    while(e=e.offsetParent){
		window.alert(e.innerHTML);
		y += e.offsetTop;
}  
    /*y-=97;*//*悬浮菜单的高度*/  
    window.scrollTo(0,y);  
}

function locateFoot(e){  
    e =  document.getElementById(e);/*以id命名的锚点*/  
    y = e.offsetTop;   
    while(e=e.offsetParent){
		window.alert("坐稳哦，老司机准备开车了！！！");
		y += e.offsetTop;
		div=document.getElementById("section");
		div.style.height=5000+"px";
		div.style.backgroundImage="url(./pic/train1.gif)";
        div.style.backgroundRepeat="repeat-y";
		div.style.backgroundPosition="center";
        $("html, body").animate({
            scrollTop: y+ 5000 + "px"
        }, 20000);
	
}
    div1=document.getElementById("foot");
	div1.style.backgroundImage="url(./pic/gls.jpg)";
	
	img=document.getElementById("gls");
	img.src="./pic/gls2.png"

	setTimeout( function(){window.alert("精神病医院已到站，请各位患者快步下车！单程列车概不返回。")}, 13 * 1000 )
  

}	
	
	
	

 