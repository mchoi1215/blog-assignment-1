// function newElement() {
//   var li = document.createElement("li");
//   var inputName = document.getElementById("name").value; 
//   var inputValue = document.getElementById("message").value;
//   var middle= " says: "; 
//   var t = document.createTextNode(inputName + middle + inputValue);
//   li.appendChild(t);
//   if (inputValue === '' || inputName === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("allcomments").appendChild(li);
//   }
//   document.getElementById("message").value = "";
//   document.getElementById("name").value = "";

//   var span = document.createElement("SPAN");
  

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
const form = document.getElementById("commentform");
const ul = document.getElementById("allcomments");
const button = document.querySelector("button");
const inputName = document.getElementById("name"); 
const inputMessage = document.getElementById("message");
const middle = " says: "; 

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    var li = document.createElement('li'); 
    li.textContent = text;
    ul.appendChild(li);
}

function newElement() {
  if (inputMessage.value === '' || inputName.value === '') {
      alert("You must write something!");
    } else {
      itemsArray.push(inputName.value + middle + inputMessage.value);
      localStorage.setItem('items', JSON.stringify(itemsArray));
      liMaker(inputName.value + middle + inputMessage.value);
      inputMessage.value = "";
    inputName.value = ""; 
    }
      
}

data.forEach(message => {
    liMaker(message);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


