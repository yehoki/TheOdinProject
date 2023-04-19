function capitalize(string) {
    if (typeof string !== "string"){
        return string;
    }
    if (string.length < 2){
        return string.toUpperCase();
    }
    const rest = string.slice(1, string.length + 1);
    return string[0].toUpperCase() + rest;

}

// console.log(capitalize("") == "");
// console.log(capitalize(2));
// console.log(capitalize("www"));
// console.log(capitalize("!w"));
// console.log(capitalize("ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()));

export default capitalize;
