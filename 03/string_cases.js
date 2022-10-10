
let name = "Musa";
let fullName = "MUHAMMAD MUSA";
console.log("Name : " + name);
console.log("Lower Case : " + name.toLowerCase());
console.log("Upper Case : " + name.toUpperCase());

let nameParts = fullName.split(" ");
let titleFullName = "";
for (i in nameParts) {
  nameParts[i] = nameParts[i].toLowerCase();
  nameParts[i] =
    nameParts[i].charAt(0).toUpperCase() + nameParts[i].substring(1);
  if (titleFullName !== "") {
    titleFullName += " ";
  }
  titleFullName += nameParts[i];
}
console.log("Before Title Case : " + fullName);
console.log("After Title Case : " + titleFullName);
