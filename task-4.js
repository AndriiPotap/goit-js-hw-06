import users from "./users.js";

function getInactiveUsers(arr) {
  return arr.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]