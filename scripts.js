const photoCardSection = document.querySelector(".daily-cards");
const url =
  "https://api.nasa.gov/planetary/apod?api_key=9tsSuySinTw0RdfxvfFvFnm7FqddSZcguRZ3LLwN&count=2";

const fetchData = fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((item) => {
      const photoCard = createPhotoCard(
        item.url,
        item.title,
        item.date,
        item.explanation
      );
      photoCardSection.appendChild(photoCard);
    });
  })
  .catch((error) => console.log(error));

function createPhotoCard(url, title, date, explanation) {
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
