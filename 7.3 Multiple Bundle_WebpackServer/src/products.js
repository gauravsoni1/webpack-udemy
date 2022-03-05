import products from "./products.json";
import _ from "lodash";

function renderProducts() {
  const el = document.getElementById("main");
  let renderedItems = [];

  _.forEach(products, (item) => {
    let bakeryEl = document.createElement("div");
    bakeryEl.innerHTML = `
    <div class="card-container">
    <div class="card u-clearfix">
      <div class="card-body">
        <span class="card-number card-circle subtle">${item.id}</span>
        <span class="card-author subtle">${item.type}</span>
        <h2 class="card-title">${item.title}</h2>
        <span class="card-description subtle"
          >${item.description}.</span
        >
        <div class="card-read">Read</div>
        <span class="card-tag card-circle subtle">C</span>
      </div>
      <img src="./assets/${item.imageName}" alt="" class="card-media" />
    </div>
    <div class="card-shadow"></div>
  </div>`;
    renderedItems.push(bakeryEl);
  });

  _.forEach(renderedItems, (item) => {
    el.appendChild(item);
  });
}

renderProducts();
