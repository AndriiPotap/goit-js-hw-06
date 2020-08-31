import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
return users.sort((frA,frB) => frA.friends.length - frB.friends.length).map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]