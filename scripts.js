import { fetchData } from "./apiCalls.js";
import Photocard from "./Photocard.js";

const photoCardSection = document.querySelector(".daily-cards");
const loader = document.querySelector(".rocket-ship");

const addEntriesToPage = (entries) => {
  entries
    .map((entry) => new Photocard(entry))
    .forEach((photocard) => {
      photoCardSection.appendChild(photocard.getElement());
    });
};

const createScrollCallback = () => {
  let isRunning = false;
  return () => {
    if (isRunning) {
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 5) {
      isRunning = true;
      loader.classList.remove("hidden");
      fetchData().then((entries) => {
        setTimeout(() => {
          addEntriesToPage(entries);
          isRunning = false;
          loader.classList.add("hidden");
        }, 1000);
      });
    }
  };
};

window.addEventListener("load", () => {
  fetchData().then(addEntriesToPage);
});

window.addEventListener("scroll", createScrollCallback());
