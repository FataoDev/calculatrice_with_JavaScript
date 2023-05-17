const tap = document.querySelectorAll("#button");
const calcul = document.querySelector(".calculation");
const result = document.querySelector("#equals");
const answer = document.querySelector(".answer");
const clear = document.querySelector("#clear");
const append = document.querySelector("#append");
const back = document.querySelector("#back");
const date = document.querySelector("#date");
const ans = document.querySelector("#ans");
let ans_value = 0;

let dat = new Date();
let minute = dat.getMinutes();
let heure = dat.getHours();
date.innerHTML = `${heure} : ${minute}`;

const ajout = 0;
tap.forEach((val) => {
  val.addEventListener("click", () => {
    if (answer.innerHTML != "") {
      const text1 = eval(`${calcul.textContent}`);
      calcul.textContent = text1;
      answer.innerHTML = "";
    }
    calcul.append(val.value);
  });
});

result.addEventListener("click", () => {
  if (calcul.innerHTML === "") {
    answer.innerHTML = 0;
  } else {
    const text = eval(`${calcul.textContent}`);
    answer.innerHTML = text;
    ans_value = eval(`${calcul.textContent}`);
    // if(append=true){
    //     calcul.innerHTML=text;
    // }
  }
});

ans.addEventListener("click", () => {
  calcul.innerHTML = ans_value;
  answer.innerHTML = "";
});

clear.addEventListener("click", () => {
  calcul.innerHTML = "";
  answer.innerHTML = "";
});

// append.addEventListener("click", () => {
//   if (append == true) {
//     append = false;
//   } else append = true;
// });
back.addEventListener("click", () => {
  const calc = calcul.textContent;
  const shortString = calc.substring(0, calc.length - 1);
  console.log(shortString);
  calcul.innerHTML = shortString;
});
