var magic8 = ["Yup!", "Fuhgeddaboutit", "Maybe", "What would your mother do?", "What would an Australian do? then do the opposite.", "Try Again Later"]

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function magic8Ball(){
      document.getElementById("cheese").innerHTML = magic8[getRandomNumber(0, magic8.length-1)]
}
