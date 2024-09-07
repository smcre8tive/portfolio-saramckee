function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
  $(document).ready(function() {
    // Select all anchor links with href starting with '#'
    $('a[href^="#"]').on('click', function(event) {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store the hash in a variable
      var target = this.hash;
      var $target = $(target);
  
      // Smooth scroll to the target element
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800); // Adjust the duration (in milliseconds) as needed
    });
  });