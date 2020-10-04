
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*booking script*/
function total(){
    let price = 80 ;
    let val1 = document.getElementById("selection").value;
    let val2 = document.getElementById("selection2").value;
    let result = Number(val1) * price*Number(val2) +9 ;
    document.getElementById("result").innerHTML = result;
  }

  function total1(){
    let price = 400 ;
    let val = document.getElementById("selection1").value;
    let result = Number(val) * price +99 ;
    document.getElementById("result1").innerHTML = result;
  } 
 function change(){
   document.getElementsByClass("conf").style.display="none";
   document.getElementsByClass("hiddenButt").style.display="block";
 }
/*print */
function printf()
{
  document.getElementById("bookCon").style.display="block";
  window.print();
}