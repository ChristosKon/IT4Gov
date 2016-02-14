function myFunction(x) {
  existing = typeof existing !== 'undefined' ? existing : 1;
  //alert(x + "+" + existing);
  document.getElementById(existing).style.display = 'none';
  document.getElementById(x).style.display = 'block';
  existing = x;
}


function submitlocForm() {
  var home_loc= document.getElementById('home-loc').value;
  var work_loc= document.getElementById('work-loc').value;

  document.cookie = 'home-loc='+home_loc+'; path=/' ;
  document.cookie = 'work-loc='+work_loc+'; path=/';

  return true;
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function readloc(){
  var x = readCookie("home-loc");
  if (x == "ΖΩΓΡΑΦΟΥ") {
    document.getElementById('doy').textContent = "Καζαντζάκη 52";
  }
  else if (x == "ΗΛΙΟΥΠΟΛΗ"){
    document.getElementById('doy').textContent = "JD house";
  }
  else
    alert("no location");
}
