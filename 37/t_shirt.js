
make_shirt("Small", "I Love Python");
make_shirt("Medium");
make_shirt();

function make_shirt(size, text = "I Love JavaScript") {
  if (size === undefined) {
    size = "large";
  }
  console.log("-------------------------------");
  console.log(
    "The size of the shirt is: " +
    size +
    "\nAnd the text to be printed is: " +
    text
  );
}
