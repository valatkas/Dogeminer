var preLoad = {
  minebutton: null,
  balance: null,
  dogecoin: 0,
  dogecoinfall: null,
  header: null,
  items: ["dogeminer", "dogeescavator", "dogefactory", "dogescientist"],
  multipliers: [1, 1, 1, 1, 1],
  itemprices: [30, 200, 1000, 10000],
  itemquantity: [0, 0, 0, 0],
  upgrades: ["upgrade1", "upgrade2", "upgrade3", "upgrade4", "upgrade5"],
  upgradeprices: [2000, 5000, 10000, 20000, 50000],
  dogepersecond: 0,
  totalspent: 0,
  newsarr: [
    "Dogecoin hits $1. Investors are cheering!",
    "Local florida 14 year old became a doge millionaire.",
    "Elon Musk to send dogecoin to Mars.",
    "Rumors say that dogecoin was created by Elon Musk.",
    "Largest dogecoin mine in china raided last week, news say.",
    "Is dogecoin worth your time? Absolutely!",
    "Dogecoin confirmed as an official currency of the US.",
    "School teacher finds old dogecoin wallet with $100,000, sources say.",
    "Binance buys over 500 million worth of dogecoin. Price surges.",
    "Dogecoin price falls to $0.11. Time to purchase more?",
    "Amazon now accepts Dogecoin as one of its official payment options.",
    "Dogecoin hits 1 billion market cap.",
  ],
  workers: null,

  begin: function () {
    // GET ELEMENTS
    preLoad.minebutton = document.getElementById("minebutton");
    preLoad.balance = document.getElementById("balance");
    preLoad.header = document.getElementById("header");
    preLoad.workers = document.getElementById("workers");

    // ADD EVENT LISTENER TO MINE BUTTON
    preLoad.minebutton.addEventListener("click", mine);

    getItems();
  },
};

function getItems() {
  // GET MARKETPLACE ITEMS AND ADD EVENT LISTENERS
  for (let i = 0; i < preLoad.items.length; i++) {
    item = document.getElementById(preLoad.items[i]);
    item.addEventListener("click", handleBuy);
  }
  // GET UPGRADE ITEMS AND ADD EVENT LISTENERS
  for (let i = 0; i < preLoad.upgrades.length; i++) {
    item = document.getElementById(preLoad.upgrades[i]);
    item.addEventListener("click", handleBuy);
  }
}
function mine() {
  // HANDLE USER DOGE MINING
  preLoad.dogecoin += preLoad.multipliers[0];
  handleDisplay();
  dogefall = document.getElementById("mine-div");

  // DISPLAY FALLING DOGE COINS
  const dogefallimg = document.createElement("img");
  dogefallimg.setAttribute(
    "src",
    "http://127.0.0.1/myfirst/PROGRAMAVIMAS/dogeminer/img/dogecoin.png"
  );
  dogefallimg.classList.add("dogecoinfall");
  dogefall.appendChild(dogefallimg);

  setTimeout(function () {
    dogefallimg.remove();
  }, 8000);
}

function printNews() {
  // DISPLAY RANDOM NEWS ARTICLE FROM ARRAY
  setTimeout(function () {
    preLoad.header.innerHTML = "";
    let num = Math.floor(Math.random() * preLoad.newsarr.length);
    let text = preLoad.newsarr[num];

    let newsText = document.createElement("div");
    newsText.setAttribute("class", "text");
    newsText.innerText = text;

    preLoad.header.appendChild(newsText);
    printNews();
  }, 5000);
}

function handleBuy() {
  // HANDLE PURCHASES
  switch (this.id) {
    // DOGE MINER
    case "dogeminer":
      if (preLoad.dogecoin >= preLoad.itemprices[0]) {
        preLoad.itemquantity[0] += 1;

        preLoad.dogecoin = preLoad.dogecoin - preLoad.itemprices[0];
        preLoad.totalspent += preLoad.itemprices[0];
        preLoad.itemprices[0] += preLoad.itemquantity[0] * 4;

        const miner = document.createElement("img");
        miner.setAttribute(
          "src",
          "http://127.0.0.1/myfirst/PROGRAMAVIMAS/dogeminer/img/dogeminer.png"
        );
        miner.style.width = "60px";
        miner.style.height = "auto";
        miner.style.padding = "0";
        miner.classList.add("miner");

        preLoad.workers.appendChild(miner);
      } else {
      }
      break;

    // DOGE ESCAVATOR
    case "dogeescavator":
      if (preLoad.dogecoin >= preLoad.itemprices[1]) {
        preLoad.itemquantity[1] += 1;

        preLoad.dogecoin = preLoad.dogecoin - preLoad.itemprices[1];
        preLoad.totalspent += preLoad.itemprices[1];
        preLoad.itemprices[1] += preLoad.itemquantity[1] * 50;

        const escavator = document.createElement("img");
        escavator.setAttribute(
          "src",
          "http://127.0.0.1/myfirst/PROGRAMAVIMAS/dogeminer/img/dogeescavator.png"
        );
        escavator.style.width = "60px";
        escavator.style.height = "auto";
        escavator.style.padding = "0";
        escavator.classList.add("escavator");

        preLoad.workers.appendChild(escavator);
      } else {
      }
      break;

    // DOGE FACTORY
    case "dogefactory":
      if (preLoad.dogecoin >= preLoad.itemprices[2]) {
        preLoad.itemquantity[2] += 1;

        preLoad.dogecoin = preLoad.dogecoin - preLoad.itemprices[2];
        preLoad.totalspent += preLoad.itemprices[2];
        preLoad.itemprices[2] += preLoad.itemquantity[2] * 200;

        const factory = document.createElement("img");
        factory.setAttribute(
          "src",
          "http://127.0.0.1/myfirst/PROGRAMAVIMAS/dogeminer/img/dogefactory.png"
        );
        factory.style.width = "90px";
        factory.style.height = "auto";
        factory.style.padding = "0";
        factory.classList.add("factory");

        preLoad.workers.appendChild(factory);
      } else {
      }
      break;

    // DOGE SCIENTIST
    case "dogescientist":
      if (preLoad.dogecoin >= preLoad.itemprices[3]) {
        preLoad.itemquantity[3] += 1;

        preLoad.dogecoin = preLoad.dogecoin - preLoad.itemprices[3];
        preLoad.totalspent += preLoad.itemprices[3];
        preLoad.itemprices[3] += preLoad.itemquantity[3] * 5000;

        const scientist = document.createElement("img");
        scientist.setAttribute(
          "src",
          "http://127.0.0.1/myfirst/PROGRAMAVIMAS/dogeminer/img/dogescientist.png"
        );
        scientist.style.width = "90px";
        scientist.style.height = "auto";
        scientist.style.padding = "0";
        scientist.classList.add("scientist");

        preLoad.workers.appendChild(scientist);
      } else {
      }
      break;

    // UPGRADE 1
    case "upgrade1":
      if (preLoad.dogecoin >= preLoad.upgradeprices[0]) {
        preLoad.dogecoin = preLoad.dogecoin - preLoad.upgradeprices[0];
        preLoad.totalspent += preLoad.upgradeprices[0];

        preLoad.multipliers[0] = 2;

        upgrade1price.style.display = "none";
        upgrade1.style.display = "none";
      } else {
      }
      break;

    // UPGRADE 2
    case "upgrade2":
      if (preLoad.dogecoin >= preLoad.upgradeprices[1]) {
        preLoad.dogecoin = preLoad.dogecoin - preLoad.upgradeprices[1];
        preLoad.totalspent += preLoad.upgradeprices[1];

        preLoad.multipliers[1] = 2;

        upgrade2price.style.display = "none";
        upgrade2.style.display = "none";
      } else {
      }
      break;

    // UPGRADE 3
    case "upgrade3":
      if (preLoad.dogecoin >= preLoad.upgradeprices[2]) {
        preLoad.dogecoin = preLoad.dogecoin - preLoad.upgradeprices[2];
        preLoad.totalspent += preLoad.upgradeprices[2];

        preLoad.multipliers[2] = 2;

        upgrade3price.style.display = "none";
        upgrade3.style.display = "none";
      } else {
      }
      break;

    // UPGRADE 4
    case "upgrade4":
      if (preLoad.dogecoin >= preLoad.upgradeprices[3]) {
        preLoad.dogecoin = preLoad.dogecoin - preLoad.upgradeprices[3];
        preLoad.totalspent += preLoad.upgradeprices[3];

        preLoad.multipliers[3] = 2;

        upgrade4price.style.display = "none";
        upgrade4.style.display = "none";
      } else {
      }
      break;

    // UPGRADE 5
    case "upgrade5":
      if (preLoad.dogecoin >= preLoad.upgradeprices[4]) {
        preLoad.dogecoin = preLoad.dogecoin - preLoad.upgradeprices[4];
        preLoad.totalspent += preLoad.upgradeprices[4];

        preLoad.multipliers[4] = 2;

        upgrade5price.style.display = "none";
        upgrade5.style.display = "none";
      } else {
      }
      break;
  }

  handleDisplay();
}

function doMining() {
  // HANDLE WORKER MINING
  setTimeout(function () {
    preLoad.dogepersecond =
      1 * preLoad.itemquantity[0] * preLoad.multipliers[1] +
      2.5 * preLoad.itemquantity[1] * preLoad.multipliers[2] +
      7.5 * preLoad.itemquantity[2] * preLoad.multipliers[3] +
      15 * preLoad.itemquantity[3] * preLoad.multipliers[4];
    preLoad.dogecoin += preLoad.dogepersecond;
    handleDisplay();
    doMining();
  }, 1000);
}

function handleDisplay() {
  //GET STATISTICS TAB
  dogepersecond = document.getElementById("dogepersecond");
  totalspent = document.getElementById("totalspent");

  // UPDATE STATISTICS TAB
  preLoad.balance.innerHTML = preLoad.dogecoin;
  dogepersecond.innerHTML = `Doge per second: ${preLoad.dogepersecond}`;
  totalspent.innerHTML = `Total doge spent: ${preLoad.totalspent}`;

  // UPDATE MARKETPLACE TAB
  preLoad.items.forEach((name) => {
    namequantity = document.getElementById(`${name}quantity`);
    nameprice = document.getElementById(`${name}price`);

    if (preLoad.dogecoin >= preLoad.itemprices[preLoad.items.indexOf(name)]) {
      document.getElementById(name).style.opacity = "1";
    } else {
      document.getElementById(name).style.opacity = "0.5";
    }

    namequantity.innerHTML = preLoad.itemquantity[preLoad.items.indexOf(name)];
    nameprice.innerHTML = `${
      preLoad.itemprices[preLoad.items.indexOf(name)]
    } doge`;
  });

  // UPDATE UPGRADES TAB
  preLoad.upgrades.forEach((name) => {
    if (
      preLoad.dogecoin >= preLoad.upgradeprices[preLoad.upgrades.indexOf(name)]
    ) {
      document.getElementById(name).style.opacity = "1";
    } else {
      document.getElementById(name).style.opacity = "0.5";
    }
  });
}

window.addEventListener("load", preLoad.begin);
window.addEventListener("load", handleDisplay);

printNews();

doMining();
