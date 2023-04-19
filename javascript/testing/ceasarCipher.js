function ceasarCipher(string, shift) {
  // 65  - 90 upper case
  // 97 - 122 lower case
  let newString = "";
  let newChar = "";
  for (const char of string) {
    if (char.charCodeAt(0) < 91 && char.charCodeAt(0) > 64) {
      // lower case handle
      newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
    } else if (char.charCodeAt(0) < 123 && char.charCodeAt(0) > 96) {
      // upper case handle
      newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
    } else {
      newChar = char;
    }
    newString += newChar;
  }
  return newString;
}

export default ceasarCipher;
