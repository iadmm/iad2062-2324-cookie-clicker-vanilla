const shopItemTemplate = document.querySelector(".js-shop-item-tpl");
const shopListElement = document.querySelector(".js-shop-list");

const init = (game) => {
  const onShopItemClick = (event) => {
    const shopItem = game.shopItems.find(
      (item) => item.name === event.currentTarget.dataset.name
    );
    if (shopItem) {
      game.addCookie(-shopItem.price);
      game.purchases.push(shopItem);
      game.addBonus(shopItem.bonus);

      console.log("bonus: " + game.bonusCount);
    }
  };

  function CheckCookies(shopItem, btnEl) {
    let cookies = game.cookieCount;
    let price = shopItem.price;

    if (cookies >= price) {
      btnEl.removeAttribute("disabled");
    } else {
      btnEl.setAttribute("disabled", "disabled");
    }
  }

  game.shopItems.forEach((shopItem) => {
    const cloneEl = shopItemTemplate.content.cloneNode(true);
    cloneEl.querySelector(".js-shop-item-label").innerHTML = shopItem.label;
    cloneEl.querySelector(
      ".js-shop-item-bonus"
    ).innerHTML = `Bonus: ${shopItem.bonus}`;
    cloneEl.querySelector(
      ".js-shop-item-price"
    ).innerHTML = `Shop: ${shopItem.price}`;

    const btnEl = cloneEl.querySelector(".js-shop-item-buy-btn");
    btnEl.setAttribute("data-name", shopItem.name);

    btnEl.addEventListener("click", onShopItemClick);

    setInterval(CheckCookies.bind(this, shopItem, btnEl), 1000);

    shopListElement.appendChild(cloneEl);
  });
};

export default init;
