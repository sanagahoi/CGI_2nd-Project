const logoutElement = document.getElementById("logout");

  logoutElement.addEventListener("click", function (event) {
     event.preventDefault();
      showLoginPage();
      
    });

    function showLoginPage(){
        window.location.href = "index.html"
    }

    // prevent browser to go back to the login page
document.addEventListener("DOMContentLoaded", function () {
    history.pushState(null, null, document.URL);
  
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    });
  });

  function preventback() {
    window.history.forward();
  }
  setTimeout("preventback()", 0);
  window.onunload = function () {
    null;
  };