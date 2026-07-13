const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".forms");
const closeBtn = document.querySelector("#close");
const form = document.querySelector("form");
const productCard = document.querySelector(".products");

const productArr = JSON.parse(localStorage.getItem("product")) || [];
// let lsd = JSON.parse(localStorage.getItem("product"));
let updateIndex = null;

let ui = () => {
  productCard.innerHTML = "";
  productArr.forEach((elem) => {
    productCard.innerHTML += ` <div class="product-cards">
                <div class="img">
                    <img src="${elem.image}"
                        alt="">
                </div>
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}</p>
                </div>
                <div class="btns">
                    <button onClick="updateProduct('${elem.productName}')" id="update">update</button>
                    <button onClick="delProduct('${elem.productName}')" id="del">delete</button>
                </div>
            </div>`;
  });
};

ui();

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = e.target[0].value;
  let description = e.target[1].value;
  let price = e.target[2].value;
  let image = e.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image.trim() === ""
  ) {
    alert("please fill all the details");
    return;
  }

  let obj = {
    id: Date.now(),
    productName,
    description,
    price,
    image,
  };

  if (updateIndex !== null) {
    productArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products", JSON.stringify(productArr));
  } else {
    productArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productArr));
  }

  ui();
  form.reset();
  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productArr.find((elem) => elem.productName === name);
  updateIndex = productArr.findIndex((elem) => elem.productName === name);

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

const delProduct = (name) => {
  let index = productArr.findIndex((elem) => elem.productName === name);
  productArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productArr));
  ui();
};
