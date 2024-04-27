var userType = JSON.parse(localStorage.getItem("acc"));
const acctype = document.getElementById("authorizeto");
acctype.innerHTML = userType;
