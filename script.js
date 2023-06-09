// Les fonctions

//  Fonction de remplacement des valeur de calculer du champ de saisie

function Remplace(expression) {
  expression = expression.replace(/²/g, "**2");
  expression = expression.replace(/ln\(/g, "Math.log(");
  expression = expression.replace(/e\(/g, "Math.exp(");
  expression = expression.replace(/sin\(/g, "Math.sin(");
  expression = expression.replace(/cos\(/g, "Math.cos(");
  expression = expression.replace(/tan\(/g, "Math.tan(");
  expression = expression.replace(/sinh\(/g, "Math.sinh(");
  expression = expression.replace(/cosh\(/g, "Math.cosh(");
  expression = expression.replace(/tanh\(/g, "Math.tanh(");
  expression = expression.replace(/\u221A\(/g, "Math.sqrt(");
  expression = expression.replace(/\u221B\(/g, "Math.cbrt(");
  return expression;
}

//  fonction de vérification si la valeur est numérique ou pas
function estNumerique(valeur) {
  const result = /^[-+]?\d*\.?\d+$/;
  return result.test(valeur);
}

//  fonction de vérification si la valeur est opérateur ou pas
function estOperateur(valeur) {
  return (
    valeur === "+" ||
    valeur === "-" ||
    valeur === "*" ||
    valeur === "/" ||
    valeur === "(" ||
    valeur === ")" ||
    valeur === "."
  );
}

//  récuparation des champs par leur ID ou Class
const tap = document.querySelectorAll("#button");
var calcul = document.querySelector(".calculation1");
const result = document.querySelector("#equals");
const answer = document.querySelector(".answer");
const clear = document.querySelector("#clear");
const append = document.querySelector("#append");
const back = document.querySelector("#back");
const date = document.querySelector("#date");
const ans = document.querySelector("#ans");
let ans_value = 0;

function Heure() {
  // recupération de l'heure et la minute actuelle
  let dat = new Date();
  let minute = dat.getMinutes();
  let heure = dat.getHours();

  //  Formattage de l'heure
  heure = heure < 10 ? "0" + heure : heure;
  minute = minute < 10 ? "0" + minute : minute;

  date.innerHTML = heure + '<span class="anim-heur">:</span>' + minute;
}
// mise à jour de l'heure chaque seconde

setInterval(Heure, 1000);
Heure();

tap.forEach((val) => {
  val.addEventListener("click", () => {
    if (answer.innerHTML != "") {
      if (estNumerique(val.value)) {
        calcul.value = "";
        answer.innerHTML = "";
      } else {
        let expression = calcul.value;
        expression = Remplace(expression);
        const text1 = eval(`${expression}`);
        calcul.value = text1;
        answer.innerHTML = "";
      }
    }
    calcul.value += val.value;
  });
});

result.addEventListener("click", () => {
  if (calcul.value === "") {
    answer.innerHTML = 0;
  } else {
    let expression = calcul.value;
    expression = Remplace(expression);
    const text = eval(`${expression}`);
    answer.innerHTML = "= " + text;
    ans_value = text;
    // if(append=true){
    //     calcul.innerHTML=text;
    // }
  }
});

ans.addEventListener("click", () => {
  calcul.value = ans_value;
  answer.innerHTML = "";
});

clear.addEventListener("click", () => {
  calcul.value = "";
  answer.innerHTML = "";
});

// append.addEventListener("click", () => {
//   if (append == true) {
//     append = false;
//   } else append = true;
// });
back.addEventListener("click", () => {
  const calc = calcul.value;
  const shortString = calc.substring(0, calc.length - 1);
  calcul.value = shortString;
});

//  ========================== Evènement du clavier ===========================
window.removeEventListener("load", () => {
  calcul.focus();
});

document.addEventListener("keydown", (e) => {
  if (answer.innerHTML != "") {
    if (estNumerique(e.key)) {
      calcul.value = "";
      answer.innerHTML = "";
    } else {
      let expression = calcul.value;
      expression = Remplace(expression);
      const text1 = eval(`${expression}`);
      calcul.value = text1;
      answer.innerHTML = "";
    }
  }
  if (e.key == "Enter") {
    e.preventDefault();
    if (calcul.value === "") {
      answer.innerHTML = 0;
    } else {
      let expression = calcul.value;
      expression = Remplace(expression);
      const text = eval(`${expression}`);
      answer.innerHTML = "= " + text;
      ans_value = text;
    }
  } else {
    if (e.key == "Backspace") {
      const calc = calcul.value;
      const shortString = calc.substring(0, calc.length - 1);
      calcul.value = shortString;
    } else {
      if (estNumerique(e.key) || estOperateur(e.key)) {
        calcul.value += e.key;
      }
    }
  }
});
