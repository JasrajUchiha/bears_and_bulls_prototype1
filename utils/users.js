const users = [];
const userWord = {};
const roomInfo = {
  //username: flag for checking if it is their turn
}
//joining to chat
function userJoin(id, username, room){
  const user = {id, username, room};
  users.push(user);

  return user;
}

function getCurrentUser(id){
  return users.find(user => user.id === id);
}

function putUserWord(id, word){
  userWord[id]=word;
}

function getUserWord(id){
  return userWord[id];
}

function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

function getID(name){
  return users.find(user => user.username === name);
}

function checkRoomAvailability(roomy){
  var count = 0;
  for (var i = 0; i < users.length; i++){
    // console.log(users[i].room);
    // console.log(roomy);
    if (users[i].room == roomy){
      // console.log(users[i].room)
      // console.log(roomy);
      count+=1;
    }
  }
  if (count<2){
    return true;
  }
  else{
    return false;
  }
}

//
function getOwnWordStatus(username){
  for(var i in userWord){
    // console.log(i);
    if (i == username){
      // console.log("Start the game ya shithouse")
      return true;
    }
  }
  return false;
}

function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
// function putOwnWord(username){
//   usersWhoHaveInput.push(username);
// }

module.exports = {
  userJoin,
  getCurrentUser,
  putUserWord,
  getUserWord,
  getRoomUsers,
  getID,
  checkRoomAvailability,
  getOwnWordStatus,
  userLeave
};
