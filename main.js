function myFunction(x) {
  existing = typeof existing !== 'undefined' ? existing : 1;
  //alert(x + "+" + existing);
  document.getElementById(existing).style.display = 'none';
  //document.getElementById(existing+"-map").style.display = 'none';
  document.getElementById(x).style.display = 'block';
  //document.getElementById(x+"-map").style.display = 'block';
  if (x === 2){
    var y = localStorage.getItem("edra");
    if (y === "ΙΔΙΟΚΤΗΤΟ") {
      document.getElementById('edra-yours').style.display = 'block';
    }
    else if (y=== "ΔΩΡΕΑΝ") {
      document.getElementById('edra-dorean').style.display = 'block';
    }
    else if (y === "ΕΝΟΙΚΙΟ") {
      document.getElementById('edra-enoikio').style.display = 'block';
    }
    else {
      document.getElementById('edra-yours').style.display = 'block';
      document.getElementById('edra-dorean').style.display = 'block';
      document.getElementById('edra-enoikio').style.display = 'block';
    }
  }
  existing = x;
}


function submitlocForm() {
  var address_results= document.getElementById('address-results').value;
  var job = document.getElementById('job').value;
  var edra = document.getElementById('edra').value;
  var tk = document.getElementById('tk').value;

  localStorage.setItem("address-results", address_results);
  localStorage.setItem("job", job);
  localStorage.setItem("edra", edra);
  localStorage.setItem("tk", tk);

  if (address_results === "" && job === "none"){
    alert("\n Δεν έχετε επιλέξει: \n\n" + "\t• την οδό της έδρας σας \n" + "\t• το επάγγελμά σας.\n\n" + "Παρακαλώ επιλέξτε για να συνεχίσετε.\n\n");
    return false;
  }
  else if (address_results === ""){
    alert("\n Δεν έχετε επιλέξει: \n\n" + "\t• την οδό της έδρας σας \n\n" + "Παρακαλώ επιλέξτε για να συνεχίσετε.\n\n");
    return false;
  }
  else if (job === "none"){
    alert("\n Δεν έχετε επιλέξει: \n\n" + "\t• τo επάγγελμά σας \n\n" + "Παρακαλώ επιλέξτε για να συνεχίσετε.\n\n");
    return false;
  }
  else {
    return true;
  }
}

function submitomoForm() {
  var edra = document.getElementById('edra').value;
  var etairos= document.getElementById('etairos').value;
  var foreign = document.getElementById('foreign').value;

  localStorage.setItem("edra", edra);
  localStorage.setItem("etairos", etairos);
  localStorage.setItem("foreign", foreign);
}

function readomo() {
  document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=Εμπορικό+και+Βιομηχανικό+Επιμελητήριο+Αθηνών&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
  var x = localStorage.getItem("etairos");
  var y = localStorage.getItem("foreign");

  if (x === "ΟΕ") {
    document.getElementById("but-et").style.display= '';
  }
  else if (x === "ΑΕ") {
    document.getElementById("but-et2").style.display= '';
  }

  if (y === "ΝΑΙ"){
    document.getElementById("for-et").style.display= '';
  }
}

function readloc() {
  var x = localStorage.getItem("address-results");
  document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=ΔΟΥ+"+x+"&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
}

function readtk() {
  var x = localStorage.getItem("tk");
  if(typeof x === 'undefined'){
    window.frames[0].document.body.innerHTML = "Δεν μπορεί να εμφανιστεί ο χάρτης καθώς δεν έχετε επιλέξει ΤΚ της έδρας της εταιρείας στην 'Φόρμα στοιχείων'.";
  }
  else if (x === "15561"){
    document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=ΟΑΕΕ+Αγίας+Παρασκευής&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
  }
  else if (x === "16342") {
    document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=ΟΑΕΕ+ΔΑΦΝΗΣ&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
  }
}

function readepimelitirio() {
  document.getElementById('fred').src="https://www.google.com/maps/embed/v1/search?q=Επαγγελματικό+Επιμελητήριο+Αθηνών&key=AIzaSyAs-ZgYpm0l6PrMBlOpr4q916rERKqzO4I";
}

function normalizeGreek(text) {
  text = text.replace(/Ά|Α|ά/g,'Α');
  text = text.replace(/Έ|Ε|έ/g,'Ε');
  text = text.replace(/Ή|Η|ή/g,'Η');
  text = text.replace(/Ί|Ϊ|Ι|ί|ΐ|ϊ/g,'Ι');
  text = text.replace(/Ό|Ο|ό/g,'Ο');
  text = text.replace(/Ύ|Ϋ|Υ|ύ|ΰ|ϋ/g,'Υ');
  text = text.replace(/Ώ|Ω|ώ/g,'Ω');
  text = text.replace(/Σ|ς/g,'Σ');
  return text;
}

function findaddress() {
  var address = normalizeGreek(document.getElementById("road-name").value.toUpperCase()),
      data = window.CSVTable,
      results = $("#address-results"),
      contents = '';

  for (var i = 0, l = data.length; i < l; i++) {
    if (data[i]['ΟΔΟΣ'] === address) {
      contents += '<option value="' + data[i]['Δ.Ο.Υ.'] + '">' + data[i]['ΟΔΟΣ'] + ', ' + data[i]['ΠΕΡΙΟΧΗ'] + '</option><br />';
    }
  }
  results.html(contents);
  results.chosen({disable_search_threshold: 20, no_results_text: "Δεν βρέθηκαν αποτέλεσματα!"});
  results.trigger("chosen:updated");
  document.getElementById("address-results").style.visibility = 'visible';

}

$(document).ajaxStart(function(){
  $("#loadingDiv").css("visibility", "visible");
});
$(document).ajaxComplete(function(){
  $("#loadingDiv").css("visibility", "hidden");
});


function no_upload(){
  alert ("Για λόγους ασφαλείας του demo δεν λειτουργεί το ανέβασμα αρχείων.");
}

function randnumb(){
  var x = document.getElementById("proto").innerHTML;
  if (x === ""){
    var y = Math.floor((Math.random() * 10000000000) + 1);
    document.getElementById("proto").innerHTML = (y);
  }
}

function myalert(){
  alert("Στάλθηκε!");
  return false;
}
