setInterval (clock , 500);
function clock() {
      let now = new Date();
  let hours = now.getHours();
  let mint = now.getMinutes();
  let second = now.getSeconds();
  let ampm = "AM"
  if (hours > 12 ) {
      hours =hours -12
      ampm= ampm = "PM"
  }
  if (hours === 0) {
      hours = 12
  }     
  if (hours <10 ) {
  hours ="0" + hours
}
  if (mint <10 ) {
  mint ="0" + mint
}
  if (second <10 ) {
  second ="0" + second
}
  document.getElementById('hr').innerHTML=hours;
  document.getElementById('mint').innerHTML=mint;
  document.getElementById('sec').innerHTML=second;
  document.getElementById('ampm').innerHTML=ampm;
}


