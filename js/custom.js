document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(header) {
    header.addEventListener('click', function() {
      window.location.hash = this.id;
    });
  });

var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
full_page[0].style.background = "transparent";
}
  