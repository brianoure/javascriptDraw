
<script>
function doc(x){document.write(x);}
function docId(id){return document.getElementById(id);}
function color_id(id,clr){docId(id).style.backgroundColor=clr;}

doc("<table id='mycanvas'>");
for(let r=0;r<100;r++){//for
   doc("<tr>");
   for(let c=0;c<100;c++){//for
       let idstring = "r"+r+"c"+c;
       doc("<td id='"+idstring+"'></td>");
       color_id(idstring,"blue");
   }//for
   doc("</tr>");
}//for
doc("</table>");
docId("mycanvas").style.borderCollapse = "collapse";//eliminate spaces between pixels
</script>
