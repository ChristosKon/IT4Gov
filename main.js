

function myFunction(x) {
  existing = typeof existing !== 'undefined' ? existing : 1;
  //alert(x + "+" + existing);
  document.getElementById(existing).style.display = 'none';
  document.getElementById(existing+"-map").style.display = 'none';
  document.getElementById(x).style.display = 'block';
  document.getElementById(x+"-map").style.display = 'block';
  existing = x;
}


function submitlocForm() {
  var home_loc= document.getElementById('home-loc').value;
  var home_street= document.getElementById('home-street').value;
  var work_loc= document.getElementById('work-loc').value;

  localStorage.setItem("home-loc", home_loc);
  localStorage.setItem("home-street", home_street);
  localStorage.setItem("work-loc", work_loc);

  return true;
}

function readloc(){
  var x = localStorage.getItem("doy");
  document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=ΔΟΥ+"+x+"&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
}

function addoptions() {

}

function findaddress() {
  var address = document.getElementById("road-name").value.toUpperCase(),
      select = $('#home-street'),
      data = window.CSVTable,
      results = $("#address-results"),
      contents = '';


  for (var i = 0, l = data.length; i < l; i++) {
    if (data[i]['ΟΔΟΣ'] === address) {
      contents += '<option value="' + data[i]['Δ.Ο.Υ.'] + '">' + data[i]['ΟΔΟΣ'] + ' ' + data[i]['ΠΕΡΙΟΧΗ'] + ' ' + data[i]['Δ.Ο.Υ.'] + '</option><br />';
    }
  }
  results.html(contents);

 // results.chosen();
}

/*  var y = localStorage.getItem("home-street");
      var matchedRow;
      for (var i = 0, l = data.length; i < l; i++) {
        if (data[i]['ΟΔΟΣ'] === y) {
          matchedRow = data[i];
          data[i]['Δ.Ο.Υ'] = document.setItem("doy", doy);
          break;
        }
      }
*/
