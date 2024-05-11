// 1-masala

// let inputString =prompt("Harflarni kiriting: ");
// function letters(str) {
//  let result = "";
//  for (let i = 0; i < str.length; i++) {
//      result += str[i].repeat(i + 1) + "-";
//  }
//  return result.slice(0, -1);
// }

// let natija = letters(inputString);
// console.log(natija);

// 2-masala

// function lettersReturned(str) {
//  return /[a-zA-Z]/.test(str);
// }

// let inputString = "tolibjon";
// let result = lettersReturned(inputString);
// console.log(result);

// 3-masala

// let numbers = [1, 2, 3, 4, 5];
// function isSumEven(array) {
// 	let sum = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	return sum % 2 === 0;
// }
// let isEven = isSumEven(numbers);
// console.log(isEven);


// 4-masala

// let number=Number(prompt("Sonni kiriting: "))
// function getDivisors(num) {
//  let divisors = [];
//  for (let i = 1; i <= num; i++) {
//      if (num % i === 0) {
//          divisors.push(i);
//      }
//  }
//  return divisors;
// }

// let result = getDivisors(number);
// console.log(result);

// 5-masala

// function capitalizeFirstLetter(Letter) {
//  let words = Letter.split(" ");
//  for (let i = 0; i < words.length; i++) {
//      let word = words[i];
//      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//  }
//  return words.join(" ");
// }
// let Text = "my fullname is egamberdiyev tolibjon"

// let result = capitalizeFirstLetter(Text);
// console.log(result);

// 6-masala

let word = prompt("so'zni kiritng")
function getMiddleWord(str) {
 let length = str.length;
 if (length % 2 === 0) {
     return str.substring(length / 2 - 1, length / 2 + 1);
 } else {
     return str.charAt(Math.floor(length / 2));
 }
}


let result= getMiddleWord(word);
console.log(result);

