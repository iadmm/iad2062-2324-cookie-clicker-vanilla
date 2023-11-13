const initGame = (items) => {
  let dispatcher = new EventTarget();
  let cookieCount = Number(localStorage.getItem("cookies") || 0);
  let bonusCount = Number(localStorage.getItem("bonus") || 0);
  let cookiePerSecond = 0;
  let shopItems = items;

  const addCookie = (count) => {
    setCookieCount((cookieCount += count));
  };

  const setCookieCount = (count) => {
    cookieCount = count;
    localStorage.setItem("cookies", cookieCount);
    dispatcher.dispatchEvent(new CustomEvent("change", { detail: count }));
  };

  const incrementCookie = () => {
    addCookie(cookiePerSecond + bonusCount);
  };

  const purchases = [];

  const addBonus = (bonus) => {
    setBonusCount((bonusCount += bonus));
  };

  const setBonusCount = (bonus) => {
    bonusCount = bonus;
    localStorage.setItem("bonus", bonusCount);
    dispatcher.dispatchEvent(new CustomEvent("change", { detail: bonus }));
  };

  setInterval(incrementCookie, 1000);

  return {
    shopItems,
    purchases,
    get bonusCount() {
      return bonusCount;
    },
    get cookieCount() {
      return cookieCount;
    },
    get cookiePerSecond() {
      return cookiePerSecond;
    },
    addCookie,
    addBonus,
    setCookieCount,
    setBonusCount,
    addEventListener(eventName, callback) {
      dispatcher.addEventListener(eventName, callback);
    },
  };
};

export default initGame;
