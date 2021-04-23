$(document).ready( function(){
   // toggler
  var el = document.querySelector('#toggle');
        var ovrlays = document.querySelector('#t_menu');
        el.onclick = function () {
            el.classList.toggle('active');
            ovrlays.classList.toggle('open');
        } 



});
