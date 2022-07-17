const express =  require('express')
const socket = require('socket.io')
const app = express()
const {userJoin, getCurrentUser, putUserWord, getUserWord, getRoomUsers, getID, checkRoomAvailability, getOwnWordStatus, userLeave} = require('./utils/users');


const server = app.listen(3000, function () {console.log("listening on port 3000")})


app.use(express.static('public'))

const io = socket(server)

io.on('connection', function (socket) {
  // console.log("connection")
  socket.on('checkAvail', function(data){
    var roomcoco = data.roomcode;
    // console.log(roomcoco);
    var result = checkRoomAvailability(roomcoco);
    // console.log(result);
      io.to(data.socketid).emit('checkedAvail', {result})
  })
  socket.on('joinRoom', ({username, room})=>{
    const user = userJoin(socket.id, username, room);
    //joining a user to a room
    socket.join(user.room);
    //sending user information to a room
    io.to(user.room).emit('message', {
      username,
      room,
      users:getRoomUsers(user.room)
    });

    //receiving opponents pickedWord and broadcasting to other boi for comparison
    socket.on('ownWord', function(ownWord){
      const userWord = putUserWord(socket.id, ownWord);
      // var ww = getUserWord(socket.id);
      const currentUser = getCurrentUser(socket.id);
      const roomUsers = getRoomUsers(currentUser.room);
      var opponentHasInput = false;
      for(var i=0; i < roomUsers.length ; i++){
        // console.log(roomUsers[i].username);
        if(roomUsers[i].id != socket.id){
          opponentHasInput = getOwnWordStatus(roomUsers[i].id)
          // console.log(opponentHasInput);
        }
      }
      if(opponentHasInput){
        io.to(currentUser.room).emit('startGame');
      }
    })

    //sending the guessedword to the other room
    socket.on('guess', function(data){
      // io.sockets.emit('chat', data);
      // var {bears, bulls} = getBB()
      var opponent = getID(data.opponent);
      // console.log(getUserWord(opponent.id))
      var opponentWord = getUserWord(opponent.id);
      // console.log(data.guess);
      var {bears, bulls} = getBB(data.guess, opponentWord);
      // console.log(bears);
      // console.log(bulls);
      if(bulls == 4){
        io.to(user.room).emit('win', {winner: data.username})
      }
      // console.log(data.opponent);
      var newData = {
        guess: data.guess,
        Name: data.username,
        bears,
        bulls
      }
      io.to(user.room).emit('chat', newData);
    })

  })

  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'left', `${user.username} has left the Game :(`);


      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
})



//bears and bulls calculator function
function getBB(guess, against){
  var bulls = 0
  var bears = 0
  for(var i = 0; i < 4; i++){
    for (var j = 0; j < 4; j++){
      if (guess[i] == against[j] && i == j){
        bulls+=1
      }
      else if(guess[i] == against[j] && i!=j){
        bears+=1
      }
    }
  }
    return {bears, bulls}
}
