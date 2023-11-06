const cookieBtnElement = document.querySelector(".js-cookie-btn");
const cookieCounterElement = document.querySelector(".js-cookie-counter");
const cookieCpsCounterElement = document.querySelector(".js-cps-counter");
const resetBtnElement = document.querySelector(".js-reset-btn");
const hiddenElements = document.querySelectorAll(".u-hidden");

const init = (game) => {
  const onCookieClick = () => {
    game.addCookie(1);
  };
  const onResetClick = () => {
    game.setCookieCount(0);
  };
  const render = (event) => {
    hiddenElements.forEach((element) => {
      element.classList.toggle("u-hidden", false);
    });
    cookieCounterElement.innerHTML = game.cookieCount;
    cookieCpsCounterElement.innerHTML = `${game.cookiePerSecond} cookies per second`;
  };
  cookieBtnElement.addEventListener("click", onCookieClick);
  resetBtnElement.addEventListener("click", onResetClick);

  game.addEventListener("change", render);

  render();
  return {};
};

export default init;
