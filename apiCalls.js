const url =
  "https://api.nasa.gov/planetary/apod?api_key=9tsSuySinTw0RdfxvfFvFnm7FqddSZcguRZ3LLwN&count=3";

export const fetchData = () => {
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
};
