const photoCardSection = document.querySelector(".daily-cards");
const loader = document.querySelector(".rocket-ship");
const url =
  "https://api.nasa.gov/planetary/apod?api_key=9tsSuySinTw0RdfxvfFvFnm7FqddSZcguRZ3LLwN&count=3";

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
      }, 2000);
    });
  }
});

function fetchData() {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.map((item) => {
        return {
          url: item.url,
          title: item.title,
          date: item.date,
          explanation: item.explanation,
        };
      });
    })
    .catch((error) => console.log(error));
}

function createPhotoCard(entry) {
  const { url, title, date, explanation } = entry;
  const photoCardArticle = document.createElement("article");
  photoCardArticle.classList.add("photo-card");
  const img = document.createElement("img");
  img.src = url;
  img.alt = title;
  photoCardArticle.appendChild(img);
  const titleBar = document.createElement("h3");
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
}

function toggleLikes(selectedButton) {
  if (selectedButton.innerText === "Like") {
    selectedButton.innerText = "Unlike";
  } else if (selectedButton.innerText === "Unlike") {
    selectedButton.innerText = "Like";
  }
}

function showLoader() {
  loader.classList.remove("hidden");
  setTimeout(renderEntries(fetchData), 1000);
}
