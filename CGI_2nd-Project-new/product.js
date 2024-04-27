// var role = JSON.parse(localStorage.getItem("user"));
var userType = JSON.parse(localStorage.getItem("acc"));


const acctype = document.getElementById("authorizeto");
// // const user = document.getElementById("usertype");

acctype.innerHTML = userType;
// // user.innerHTML = userType;


const productdetails = parsedData.productsPage.products;
console.log(productdetails);
function createTable() {
  const tableBody = document.querySelector('#productTable tbody');

  productdetails.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td ><input type="checkbox"></td>
          <td>${product.name}</td>
          <td>${product.unitSold}</td>
          <td>${product.stock}</td>
          <td>${product.expireDate}</td>
          <td class="deleteIcon">
          <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a></td>
          
          `;
      
      tableBody.appendChild(row);
  })

}
createTable();

const categoryDetails = parsedData.productsPage.products;
console.log(categoryDetails);
function createCategoryTable() {

  const tblBody = document.querySelector('#categoryTable tbody');

  categoryDetails.forEach(category => {
      const rows = document.createElement('tr');
      rows.innerHTML = `
          <td>${category.name}</td>
          <td class="deleteIcon"><a href="#" class="tm-product-delete-link">
          <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a></td>
          `;
      
          tblBody.appendChild(rows);
  })

}
createCategoryTable();

// For add a new product
const addNewProduct = document.getElementById("new-product");

addNewProduct.addEventListener("click", function() {
  showNewProductPage();
});

function showNewProductPage(){
  window.location.href = 'add-new-product.html';
}

// Deletion of Products 
const DeleteEle = document.getElementById("delete-product");



// Add new Category
const newCategoryEle = document.getElementById("new-category");