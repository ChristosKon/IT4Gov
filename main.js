function myFunction(x) {
  existing = typeof existing !== 'undefined' ? existing : 1;
  //alert(x + "+" + existing);
  document.getElementById(existing).style.display = 'none';
  document.getElementById(x).style.display = 'block';
  existing = x;
}


function submitForm(x,y) {
  alert (x, y);
/*
  var http = new XMLHttpRequest();
  http.open("POST", "<<whereverTheFormIsGoing>>", true);
  http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  var params = "search=" + "yolo"; // probably use document.getElementById(...).value
  http.send(params);
  http.onload = function() {
    alert(http.responseText);
  };
*/
}
