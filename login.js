let apiUrl = fetch(
  "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
);

const apiData = "";

apiUrl
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Store data in local storage
    console.log("Api Data -> ", data);
    localStorage.setItem(apiData, JSON.stringify(data));
  })
  .catch((error) => console.error("Error fetching data:", error));

// parsing the data
const storedData = localStorage.getItem(apiData);

if (storedData) {
  const parsedData = JSON.parse(storedData);
  console.log("Data retrieved from local storage: ", parsedData);

  const loginElement = document.getElementById("loginForm");

  loginElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (varifyLoginCredential(username, password)) {
      localStorage.setItem('user', JSON.stringify(username, password));
      showDashboard();
      
    } else {
      alert("Invalid Credentials. Please try again");
    }
  });


  function varifyLoginCredential(username, password) {
    for (const account in parsedData.accountsPage) {
      const accountType = parsedData.accountsPage[account];

      if (username === accountType.email && password === accountType.password) {
        localStorage.setItem('acc', JSON.stringify(account))
        console.log(accountType)
        return true;
      }
    }
    return false;
  }
} else {
  console.log("Data not found in the key : ", storedData);
}

function showDashboard() {
  window.location.href = "dashboard.html";

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
