document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // Validation
  if (age === "" || name === "") {
    alert("Please enter valid details");  // ✔ No dot
    return;
  }

  // Promise logic
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
