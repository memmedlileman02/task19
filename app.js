// let count = 1;
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   btn.textContent = `Click me ${count++}`;
// });



let count = 1;
const btn = document.getElementById("btn");
let check = true;
btn.addEventListener("click", () => {
  if (check) {
    if (count <= 10) {
      btn.textContent = `Click me ${count}`;
      count++;
    } else {
      check = false;
      count = 9;
    }
  } else {
    if (count >= 1) {
      btn.textContent = `Click me ${count}`;
      count--;
    } else {
      check = true;
      count = 1;
    }
  }
});



