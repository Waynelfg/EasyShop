
fetch("http://localhost:3000/api/products")
.then((response) => response.json().then((products) => {

    for (let product of products) {
       let productCard = <a href="./product.html?id=${product._id}">
            <article>
             <img src="${product.imageUrl" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
              <p class="productColors">${product.colors}</p>
              <p class="productPrice">${product.price}</p>
              
            </article>
          </a>
    }
    document.querySelector("#items").innerHTML = productCard;
  })
);