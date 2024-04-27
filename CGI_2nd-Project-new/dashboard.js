var role = JSON.parse(localStorage.getItem("user"));
var userType = JSON.parse(localStorage.getItem("acc"));

// Display the usertype in console
console.log("user type: ", userType);

// Display the user's role in console
console.log("role: ", role);

const acctype = document.getElementById("authorizeto");
const user = document.getElementById("usertype");

acctype.innerHTML = userType;
user.innerHTML = userType;

const months = parsedData.dasbhoardPage.latestHits.months;
const latestHits = parsedData.dasbhoardPage.latestHits.latest;
const popularHits = parsedData.dasbhoardPage.latestHits.popular;
const featured = parsedData.dasbhoardPage.latestHits.featured;
console.log(months);

const ctx1 = document.getElementById("myChart").getContext("2d");
var chart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: months,
    datasets: [
      {
        label: "Latest Hits",
        backgroundColor: "rgb(49, 83, 83)",
        borderColor: "rgb(0,204,204)",
        data: latestHits,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Popular Hits",
        backgroundColor: "rgb(95, 41, 53)",
        borderColor: "rgb(255,99,132)",
        data: popularHits,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Featured",
        backgroundColor: "rgb(69, 74, 100)",
        borderColor: "rgb(107, 54, 208)",
        data: featured,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  },

  options: {
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          color: "#FFFFFF",
          stepSize: 10,
        },
        title: {
          display: true,
          text: "Hits",
          color: "#ffffff",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },

    plugins: {
      title: {
        display: true,
        text: "Latest Hits",
        color: "#ffffff",
        padding: {
          top: -2,
          left: 10,
          bottom: 30,
          right: 10
        },
        align: "start",
        font: {
          weight: "bold",
          size: 15,
        },
      },
      legend: {
        labels: {
          color: "#FFFFFF",
          
        },
      },
    },
  },
});

// console.log(Object.keys(chartdata.dasbhoardPage.performance));
const PerformanceColor = Object.keys(parsedData.dasbhoardPage.performance);
const PerformanceVal = Object.values(parsedData.dasbhoardPage.performance);

const ctx2 = document.getElementById("barChart");

var chart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: PerformanceColor,
    datasets: [
      {
        label: "# of Hits",
        backgroundColor: PerformanceColor,
        borderColor: "rgb(0,204,204)",
        data: PerformanceVal,
        borderWidth: 0,
        barPercentage: 0.3,
      },
    ],
  },

  options: {
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
        },
        title: {
          display: true,
          text: "Hits",
          color: "#ffffff",
        },
      },
    },
    elements: {},
    plugins: {
      title: {
        display: true,
        text: "Performance",
        color: "#ffffff",
        padding: {
          top: -2,
          left: 10,
          bottom: 30,
          right: 10
        },
        align: "start",
        font: {
          weight: "bold",
          size: 15,
        },
      },
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

const storeAvailable = Object.values(parsedData.dasbhoardPage.storage);

const ctx3 = document.getElementById("pieChart");

var chart3 = new Chart(ctx3, {
  type: "pie",
  data: {
    labels: [
    "Available Storage (9.150GB)",
      "System Storage (6.500GB)",
      "Used Storage 18.240GB)"
    ],
    datasets: [
      {
        label: "# of Hits",
        backgroundColor: ["red", "Aqua", "lightGreen"],
        borderColor: "white",
        data: storeAvailable,
        borderWidth: 2,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        display: true,
        text: "Storage Information",
        color: "#ffffff",
        padding: {
          top: -2,
          left: 50,
          bottom: 2,
        },
        align: "start",
        font: {
          weight: "bold",
          size: 15,
        },
      },
      legend: {
        labels: {
          color: "#FFFFFF",
          align: "left"
        },
      },
    },
  },
});

const notificationContainer = document.getElementById('notificationContainer');

parsedData.dasbhoardPage.notifications.forEach(notification => {
  const div = document.createElement('div');
  div.className = 'notification';
  div.innerHTML = `<img src="${notification.pic}" alt="User Pic">
    <div>
      <p>${notification.message}</p>
      <small>${notification.time} ago.</small>
    </div>` ;

    const type = notification.message.includes('new product updates') ? 'new' : 'existing';
    div.classList.add(type === 'new' ? 'new-update' : 'default-update');
  
  notificationContainer.appendChild(div);

});

const orders = parsedData.dasbhoardPage.orders;

function createTable() {
  const tableBody = document.querySelector('#orderlist tbody'); // Use the correct ID

  orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>#${order.orderNo}</td>
      <td class="ord">
        <div class="tm-status-circle"><div class="sts"></div>
          <span class = "status">${order.status}</span>
        </div>
      </td>
      <td>${order.operators}</td>
      <td>${order.location}</td>
      <td>${order.distance} km</td>
      <td>${order.startDate}</td>
      <td>${order.deliveryDate}</td>
    `;
    
    tableBody.appendChild(row);

    const statusCircle = row.querySelector('.tm-status-circle div'); // Select within the current row

    console.log(order.status);

    if (order.status === "Moving") {
      statusCircle.className = 'moving';
    } else if (order.status === "Cancelled") {
      statusCircle.className = 'cancelled';
    } else if (order.status === "Pending") {
      statusCircle.className = 'pending';
    }else{
      statusCircle.classList = 'sts';
    }
  });
}

createTable();