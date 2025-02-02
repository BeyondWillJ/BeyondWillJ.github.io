document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(header) {
    header.addEventListener('click', function() {
      window.location.hash = this.id;
    });
  });