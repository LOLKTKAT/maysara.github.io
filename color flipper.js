const hex = [0,1,2,3,4,5,6,7,8,9,'A','B',
'C','D','E','F'];

var h1 = document.getElementById("color");
const btn = document.getElementById("btn");

function fun(){

  var hexColor = "#";         
  for (var i=0; i < 6; i++){
    hexColor += hex[randomNum()];
  }
  console.log(hexColor);
  h1.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};
function randomNum() {    
  return Math.floor (Math.random() * hex.length);
  }
