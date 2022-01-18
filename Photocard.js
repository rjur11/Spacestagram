export default class Photocard {
  constructor({ url, title, date, explanation }) {
    this.url = url;
    this.title = title;
    this.date = date;
    this.explanation = explanation;
    this.liked = false;
  }

  toggleLike() {
    this.liked = !this.liked;
  }

  #createImg() {
    const img = document.createElement("img");
    img.src = this.url;
    img.alt = this.title;
    return img;
  }

  #createTitleBar() {
    const titleBar = document.createElement("h2");
    titleBar.innerText = `${this.title} - ${this.date}`;
    return titleBar;
  }

  #createDescription() {
    const description = document.createElement("p");
    description.innerText = this.explanation;
    return description;
  }

  #createLikeButton() {
    const likeButton = document.createElement("button");
    likeButton.innerText = this.liked ? "Unlike" : "Like";
    likeButton.addEventListener("click", () => {
      this.toggleLike();
      likeButton.innerText = this.liked ? "Unlike" : "Like";
    });
    return likeButton;
  }

  getElement() {
    const article = document.createElement("article");
    article.classList.add("photo-card");
    article.appendChild(this.#createImg());
    article.appendChild(this.#createTitleBar());
    article.appendChild(this.#createDescription());
    article.appendChild(this.#createLikeButton());
    return article;
  }
}
