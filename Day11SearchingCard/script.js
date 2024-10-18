
async function fetchProducts() {
    const url = 'https://fakestoreapi.com/products';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error, "error");
    }
}

const productEL = document.getElementById("container");
const searchInputEL = document.getElementById("searchInput");

const generateProducts = (product) => {
    return ` <div class="product-card">
        <div class="image-container">
          <img src="${product.image}" alt="img"/>
        </div>
        <div class="product-content">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <button class="btn">$${product.price}</button>
        </div>
      </div>`;
}

const renderProducts = (products) => {
    productEL.innerHTML = "";
    products.forEach((product) => {
        productEL.innerHTML += generateProducts(product);
    });
}

async function initialize() {
    const products = await fetchProducts();
  
    const checkTextContain = (text, searchText) => {
        return text.toString().toLowerCase().includes(searchText);
    }

    const filterHandler = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredProducts = products.filter((product) => {
            return (
                checkTextContain(product.description, searchText) ||
                checkTextContain(product.title, searchText) ||
                checkTextContain(product.price, searchText)
            );
        });
        renderProducts(filteredProducts);
    }

    searchInputEL.addEventListener("keyup", filterHandler);
    renderProducts(products);
}

initialize();
