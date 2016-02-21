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


function readcsv() {
  $.ajax({
    url: "doy2.csv",
    success: function (csv) {
      var data = $.csv.toObjects(csv),
          select = $('#home-street'),
          streetToDOYMap = data.reduce(function(previousValue, currentValue, currentIndex, array) {
            if (!previousValue[currentValue['ΟΔΟΣ']]) {
              previousValue[currentValue['ΟΔΟΣ']] = [];
              previousValue[currentValue['ΟΔΟΣ']].push(currentValue['Δ.Ο.Υ.']);
            } else{
              previousValue[currentValue['ΟΔΟΣ']].push(currentValue['Δ.Ο.Υ.']);
            }
            return previousValue;
          } );

      for (var key in streetToDOYMap) {
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        select.append(opt);
      }
      select.chosen();
    },
    dataType: "text",
    complete: function(data) {
    }
  });
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
