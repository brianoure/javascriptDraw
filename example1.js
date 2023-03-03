//<script>

var drawingheight=100;
var drawingwidth =100;
var dh=drawingheight;
var dw=drawingwidth;
var color_raster=[];
//to access a pixel(pixel_row_number*100)+pixel_col_number.....PS...only works with strings//

function doc(x){document.write(x);}
function docId(id){return document.getElementById(id);}
function color_id(id,clr){docId(id).style.background=clr;}

function drawline(x1,y1,x2,y2,clr){
    let rslt=[];
    if(x2==x1){/*infinite gradient*/
      if(y2>y1){for(let y=y1;y<=y2;y++){rslt.push([x1,y,clr]);}/*for*/}/*if*/
      if(y1>y2){for(let y=y2;y<=y1;y++){rslt.push([x1,y,clr]);}/*for*/}/*if*/
      return rslt;
    }/*infinite gradient*/
    else{
      let m=(y2-y1)/(x2-x1);/*gradient*/let c=(y2-(m*x2));/*constant*/
      let my_y=0;my_y=Math.round(((m*x)+c));/*integers*/
      if(x2>x1){ for(let x=x1;x<=x2;x++){ rslt.push( x,my_y,clr ); }/*for*/} /*if*/
      if(x1>x2){ for(let x=x2;x<=x1;x++){ rslt.push( x,my_y,clr ); }/*for*/} /*if*/
      return rslt;
    }/*else*/
}/*drawline*/


//initialize
for(let pixel=0;pixel<(drawingheight*drawingwidth);pixel++){//for
    //doc("pixel");
    color_raster.push("rgb(0,0,0)");// only works with strings
}//for


doc("<table id='mycanvas'>");
for(let r=0;r<drawingheight;r++){//for
   doc("<tr>");
   for(let c=0;c<drawingwidth;c++){//for
       let idstring = "r"+r+"c"+c;
       doc("<td id='"+idstring+"'></td>");
       color_id(idstring,color_raster[  (dh*r)+c  ]);
   }//for
   doc("</tr>");
}//for
doc("</table>");
docId("mycanvas").style.borderCollapse = "collapse";//eliminate spaces between pixels

//</script>


