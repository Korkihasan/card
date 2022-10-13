
 $(function(){
    $(".onlynumber").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      
       return false;
     }
    });
 });

 $('#card-number').on('input propertychange paste', function() {
  var value = $('#card-number').val();
  var formattedValue = formatCardNumber(value);
  $('#card-number').val(formattedValue);
});

function formatCardNumber(value) {
  var value = value.replace(/\D/g, '');
  var formattedValue;
  var maxLength;
  // american express, 15 digits
  if ((/^3[47]\d{0,13}$/).test(value)) {
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    maxLength = 17;
  } else if((/^3(?:0[0-5]|[68]\d)\d{0,11}$/).test(value)) { // diner's club, 14 digits
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    maxLength = 16;
  } else if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
    maxLength = 19;
  }
  
  $('#card-number').attr('maxlength', maxLength);
  return formattedValue;
}
 
 
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
 