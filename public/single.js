var words = ['acid', 'aged', 'also', 'army', 'back', 'band', 'bank', 'base', 'bath', 'bear', 'beat', 'belt', 'best', 'bird', 'blow', 'blue', 'boat', 'body', 'bond', 'bone', 'born', 'both', 'bowl', 'bulk', 'burn', 'bush', 'busy', 'calm', 'came', 'camp', 'card', 'care', 'case', 'cash', 'cast', 'chat', 'chip', 'city', 'club', 'coal', 'coat', 'code', 'cold', 'come', 'cope', 'copy', 'CORE', 'cost', 'crew', 'crop', 'dark', 'date', 'dawn', 'days', 'deal', 'dean', 'dear', 'debt', 'deny', 'desk', 'dial', 'dick', 'diet', 'disc', 'disk', 'does', 'done', 'dose', 'down', 'draw', 'drew', 'drop', 'drug', 'dual', 'duke', 'dust', 'duty', 'each', 'earn', 'east', 'easy', 'evil', 'exit', 'face', 'fact', 'fail', 'fair', 'farm', 'fast', 'fate', 'fear', 'felt', 'file', 'film', 'find', 'fine', 'fire', 'firm', 'fish', 'five', 'flat', 'flow', 'ford', 'form', 'fort', 'four', 'from', 'fuel', 'fund', 'gain', 'game', 'gate', 'gave', 'gear', 'gift', 'girl', 'give', 'glad', 'goal', 'goes', 'gold', 'Golf', 'gone', 'gray', 'grew', 'grey', 'grow', 'gulf', 'hair', 'half', 'hand', 'hang', 'hard', 'harm', 'hate', 'have', 'head', 'hear', 'heat', 'held', 'help', 'hero', 'hire', 'hold', 'hole', 'holy', 'home', 'hope', 'host', 'hour', 'huge', 'hung', 'hunt', 'hurt', 'idea', 'inch', 'into', 'iron', 'item', 'jack', 'jane', 'jean', 'john', 'join', 'jump', 'jury', 'just', 'kent', 'kept', 'kind', 'king', 'knew', 'know', 'lack', 'lady', 'laid', 'lake', 'land', 'lane', 'last', 'late', 'lead', 'left', 'life', 'lift', 'like', 'line', 'link', 'list', 'live', 'load', 'loan', 'lock', 'long', 'lord', 'lose', 'lost', 'love', 'luck', 'made', 'mail', 'main', 'make', 'male', 'many', 'Mark', 'meal', 'mean', 'meat', 'menu', 'mike', 'mile', 'milk', 'mind', 'mine', 'mode', 'more', 'most', 'move', 'much', 'must', 'name', 'navy', 'near', 'neck', 'news', 'next', 'nice', 'nick', 'nose', 'note', 'okay', 'once', 'only', 'open', 'oral', 'over', 'pace', 'pack', 'page', 'paid', 'pain', 'pair', 'palm', 'park', 'part', 'past', 'path', 'peak', 'pick', 'pink', 'plan', 'play', 'plot', 'plug', 'plus', 'port', 'post', 'pure', 'push', 'race', 'rail', 'rain', 'rank', 'rate', 'read', 'real', 'rely', 'rent', 'rest', 'rice', 'rich', 'ride', 'ring', 'rise', 'risk', 'road', 'rock', 'role', 'rose', 'rule', 'rush', 'ruth', 'safe', 'said', 'sake', 'sale', 'salt', 'same', 'sand', 'save', 'seat', 'self', 'send', 'sent', 'sept', 'ship', 'shop', 'shot', 'show', 'shut', 'sick', 'side', 'sign', 'site', 'size', 'skin', 'slip', 'slow', 'snow', 'soft', 'soil', 'sold', 'sole', 'some', 'song', 'sort', 'soul', 'spot', 'star', 'stay', 'step', 'stop', 'such', 'suit', 'sure', 'take', 'tale', 'talk', 'tank', 'tape', 'task', 'team', 'tech', 'tend', 'term', 'than', 'them', 'then', 'they', 'thin', 'this', 'thus', 'time', 'tiny', 'told', 'tone', 'tony', 'tour', 'town', 'trip', 'true', 'tune', 'turn', 'twin', 'type', 'unit', 'upon', 'used', 'user', 'vary', 'vast', 'very', 'vice', 'view', 'vote', 'wage', 'wait', 'wake', 'walk', 'want', 'ward', 'warm', 'wash', 'wave', 'ways', 'weak', 'wear', 'went', 'west', 'what', 'when', 'whom', 'wide', 'wife', 'wild', 'wind', 'wine', 'wing', 'wire', 'wise', 'wish', 'with', 'word', 'wore', 'work', 'yard', 'yeah', 'year', 'your', 'zero', 'zone']

var compWordIndex = Math.floor(Math.random()*words.length)
var compWord = words[compWordIndex]
// console.log(compWord + compWordIndex)

var button1 = document.getElementById("button");
button1.addEventListener('click', function(){BearsandBulls(compWord)});

function BearsandBulls(compWord){
  console.log(compWord)
  var txt = document.getElementById("text").value;
  // console.log(txt);
  txt = txt.toLowerCase();
  if (checkValid(txt)){
  checkBearsandBulls(txt, compWord);
}
}

function checkValid(txt){
  if (txt.length === 4){
    // console.log("Text length is Perfect");
  if (checkRepeat(txt)){
    return true;
  }
  else {
    return false;
  }
}
  else {alert("Guessword Length should be equal to 4");}
}

function checkRepeat(txt){
  for (var i=0; i< txt.length; i++){
    for (var j=0; j<txt.length; j++){
      if (txt[i]==txt[j] && i!=j){
        alert("Text Repeating");
        return false;
      }
    }
  }
  // console.log("Text NOT Repeating");
  return true;
}

function checkBearsandBulls(txt, compWord){
  var bulls = 0
  var bears = 0
  for(var i = 0; i < 4; i++){
    for (var j = 0; j < 4; j++){
      if (txt[i] == compWord[j] && i == j){
        bulls+=1
      }
      else if(txt[i] == compWord[j] && i!=j){
        bears+=1
      }
    }
  }
  if (bulls == 4) {
    completeGame(compWord);
  }
    // console.log(bears+" "+bulls)//
    showBearsandBulls(txt, bears, bulls);
}

function showBearsandBulls(txt, bears, bulls){
  var table = document.getElementById("tableofwords")
  // var tblBody = document.getElementById.createElement("tbody");
  // var row = document.createElement("tr")
  // var guessed = document.createElement("td")
  // var bearsout = document.createElement("td");
  // var bullsout = document.createElement("td");
  // var guessedtext = document.createTextNode(txt)
  // var bearstext = document.createTextNode(bears)
  // var bullstext = document.createTextNode(bulls)
  // guessed.appendChild(guessedtext)
  // bearsout.appendChild(bearstext)
  // bullsout.appendChild(bullstext)
  // row.appendChild(guessed);
  // row.appendChild(bearsout);
  // row.appendChild(bullsout);
  // table.appendChild(row);
  var row = table.insertRow(1);
  var cell = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  cell.innerHTML = txt;
  cell1.innerHTML = bears;
  cell2.innerHTML = bulls;
  var text = document.getElementById("text");
  text.value = "";
}
function completeGame(compWord){
  alert("Congratulations! You Beat the Computer!!");
}
