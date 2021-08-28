console.log("Vowel Counter:-");

var input = document.querySelector("textarea");
var display = document.querySelector("span");
var button = document.querySelector("button");
var reset = document.querySelector("#reset");
var str;
var arr = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
var count = 0;
input.addEventListener("input", (e) => {
  str = e.target.value;
});

button.addEventListener("click", () => {
  var len = str.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 10; j++) {
      if (str[i] == arr[j]) {
        count++;
      }
    }
  }
  console.log(count);
  display.innerHTML = count;
});

reset.addEventListener("click", () => {
  str = "";
  input.value = "";
  count = 0;
  display.innerHTML = "00";
});
