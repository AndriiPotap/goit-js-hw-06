import users from "./users.js";

const getSortedUniqueSkills = users => {
    return users.reduce((acc, user) => {acc.push(...user.skills);
    return acc
    },[])
    .filter((currentUser, index, array) => array.indexOf(currentUser) === index).sort()
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]