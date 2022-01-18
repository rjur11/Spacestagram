import { expect } from "chai";
import Photocard from "../Photocard.js";

describe("Photocard", () => {
  let data;

  beforeEach(() => {
    data = {
      url: "http://spacestagramimg.com",
      title: "Tester Title",
      date: "2020-05-20",
      explanation: "This is a wonderful image of space.",
    };
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
    expect(card.url).to.equal("http://spacestagramimg.com");
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
});
