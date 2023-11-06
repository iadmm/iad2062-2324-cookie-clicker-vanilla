const shopItemTemplate = document.querySelector(".js-shop-item-tpl");
const shopListElement = document.querySelector(".js-shop-list");

const init = (game) => {
  const onShopItemClick = (event) => {
    const shopItem = shopItems.find(
      (item) => item.name === event.currentTarget.dataset.name,
    );
    if (shopItem) {
      console.log("clicked on", shopItem);
    }
  };

  game.shopItems.forEach((shopItem) => {
    const cloneEl = shopItemTemplate.content.cloneNode(true);
    cloneEl.querySelector(".js-shop-item-label").innerHTML = shopItem.label;
    cloneEl.querySelector(
      ".js-shop-item-bonus",
    ).innerHTML = `Bonus: ${shopItem.bonus}`;
    cloneEl.querySelector(
      ".js-shop-item-price",
    ).innerHTML = `Shop: ${shopItem.price}`;

    const btnEl = cloneEl.querySelector(".js-shop-item-buy-btn");
    btnEl.setAttribute("data-name", shopItem.name);

    btnEl.addEventListener("click", onShopItemClick);

    shopListElement.appendChild(cloneEl);
  });
};

export default init;
