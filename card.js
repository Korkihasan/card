
 $(function(){
    $(".onlynumber").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      
       return false;
     }
    });
 });
 
 
 
  document.getElementById("card-mm").addEventListener("keyup", myFunction4);
    var d = document.getElementById("mm-label")
    function myFunction4(event) {d.textContent=event.target.value;}
 
    document.getElementById("card-yy").addEventListener("keyup", myFunction3);
    var c = document.getElementById("yy-label")
    function myFunction3(event) {c.textContent=event.target.value;}
 
 
    document.getElementById("card-cvc").addEventListener("keyup", myFunction2);
    var b = document.getElementById("cvc-label")
    function myFunction2(event) {b.textContent=event.target.value;}
    
    document.getElementById("card-number").addEventListener("keyup", myFunction1);
    var a = document.getElementById("iban-label")
    function myFunction1(event) {a.textContent=event.target.value;}
 
 
    document.getElementById("card-name").addEventListener("keyup", myFunction);
    var result = document.getElementById("name-label")
    function myFunction(event) {result.textContent=event.target.value;}
 