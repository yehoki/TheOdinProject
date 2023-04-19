function reverseString(string) {
  if (typeof string !== "string" || string.length < 2) {
    return string;
  }
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

export default reverseString;
