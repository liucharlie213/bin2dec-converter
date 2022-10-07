const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const binaryEl = document.getElementById("binary-el");
const decimalEl = document.getElementById("decimal-el");
const calcEl = document.getElementById("calc-el");

function positive(numberStr) {
  const number = parseInt(numberStr);
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}

resetBtn.addEventListener("click", function() {
  binaryEl.value = "";
  decimalEl.value = "";
  calcEl.value = "";
})

convertBtn.addEventListener("click", function() {
  const binaryVal = binaryEl.value;
  let valid = true;

  if (positive(binaryVal)) {
    for (let i = 0; i < binaryVal.length; i++) {
      if (binaryVal[i] != 0 && binaryVal[i] != 1){
        valid = false;
      }
    }
    if (valid === false) {
      alert("Invalid input. Please enter a valid binary string");
    }
    if (binaryVal != "" && valid === true){
      decimalEl.value = bin2DecPos(binaryVal)[0];
      calcEl.value = bin2DecPos(binaryVal)[1];
    }
  } else {
    for (let i = 1; i < binaryVal.length; i++) {
      if (binaryVal[i] != 0 && binaryVal[i] != 1){
        valid = false;
      }
    }
    if (valid === false) {
      alert("Invalid input. Please enter a valid binary string");
    }
    if (binaryVal != "" && valid === true){
      decimalEl.value = `-${bin2DecNeg(binaryVal)[0]}`;
      calcEl.value = `-(${bin2DecNeg(binaryVal)[1]}`;
    }
  }
})

function bin2DecPos(binStr) {
  const length = binStr.length;
  let i = length - 1;
  let j = 0;
  let dec = 0;
  let calcSteps = "";
  let answers = [];
  while (i >= 0 && j < length) {
    dec += (parseInt(binStr[j])*(2**i));
    if (i === 0) {
      calcSteps += `(${binStr[j]}*2^${i}) = ${dec}`;
    }
    else {
      calcSteps += `(${binStr[j]}*2^${i}) + `; 
    }
    i--;
    j++;
  }
  answers.push(dec);
  answers.push(calcSteps);
  return answers;
}

function bin2DecNeg(binStr) {
  const length = binStr.length;
  let i = length - 2;
  let j = 1;
  let dec = 0;
  let calcSteps = "";
  let answers = [];
  while (i >= 0 && j < length) {
    dec += (parseInt(binStr[j])*(2**i));
    if (i === 0) {
      calcSteps += `(${binStr[j]}*2^${i})) = -${dec}`;
    }
    else {
      calcSteps += `(${binStr[j]}*2^${i}) + `; 
    }
    i--;
    j++;
  }
  answers.push(dec);
  answers.push(calcSteps);
  return answers;
}

console.log("wow");


