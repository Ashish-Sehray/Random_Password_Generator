const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "~!@#$%^&*()_/";
const numberSet = "1234567890";
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};
// selector
const passwords = document.querySelector("#password");
const length = document.querySelector("#lengths");
const uppercase = document.querySelector("#uppercase");

const lowerCase = document.querySelector("#Lowercase");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");
const button = document.querySelector("button");
const getPassword = (password = "") => {
  if (uppercase.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowerSet);
  }
  if (symbol.checked) {
    password += getRandomData(symbolSet);
  }
  if (number.checked) {
    password += getRandomData(numberSet);
  }
  if (password.length < length.value) {
    return getPassword(password);
  }
  passwords.innerText = truncateString(password, length.value);

  // console.log(truncateString(password, length.value));
};
getPassword();

// password.innerText = "ASHISH";
button.addEventListener("click", function () {
  getPassword();
});
function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
