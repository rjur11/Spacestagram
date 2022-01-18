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
}
