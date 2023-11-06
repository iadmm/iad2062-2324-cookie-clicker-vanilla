const initGame = (items) => {
  let dispatcher = new EventTarget();
  let cookieCount = Number(localStorage.getItem("cookies") || 0);
  let cookiePerSecond = 1;
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
    addCookie(cookiePerSecond);
  };

  setInterval(incrementCookie, 1000);

  return {
    shopItems,
    get cookieCount() {
      return cookieCount;
    },
    get cookiePerSecond() {
      return cookiePerSecond;
    },
    addCookie,
    setCookieCount,
    addEventListener(eventName, callback) {
      dispatcher.addEventListener(eventName, callback);
    },
  };
};

export default initGame;
