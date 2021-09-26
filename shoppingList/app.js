const form = document.querySelector("form");
const ullist = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = form.product.value;
  const qty = form.qty.value;
  addListItem(product, qty);
  form.product.value = "";
  form.qty.value = "";
});

const addListItem = (product, qty) => {
  const newItem = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(product);
  newItem.append(bTag);
  newItem.append(` -${qty}`);
  ullist.append(newItem);
};
