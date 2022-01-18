import { expect } from "chai";
import { JSDOM } from "jsdom";
import Photocard from "../Photocard.js";

describe("Photocard", () => {
  let data;

  beforeEach(() => {
    data = {
      url: "http://spacestagramimg.com/",
      title: "Tester Title",
      date: "2020-05-20",
      explanation: "This is a wonderful image of space.",
    };
    global.dom = new JSDOM("<!doctype html><html><body></body></html>");
    global.window = dom.window;
    global.document = dom.window.document;
  });

  it("Should be a function", () => {
    expect(Photocard).to.be.a("function");
  });
  it("Should create a new instance of a photocard", () => {
    const card = new Photocard(data);
    expect(card).to.be.an.instanceOf(Photocard);
  });
  it("Should create a photocard that includes a url, title, date, explanation and liked property", () => {
    const card = new Photocard(data);
    expect(card.url).to.equal("http://spacestagramimg.com/");
    expect(card.title).to.equal("Tester Title");
    expect(card.date).to.equal("2020-05-20");
    expect(card.explanation).to.equal("This is a wonderful image of space.");
    expect(card.liked).to.equal(false);
  });
  it("Should be able to toggle likes", () => {
    const card = new Photocard(data);
    card.toggleLike();
    expect(card.liked).to.equal(true);
    card.toggleLike();
    expect(card.liked).to.equal(false);
  });
  it("Should render a photocard properly", () => {
    const card = new Photocard(data);
    const article = card.getElement();
    expect(article.nodeName).to.equal("ARTICLE");
    expect(article.classList.contains("photo-card")).to.equal(true);
    expect(article.children.length).to.equal(4);
    expect(article.children[0].nodeName).to.equal("IMG");
    expect(article.children[0].src).to.equal("http://spacestagramimg.com/");
    expect(article.children[0].alt).to.equal("Tester Title");
    expect(article.children[1].nodeName).to.equal("H2");
    expect(article.children[1].innerText).to.equal("Tester Title - 2020-05-20");
    expect(article.children[2].nodeName).to.equal("P");
    expect(article.children[2].innerText).to.equal(
      "This is a wonderful image of space."
    );
    expect(article.children[3].nodeName).to.equal("BUTTON");
    expect(article.children[3].innerText).to.equal("Like");
  });
  it("Should handle Like button clicks", () => {
    const card = new Photocard(data);
    const article = card.getElement();
    expect(article.children[3].nodeName).to.equal("BUTTON");
    expect(article.children[3].innerText).to.equal("Like");
    article.children[3].click();
    expect(article.children[3].innerText).to.equal("Unlike");
    expect(card.liked).to.equal(true);
    article.children[3].click();
    expect(article.children[3].innerText).to.equal("Like");
    expect(card.liked).to.equal(false);
  });
});
