const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// async await
const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke ? data.joke : "Something went wrong!!!";
  } catch (error) {
    console.log(`The error is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
