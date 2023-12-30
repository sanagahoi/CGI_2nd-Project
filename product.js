var apiData = JSON.parse(localStorage.getItem('apiData'));
console.log(apiData);

const productdetails = apiData.productsPage.products;
console.log(productdetails);
function createTable() {
  const tableBody = document.querySelector('#productTable tbody');

  productdetails.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.unitSold}</td>
          <td>${product.stock}</td>
          <td>${product.expireDate}</td>
          
          `;
      
      tableBody.appendChild(row);
  })

}
createTable();