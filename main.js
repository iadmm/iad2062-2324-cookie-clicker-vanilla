import "./style.css";

import initShop from "./src/shop.js";
import initClicker from "./src/clicker.js";
import initGame from "./src/game.js";

const init = () => {
  fetch("/shop.json")
    .then((rawResponse) => rawResponse.json())
    .then((shopItems) => {
      const game = initGame(shopItems);
      initClicker(game);
      initShop(game);
    })
    .catch((error) => {
      console.error("Could not fetch shop items");
    });
};

init();
