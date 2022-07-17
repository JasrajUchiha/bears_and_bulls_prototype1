var socket = io.connect('http://localhost:3000');

var button = document.getElementById('joinbutton');
var joinButton = document.getElementById('join');
var room = document.getElementById('room');

joinButton.style.display = "none";
joinButton.disabled = true;
// console.log(roomcode);
button.addEventListener('click', function(){
  var roomcode = room.value;
  // console.log(socket.id);
  socket.emit('checkAvail', {socketid: socket.id, roomcode})
  socket.on('checkedAvail', function(data){
    if(data.result == true){
      joinButton.disabled = false;
      joinButton.click();
    }
    else{
      alert("The Room is Full");
    }
    // console.log(data)
  })
  // console.log(roomcode);
})
