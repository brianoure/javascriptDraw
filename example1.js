//<script>

var drawingheight=100;
var drawingwidth =100;
var dh=drawingheight;
var dw=drawingwidth;
var color_raster=[];
//initialize color_raster
for(let pixel=0;pixel<(drawingheight*drawingwidth);pixel++){ color_raster.push("rgb(0,0,0)");}/*for*/
//to access a pixel(pixel_row_number*100)+pixel_col_number.....PS...only works with strings//

function doc(content){document.write(content);}
function docId(id){return document.getElementById(id);}
function color_id(id,clr){docId(id).style.background=clr;}

function drawline(x1,y1,x2,y2,clr){/*drawline*/
    if( ((x1<0)  && (x2<0))   ||  ((x1>dw) && (x2>dw))  ||  ((y1<0)  && (y2<0))  ||   ((y1>dh) && (y2>dh))  ){/*FIRST CHECK*/
        return 0;/*I ain't doin' jack*/
    }/*no draw...outside canvas*/
    let m = 0;
    let c = 0;
    if( ((x2-x1)!=0) && ((y2-y1)!=0) ) {m=(y2-y1)/(x2-x1);}
    if( (x2-x1)==0  ) {m = 1000000000000; }/*error control, safe integer number is 2^53-1*/
    if( (y2-y1)==0  ) {m = 0.0000000001;}/*error control*/
    c = y1-(m*x1);
    if(x1<x2){/*left to right*/
      if(x2>dw){x2=dw;y2=(m*x2)+c;}
      if(x1<0 ){x1=0;y1=c;}
    }/*if*/
    if(x2<x1){/*right to left*/
      if(x1>dw){x1=dw;y1=(m*x1)+c;}
      if(x2<0 ){x2=0;y2=c;}
    }/*if*/
    if(y1<y2){/*down to up*/
      if(y2>dh){y2=dh;x2=(y2-c)/m}
      if(y1<0 ){y1=0;x1=-(c/m);}
    }/*if*/
    if(y2<y1){/*up to down*/
      if(y1>dh){y1=dh;x1=(y1-c)/m}
      if(y2<0 ){y2=0;x2=-(c/m);}
    }/*if*/
    if( ((x1<0)  && (x2<0))  ||  ((x1>dw) && (x2>dw))  ||  ((y1<0)  && (y2<0))   ||  ((y1>dh) && (y2>dh)) ){/*SECOND CHECK*/
      return 0;/*I ain't doin' jack*/
    }/*no draw...outside canvas*/
    if(x2>x1){ 
      for(let x=x1;x<=x2;x++){ let my_y=Math.round((m*x)+c); color_raster[(dw*my_y)+x]=[x,my_y,clr]; }/*for*/
    }/*if*/
    if(x1>x2){
      for(let x=x2;x<=x1;x++){ let my_y=Math.round((m*x)+c); color_raster[(dw*my_y)+x]=[x,my_y,clr]; }/*for*/
    }/*if*/
    return 0;
}/*drawline*/

doc("<table id='mycanvas'>");
for(let r=(drawingheight-1);r>=0;r--){/*origin is at bottom left, you know the normal way*/
   doc("<tr>");
   for(let c=0;c<=(drawingwidth-1);c++){//for
       let idstring = "r"+r+"c"+c;
       doc("<td id='"+idstring+"'></td>");
       color_id(idstring,color_raster[  (dh*r)+c  ]);
   }//for
   doc("</tr>");
}//for
doc("</table>");
docId("mycanvas").style.borderCollapse = "collapse";//eliminate spaces between pixels

//</script>


