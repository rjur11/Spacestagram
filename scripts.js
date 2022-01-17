const photoCardSection = document.querySelector(".daily-cards");
const loader = document.querySelector(".rocket-ship");
import { fetchData } from "../apiCalls.js";

window.addEventListener("load", () => {
  fetchData().then((entries) => {
    entries.forEach((entry) => {
      photoCardSection.appendChild(createPhotoCard(entry));
    });
  });
});

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    loader.classList.remove("hidden");
    fetchData().then((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          photoCardSection.appendChild(createPhotoCard(entry));
        });
        loader.classList.add("hidden");
      }, 1000);
    });
  }
});

const createPhotoCard = (entry) => {
  const { url, title, date, explanation } = entry;
  const photoCardArticle = document.createElement("article");
  photoCardArticle.classList.add("photo-card");
  const img = document.createElement("img");
  img.src = url;
  img.alt = title;
  photoCardArticle.appendChild(img);
  const titleBar = document.createElement("h2");
  titleBar.innerText = `${title} - ${date}`;
  photoCardArticle.appendChild(titleBar);
  const description = document.createElement("p");
  description.innerText = explanation;
  photoCardArticle.appendChild(description);
  const likeButton = document.createElement("button");
  likeButton.innerText = "Like";
  likeButton.addEventListener("click", () => {
    toggleLikes(likeButton);
  });
  photoCardArticle.appendChild(likeButton);
  return photoCardArticle;
};

const toggleLikes = (selectedButton) => {
  if (selectedButton.innerText === "Like") {
    selectedButton.innerText = "Unlike";
  } else if (selectedButton.innerText === "Unlike") {
    selectedButton.innerText = "Like";
  }
};
