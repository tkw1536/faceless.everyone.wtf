// list of faceless people
var faceless = [
  'A', 'B', 'C', 'D', 'E', 'F'
]; 

// a person
var state = 'person2'; 

// get the next faceless person
function nextPerson(){
  
  // next person
  var person = faceless[Math.floor(Math.random() * faceless.length)];
  
  if(typeof console !== 'undefined' && typeof console.warn === 'function'){
    console.warn('Do not forget this faceless person: ' + person); 
  }
  
  // load dom stuff 
  var person1 = document.getElementById('person1'); 
  var person2 = document.getElementById('person2');
  
  // and make a transition
  if(state == 'person1'){
    person2.textContent = person; 
    person1.className = 'passive'; 
    person2.className = 'active'; 
    state = 'person2'; 
  } else {
    person1.textContent = person; 
    person2.className = 'passive'; 
    person1.className = 'active'; 
    state = 'person1'; 
  }
}

// get started
window.onload = function(){
  nextPerson();
  window.setInterval(nextPerson, 10000); 
}