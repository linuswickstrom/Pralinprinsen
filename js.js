// följande kod skapar den dropdownmeny som finns i nav:en med med namnet "varumärken"

var state = 0;

function myFunction() {
  if (state == 0) {
    document.getElementById("myDropdown").style.display = "block";
    state = 1;
  } else {
    document.getElementById("myDropdown").style.display = "none";
    state = 0;
  }
}

window.onclick = function(event) {if
(!event.target.matches('.dropdown')) {
  var dropdowns = document.getElementsByClassName("dropdown");
  var i;
  for(i = 0; i <dropdowns.length; i++) {
    var openDropdown = dropdowns [i];
    if (openDropdown.classlist.contains('show')) {
      openDropdown.classlist.remove('show');
      }
    }
  }
}
