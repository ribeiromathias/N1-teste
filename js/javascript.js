// Get modal
var modal = document.getElementById("myModal");

// Get botão que abre a modal
var btn = document.getElementById("myBtn");

// Get botão que fecha a modal
var button = document.getElementsByClassName("botaook")[0];

// On Click, abre a modal
btn.onclick = function() {
  modal.style.display = "block";
}

// On Click, fecha a modal
button.onclick = function() {
  modal.style.display = "none";
}

// On Click fora da modal, fecha a modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
}


//Autocomplete
var currentItems = 0;
$(document).ready(function(){
       $(".add-to-cart").click(function() {
           currentItems++;
        $("#badge").text(currentItems);
       });
   });


   function autocomplete(inp, arr) {

    var currentFocus;
    
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
       
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        
        this.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
         
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            
            b = document.createElement("DIV");
        
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
        
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            
            b.addEventListener("click", function(e) {
               
                inp.value = this.getElementsByTagName("input")[0].value;
              
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
   
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          
          currentFocus++;
         
          addActive(x);
        } else if (e.keyCode == 38) { 
      
          currentFocus--;
         
          addActive(x);
        } else if (e.keyCode == 13) {
          
          e.preventDefault();
          if (currentFocus > -1) {
        
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {

      if (!x) return false;
  
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
     
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
     
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
 
  var produtos = ["Mario","Luigi","Princesa Peach","Yoshi","Wario","Waluigi","Princesa Daisy","Birdo/Birdetta","Donkey Kong","Diddy Kong","Pauline","Princesa Rosalina","Toadette","Toadsworth","Toad Azul","Bowser","Bowser Jr.","Blooper","Bob-bomba","Starlow","Shy Guy","Monty Mole",];
  autocomplete(document.getElementById("inputautocomplete"), produtos);
  

}

