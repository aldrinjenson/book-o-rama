let headers = {
  "Content-Type": "application/json",
  "X-API-Key": "YOUR_REST_KEY",
};

fetch("https://api.isbndb.com/book/9781934759486", { headers: headers })
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
