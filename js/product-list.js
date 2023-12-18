
let productdiv = document.querySelector(".product-items-container");
let categorylist = document.querySelector(".category");







let rawproduct = async () => {
  let product = await fetch("https://fakestoreapi.com/products");
  let finalproduct = await product.json();
  console.log(finalproduct);
  productdiv.innerHTML = "";
  finalproduct.forEach((element) => {
    productdiv.innerHTML += `
            <div class="product-div">
                <img src=${element.image} alt="">
                <span>${element.title}</span>
                <div class="rating-price">
                    <div class="rating">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                  
                    <div class="product-div-price">
                        ${element.price + " Rs"}
                    </div>
                </div>
              </div>`;
  });
};

rawproduct();
