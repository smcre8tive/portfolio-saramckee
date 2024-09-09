function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
$('#ParentContainer').scroll(function() { 
    $('#FixedDiv').css('top', $(this).scrollTop());
});