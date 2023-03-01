//<script>

var drawingheight=100;
var drawingwidth=100;
var dh=drawingheight;
var dw=drawingwidth;
var color_raster=[];
//to access a pixel(pixel_row_number*100)+pixel_col_number.....PS...only works with strings//


function doc(x){document.write(x);}
function docId(id){return document.getElementById(id);}
function color_id(id,clr){docId(id).style.background=clr;}

function drawline(x1,y1,x2,y2,clr){
    if((x1==x2)&& (y1==y2)){   }/*dot*/
    if((x1==x2)&& (y2>y1)){    }/*pos inf grad*/
    if((x2>x1) && (y2>y1)){    }/*pos grad*/
    if((x1<x2) && (y1==y2)){   }/*zero grad*/
    if((x1<x2) && (y1>y2)){    }/*neg grad*/
    if((x1==x2)&& (y1>y2)){    }/*neg inf grad*/
    if((x1>x2) && (y1>y2)){    }/*another neg grad*/
    if((x1>x2) && (y1==y2)){   }/*another zero grad*/
    if((x1>x2) && (y2>y1)){    }/*another neg grad*/
    
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


