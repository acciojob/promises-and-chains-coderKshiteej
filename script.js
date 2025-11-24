//your JS code here. If required.
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  // Validation
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise for age check after 4 seconds
  const checkAgePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkAgePromise
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
