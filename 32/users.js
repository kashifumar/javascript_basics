
let current_users = ["mUsa", "ali", "admin", "adil", "ahmed"];
let new_users = ["Musa", "rizwan", "adnan", "adil", "mirha"];

if (new_users.length > 0) {
  for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
      if (current_users[j].toLowerCase() == new_users[i].toLowerCase()) {
        console.log(
          "The user needs to select a new user name for " + new_users[i]
        );
      } else {
        console.log("user name " + new_users[i] + " is available");
      }
    }
  }
} else {
  console.log("We Need to Find Some Users");
}
