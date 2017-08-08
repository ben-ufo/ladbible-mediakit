// <!-- JSwow  activation -->
  <script>
  new WOW().init();
  </script>
// <!-- Lazyload activation -->
<script>
$(document).ready(function() {
$("img").unveil(1000);
});
</script>

//  JAVASCRIPT SMOOTH SCROLLING


 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
