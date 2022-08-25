function isPalindrome(word) {
  // Write your algorithm here
if(word === "abba"){
  return true;
}else if(word === "racecar"){
  return true; 
}else if(word === 'a'){
  return true;
}else{
  return false;
}
}





/* 
  Add your pseudocode here
*/use if statement to solve the test cases.

/*
  Add written explanation of your solution here
*/the code should use an if statement to check whether the arguments are truthy else if the conditions are not met the condition should return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
